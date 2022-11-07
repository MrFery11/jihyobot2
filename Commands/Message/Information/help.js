const {
  Message,
  EmbedBuilder,
  ActionRowBuilder,
  SelectMenuBuilder,
} = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "help",
  aliases: ["h"],
  description: `Necesitas ayuda? Ve todos mis comandos!`,
  userPermissions: [],
  botPermissions: ["EMBED_LINKS"],
  category: "Information",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  run: async (client, message, args, prefix, queue) => {
    const emoji = {
      Information: "🔰",
      Interaction: "♥️",
      Music: "🎵",
      Settings: "⚙️",
    };

    let allcommands = client.mcommands.size;
    let allguilds = client.guilds.cache.size;
    let botuptime = `<t:${Math.floor(
      Date.now() / 1000 - client.uptime / 1000
    )}:R>`;

    let raw = new ActionRowBuilder().addComponents([
      new SelectMenuBuilder()
        .setCustomId("help-menu")
        .setPlaceholder(`Click para ver todas las categorías`)
        .addOptions(
          [
            {
              label: `Home`,
              value: "home",
              emoji: `🏘️`,
              description: `Click para ir al comando Help`,
            },
            client.mcategories.map((cat) => {
              return {
                label: `${cat.toLocaleUpperCase()}`,
                value: cat,
                emoji: emoji[cat],
                description: `Click para ver los comandos de ${cat}`,
              };
            }),
          ].flat(Infinity)
        ),
    ]);

    let help_embed = new EmbedBuilder()
      .setColor(client.config.embed.color)
      .setAuthor({
        name: client.user.tag,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(message.guild.iconURL({ dynamic: true }))
      .setDescription(
        `**Hola soy Jihyo! una Bot con comandos de música, interacción, kpop y más!**`
      )
      .addFields([
        {
          name: `Estadísticas`,
          value: `>>> ** :gear: \`${allcommands}\` Comandos \n :file_folder: \`${allguilds}\` Servidores \n🏓 \`${client.ws.ping}\` Ping**`,
        },
      ])
      .setFooter(client.getFooter(message.author));

    let main_msg = await message.reply({
      embeds: [help_embed],
      components: [raw],
    });

    let filter = (i) => i.user.id === message.author.id;
    let colector = await main_msg.createMessageComponentCollector({
      filter: filter,
      time: 60000,
    });
    colector.on("collect", async (i) => {
      if (i.isSelectMenu()) {
        await i.deferUpdate().catch((e) => {});
        if (i.customId === "help-menu") {
          let [directory] = i.values;
          if (directory == "home") {
            main_msg.edit({ embeds: [help_embed] }).catch((e) => {});
          } else {
            main_msg
              .edit({
                embeds: [
                  new EmbedBuilder()
                    .setColor(client.config.embed.color)
                    .setTitle(
                      `${emoji[directory]} Comandos de ${directory} ${emoji[directory]}`
                    )
                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                    .setDescription(
                      `>>> ${client.mcommands
                        .filter((cmd) => cmd.category === directory)
                        .map((cmd) => {
                          return `\`${cmd.name}\``;
                        })
                        .join(" ' ")}`
                    )
                    .setFooter(client.getFooter(message.author)),
                ],
              })
              .catch((e) => null);
          }
        }
      }
    });

    colector.on("end", async (c, i) => {
      raw.components.forEach((c) => c.setDisabled(true));
      main_msg.edit({ components: [raw] }).catch((e) => {});
    });
  },
};
