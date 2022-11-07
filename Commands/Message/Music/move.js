const { Message } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "move",
  aliases: ["mv", "nvs"],
  description: `Mueve una canción de la fila de reproducción a otra posición`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  run: async (client, message, args, prefix, queue) => {
    let songIndex = Number(args[0]);
    let position = Number(args[1]);
    if (!songIndex || !position) {
      return client.embed(
        message,
        `${client.config.emoji.ERROR} Mal uso de comando :: ${prefix}move <posiciondecancion> <destinocancion>`
      );
    }
    if (position >= queue.songs.length || position < 0) position = -1;
    if (songIndex > queue.songs.length - 1) {
      return client.embed(
        message,
        ` **La última canción de la fila está en la posición: \`${queue.songs.length}\`**`
      );
    } else if (position === 0) {
      return client.embed(message, `**No puedes mover una canción antes de la actual!**`);
    } else {
      let song = queue.songs[songIndex];
      //remove the song
      queue.songs.splice(songIndex);
      //Add it to a specific Position
      queue.addToQueue(song, position);
      client.embed(
        message,
        `📑 Se movió **${
          song.name
        }** a la posición **\`${position}\`**, Después de **_${
          queue.songs[position - 1].name
        }_!**`
      );
    }
  },
};
