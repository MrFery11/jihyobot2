const { CommandInteraction } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "resume",
  description: `Resume la canción pausada`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  type: "CHAT_INPUT",
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  run: async (client, interaction, args, queue) => {
    if (queue.paused) {
      queue.resume();
      client.embed(
        interaction,
        `${client.config.emoji.SUCCESS} fila de reproducción resumida!!`
      );
    } else {
      client.embed(
        interaction,
        `${client.config.emoji.ERROR} la música ya está sonando!!`
      );
    }
  },
};
