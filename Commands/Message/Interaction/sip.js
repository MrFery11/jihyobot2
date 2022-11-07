const { Message, EmbedBuilder } = require("discord.js");
const JUGNU = require("../../../handlers/Client");
const { Queue } = require("distube");

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

const gifs = ["https://media.tenor.com/3_IMYG6_EYoAAAAC/twice-kpop.gif", //a
"https://media.tenor.com/y6zUtUGmmeYAAAAd/twice-jihyo-composerdahyun.gif", //b
"https://media.tenor.com/-i57SyhF9RAAAAAd/twice-reality-time-to-twice.gif", //c
"https://media.tenor.com/lctQ8jVHdbcAAAAd/yeincals-nayeon.gif", //d
"https://media.tenor.com/mLijMPpI0bwAAAAd/nayeon-drinking.gif", //e
"https://media.tenor.com/XYh5lH_3k6cAAAAS/sana-minaszns.gif", //f
"https://media.tenor.com/XYh5lH_3k6cAAAAd/sana-minaszns.gif", //g
"https://media.tenor.com/eRDJitU7SX8AAAAS/613flu-jihyo-reaction.gif", //h
"https://media.tenor.com/GNICF5ggKo0AAAAd/minalocks-nayeon-unimpressed.gif", //I
"https://media.tenor.com/wJVf7kiCmGAAAAAS/momo-twice.gif", //j
"https://media.tenor.com/p0sUTv9eNjgAAAAC/jeongyeon-twice-jeongyeon.gif",
"https://c.tenor.com/tww_4ZKToq8AAAAd/613flu-nayeon-reaction.gif"] //k


module.exports = {
  name: "sip",
  description: `Tomas agua!`,
  userPermissions: ['SEND_MESSAGES'],
  botPermissions: ['EMBED_LINKS'],
  category: "Interaction",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  run: async (client, message, args, prefix, queue) => {
    try {
        let interactionEmbed = new EmbedBuilder()
        .setColor(client.config.embed.color)
        .setDescription(`**${message.author.username}** está bebiendo.`)
        .setImage(gifs.sample())
        .setTimestamp()
        return await message.channel.send({ embeds: [interactionEmbed] });
      } catch (error) {
        console.log(error);
        return await message.channel.send(
          `❌ | No pude encontrar un gif, lo siento :c`
        );
      }
  },
};
