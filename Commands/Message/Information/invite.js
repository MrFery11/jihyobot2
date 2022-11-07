const { Message } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");
const { links } = require("../../../settings/config");

module.exports = {
  name: "invite",
  aliases: ["inv"],
  description: `Obtén invitación para unirme a tu servidor!!`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["EMBED_LINKS"],
  category: "Information",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  run: async (client, message, args, prefix, queue) => {
    client.embed(
      message,
      //`[\`Click to Invite Me\`](${links.inviteURL.replace(
      //  "BOTID",
      //  client.user.id
      //)})`
      "Si gustas invitarme a tu servidor, manda mensaje a MrFery#7001"
    );
  },
};
