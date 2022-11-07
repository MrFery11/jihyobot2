const { Message } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");
const { swap_pages } = require("../../../handlers/functions");

module.exports = {
  name: "queue",
  aliases: ["q", "list"],
  description: `Ves la fila de reproducción actual`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: true,
  djOnly: false,

  run: async (client, message, args, prefix, queue) => {
    if (!queue.songs.length) {
      return client.embed(
        message,
        `${client.config.emoji.ERROR} Nada en la fila...`
      );
    } else {
      let embeds = await client.getQueueEmbeds(queue);
      await swap_pages(message, embeds);
    }
  },
};
