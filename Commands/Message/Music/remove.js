const { Message } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "remove",
  aliases: ["rem", "remsong"],
  description: `Quita una canción de la fila`,
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
    if (!songIndex) {
      return client.embed(
        message,
        `** ${
          client.config.emoji.ERROR
        } Dime una ´posición de canción entre \`0\`-\`${
          queue.songs.length - 1
        }\`**`
      );
    } else if (songIndex === 0) {
      return client.embed(
        message,
        `** ${client.config.emoji.ERROR} No puedes quitar la canción actual! **`
      );
    } else {
      let track = queue.songs[songIndex];
      queue.songs.splice(track, track + 1);
      client.embed(
        message,
        `${client.config.emoji.SUCCESS} Se eliminó \`${track.name}\` de la fila!!`
      );
    }
  },
};
