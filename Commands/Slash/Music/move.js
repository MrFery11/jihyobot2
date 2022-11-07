const { CommandInteraction } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "move",
  description: `move a song in current queue`,
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
      name: "numerocancion",
      description: `Posición de la canción que quieres mover en la fila`,
      type: "NUMBER",
      required: true,
    },
    {
      name: "posicioncancion",
      description: `Posición a la que quieres mover la canción en la fila`,
      type: "NUMBER",
      required: true,
    },
  ],

  run: async (client, interaction, args, queue) => {
    // Code
    let songIndex = interaction.options.getNumber("numerocancion");
    let position = interaction.options.getNumber("posicioncancion");
    if (position >= queue.songs.length || position < 0) position = -1;
    if (songIndex > queue.songs.length - 1) {
      return client.embed(
        interaction,
        ` **La última canción de la fila está en la posición: \`${queue.songs.length}\`**`
      );
    } else if (position === 0) {
      return client.embed(
        interaction,
        `**No puedes mover una canción antes de la actual!**`
      );
    } else {
      let song = queue.songs[songIndex];
      //remove the song
      queue.songs.splice(songIndex);
      //Add it to a specific Position
      queue.addToQueue(song, position);
      client.embed(
        interaction,
        `📑 Se movió **${
          song.name
        }** a la posición **\`${position}\`**, Después de **_${
          queue.songs[position - 1].name
        }_!**`
      );
    }
  },
};
