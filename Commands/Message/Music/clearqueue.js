const { Message } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "clear",
  aliases: ["clq", "clearq","clearqueue"],
  description: `Limpia la fila de reproducción`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  run: async (client, message, args, prefix, queue) => {
    queue.remove();
    client.embed(message, `${client.config.emoji.SUCCESS} Fila de reproducción borrada!!`);
  },
};
