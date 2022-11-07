const { Message, EmbedBuilder } = require("discord.js");
const JUGNU = require("../../../handlers/Client");

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

const gifs = ["https://media.giphy.com/media/Wt0L9Wkkuu1ZyaqCRV/giphy.gif", //a
                    "https://media.giphy.com/media/f47nExHdklP0UYB4aI/giphy.gif", //n
                    "https://media.giphy.com/media/gg3XU0ggfN7B0tlHnw/giphy.gif", //g
                    "https://media.giphy.com/media/xUySTBRAUhcg7qDPb2/giphy.gif", //e
                    "https://media.giphy.com/media/3ofT5z8ilULbVXkAWQ/giphy.gif", //t
                    "https://media.giphy.com/media/l0ErGpVy0pr9rDvwI/giphy.gif", //e
                    "https://media.giphy.com/media/3ofT5D3daGg49kuMcE/giphy.gif", //a
                    "https://media.giphy.com/media/3o6wrHdH9z6sZnfYfm/giphy.gif", //m
                    "https://media.giphy.com/media/3o6wrCIhyQtzF85QIg/giphy.gif",
                    "https://c.tenor.com/DOFKkmDRwKcAAAAd/jihyo-jihyo-eating.gif",
                    "https://c.tenor.com/4_tuKfG57V4AAAAd/jihyo-eating-food-too-good-jihyo.gif",
                    "https://64.media.tumblr.com/9f112d2365a12f1d1bae5cdf85607def/f50e00da507360e8-1f/s640x960/38eee87e373840a9aae45c0eed6c01006c50f410.gif"] //o

module.exports = {
  name: "eat",
  description: `Comes!`,
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
        .setDescription(`**${message.author.username}** está comiendo. 😋`)
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
