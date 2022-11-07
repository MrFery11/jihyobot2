const { Message } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "loop",
  aliases: ["lp", "lop"],
  description: `Activa o apaga el modo de repetición/loop`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  run: async (client, message, args, prefix, queue) => {
    // Code
    let loopmode = args[0];
    let mods = ["song", "s", "queue", "q", "off"];
    if (!mods.includes(loopmode)) {
      return client.embed(
        message,
        `Mal uso de comando :: \`\`\`${mods.join(" ' ")}\`\`\``
      );
    }
    if (loopmode === "off") {
      await queue.setRepeatMode(0);
      return client.embed(
        interaction,
        `** ${client.config.emoji.ERROR} Loop Desactivado!! **`
      );
    } else if (loopmode === "song" || loopmode === "s") {
      await queue.setRepeatMode(1);
      return client.embed(
        interaction,
        `** ${client.config.emoji.SUCCESS} Loop activado!! **`
      );
    } else if (loopmode === "queue" || loopmode === "q") {
      await queue.setRepeatMode(2);
      return client.embed(
        interaction,
        `** ${client.config.emoji.SUCCESS} Loop activado!! **`
      );
    }
  },
};
