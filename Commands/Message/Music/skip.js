const { Message } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "skip",
  aliases: ["s", "skp"],
  description: `Salta la canción actual de la fila`,
  userPermissions: ["CONNECT"],
  botPermissions: ["CONNECT"],
  category: "Music",
  cooldown: 5,
  inVoiceChannel: true,
  inSameVoiceChannel: true,
  Player: true,
  djOnly: true,

  run: async (client, message, args, prefix, queue) => {
    await queue.skip().catch((e) => null);
    client.embed(message, `${client.config.emoji.SUCCESS}  canción saltada!!`);
  },
};
