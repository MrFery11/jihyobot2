const { Message, EmbedBuilder } = require("discord.js");
const JUGNU = require("../../../handlers/Client");

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

const gifs = ["https://c.tenor.com/Zto7yOyjF8kAAAAd/twice-dahyun.gif", //11
"https://c.tenor.com/nWJa2KKd9SYAAAAC/tzuyu-tears.gif", //12
"https://media.tenor.com/ZjGRkH5Nf1UAAAAC/twice-sana.gif", //13
"https://media.tenor.com/FnZP1Unvn5kAAAAd/twice-sad.gif", //14
"https://media.tenor.com/WpRecHgpOPsAAAAd/twice-mina.gif", //15
"https://media.tenor.com/iOnqJXh8hU8AAAAC/kpop-twice.gif", //16
"https://media.tenor.com/r8jRyxwVLvEAAAAC/twice-dahyun.gif", //17
"https://media.tenor.com/I-jFmOOAGh4AAAAC/nayeon-crying.gif", //18
"https://media.tenor.com/gDA34jK_dG4AAAAd/twice-cry.gif", //19
"https://media.tenor.com/gIN5jtRbgJwAAAAS/nayeon-twice.gif", //20
"https://media.tenor.com/GjLFH2UAOxsAAAAS/nayeon-jeongyeon.gif", //21
"https://64.media.tumblr.com/a1d18ea05de568a463998fcc4458859c/b128099a5fec1990-a1/s400x600/23f357fc692cd30672e9a754d13e96f47a88f4f2.gif", //22
"https://media.tenor.com/LCjLYGPThIQAAAAS/spideyvivi.gif"] //23

module.exports = {
  name: "cry",
  description: `Lloras :(`,
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
        .setDescription(`**${message.author.username}** está llorando.`)
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