const { CommandInteraction } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "pause",
  description: `Para la música`,
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
    if (!queue.paused) {
        queue.pause();
        client.embed(
          interaction,
          `${client.config.emoji.SUCCESS} Fila de reproducción pausada!!`
        );
      } else {
        client.embed(
          interaction,
          `${client.config.emoji.ERROR} la Fila de reproducción ya está pausada!!`
        );
      }
  },
};
