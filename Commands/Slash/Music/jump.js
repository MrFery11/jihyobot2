const { CommandInteraction } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "jump",
  description: `Salta hasta una canción de la fila de reproducción`,
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
      name: "numero",
      description: `Número de la canción en la fila`,
      type: "NUMBER",
      required: true,
    },
  ],

  run: async (client, interaction, args, queue) => {
    let index = interaction.options.getNumber("numero");
    let song = queue.songs[index]
    if (index > queue.songs.length - 1 || index < 0) {
      return client.embed(
        interaction,
        `${
          client.config.emoji.ERROR
        } **El número debe de estar entre \`0\` y \`${
          queue.songs.length - 1
        }\`!**`
      );
    } else {
      queue.jump(index).then((q) => {
        client.embed(
          interaction,
          `** ${client.config.emoji.SUCCESS} Saltado hasta la canción [\`${song.name}\`](${song.url}) **`
        );
      });
    }
  },
};
