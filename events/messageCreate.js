const {
  cooldown,
  check_dj,
  databasing,
  toPascalCase,
} = require("../handlers/functions");
const client = require("..");
const { PREFIX: botPrefix, emoji } = require("../settings/config");
const { PermissionFlagsBits } = require("discord.js");

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.guild || !message.id) return;
  await databasing(message.guildId, message.author.id);
  let settings = await client.music.get(message.guild.id);
  let prefix = settings?.prefix || botPrefix;
  let mentionprefix = new RegExp(
    `^(<@!?${client.user.id}>|${escapeRegex(prefix)})\\s*`
  );
  if (!mentionprefix.test(message.content)) return;
  const [, nprefix] = message.content.match(mentionprefix);
  const args = message.content.slice(nprefix.length).trim().split(/ +/);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) {
    if (nprefix.includes(client.user.id)) {
      client.embed(
        message,
        ` ${emoji.SUCCESS} Para ver todos mis comandos escribe  \`/help\` o \`${prefix}help\``
      );
    }
  }
  const command =
    client.mcommands.get(cmd) ||
    client.mcommands.find((cmds) => cmds.aliases && cmds.aliases.includes(cmd));
  if (!command) return;
  if (command) {
    let queue = client.distube.getQueue(message.guild.id);
    let voiceChannel = message.member.voice.channel;
    let botChannel = message.guild.members.me.voice.channel;
    let checkDJ = await check_dj(client, message.member, queue?.songs[0]);

    if (
      !message.member.permissions.has(
        PermissionFlagsBits[toPascalCase(command.userPermissions[0])] || []
      )
    ) {
      return client.embed(
        message,
        `No tienes el permiso de \`${command.userPermissions}\` para usar \`${command.name}\`!!`
      );
    } else if (
      !message.guild.members.me.permissions.has(
        PermissionFlagsBits[toPascalCase(command.botPermissions[0])] || []
      )
    ) {
      return client.embed(
        message,
        `No tengo el permiso de \`${command.botPermissions}\` para usar \`${command.name}\`!!`
      );
    } else if (cooldown(message, command)) {
      return client.embed(
        message,
        ` Tienes cooldown! Espera \`${cooldown(
          message,
          command
        ).toFixed()}\` Segundos`
      );
    } else if (command.inVoiceChannel && !voiceChannel) {
      return client.embed(
        message,
        `${emoji.ERROR} Necesitas unirte a un canal de voz!`
      );
    } else if (
      command.inSameVoiceChannel &&
      botChannel &&
      !botChannel?.equals(voiceChannel)
    ) {
      return client.embed(
        message,
        `${emoji.ERROR} Necesitas unirte a ${botChannel}!`
      );
    } else if (command.Player && !queue) {
      return client.embed(message, `${emoji.ERROR} Música no sonando`);
    } else if (command.djOnly && checkDJ) {
      return client.embed(
        message,
        `${emoji.ERROR} No eres DJ ni pides canciones..`
      );
    } else {
      command.run(client, message, args, nprefix, queue);
    }
  }
});

function escapeRegex(newprefix) {
  return newprefix.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
}
