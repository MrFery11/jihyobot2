const { CommandInteraction } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "remove",
  description: `remove a song from current queue`,
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
      name: "posicioncancion",
      description: `Posición de la canción a quitar de la fila`,
      type: "NUMBER",
      required: true,
    },
  ],

  run: async (client, interaction, args, queue) => {
    let songIndex = interaction.options.getNumber("posicioncancion");
    if (songIndex === 0) {
      return client.embed(
        interaction,
        `** ${client.config.emoji.ERROR} No puedes quitar la canción actual! **`
      );
    } else {
      let track = queue.songs[songIndex];
      queue.songs.splice(track, track + 1);
      client.embed(
        interaction,
        `${client.config.emoji.SUCCESS} Se eliminó \`${track.name}\` de la fila!!`
      );
    }
  },
};
