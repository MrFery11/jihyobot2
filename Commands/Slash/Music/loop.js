const { CommandInteraction } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "loop",
  description: `Activa o apaga el modo de repetición/loop`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  type: "CHAT_INPUT",
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,
  options: [
    {
      name: "loopmode",
      description: `Elige el tipo de loop`,
      type: "STRING",
      required: true,
      choices: [
        {
          name: "Canción",
          value: `1`,
        },
        {
          name: "Fila",
          value: `2`,
        },
        {
          name: "Apagar",
          value: `0`,
        },
      ],
    },
  ],

  run: async (client, interaction, args, queue) => {
    let loopmode = Number(interaction.options.getString("loopmode"));
    await queue.setRepeatMode(loopmode);
    if (queue.repeatMode === 0) {
      return client.embed(
        interaction,
        `** ${client.config.emoji.ERROR} Loop Desactivado!! **`
      );
    } else if (queue.repeatMode === 1) {
      return client.embed(
        interaction,
        `** ${client.config.emoji.SUCCESS} Loop activado!! **`
      );
    } else if (queue.repeatMode === 2) {
      return client.embed(
        interaction,
        `** ${client.config.emoji.SUCCESS} Loop de fila activado!!  **`
      );
    }
  },
};
