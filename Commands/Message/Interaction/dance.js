const { Message, EmbedBuilder } = require("discord.js");
const JUGNU = require("../../../handlers/Client");

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

const gifs = ["https://media.giphy.com/media/cjbNdsc1skieopmiRn/giphy.gif", //h
                    "https://media.giphy.com/media/dupcBVGylr8QguX3oR/giphy.gif", //a
                    "https://media.giphy.com/media/3ofSBxMV5fAcajc1uE/giphy.gif", //n
                    "https://media.giphy.com/media/xUySTwLwseIfsPU9tC/giphy.gif", //g
                    "https://media.giphy.com/media/xUySTNGwqzBcIrBHAk/giphy.gif", //e
                    "https://media.giphy.com/media/3otPoSEBU9i4zVnscM/giphy.gif", //t
                    "https://media.giphy.com/media/xUySTIOdORISCW2gH6/giphy.gif", //e
                    "https://media.giphy.com/media/3ofT5YGIVQny3DxhE4/giphy.gif", //a
                    "https://media.giphy.com/media/3ohuPy9tCuGoHxOumk/giphy.gif", //m
                    "https://media.giphy.com/media/ll6t6YCMtDRELFtznG/giphy.gif",
                    "https://media.giphy.com/media/l1AvAaC95NS3ggxP2/giphy.gif", //j
                    "https://media.giphy.com/media/UWmerXS1W8h7CML7tG/giphy.gif", //l
                    "https://media.giphy.com/media/l3fZMdKhhzLZuSF2g/giphy.gif", //b
                    "https://media.giphy.com/media/iGMYJ6iWFcNUA6Z0T0/giphy.gif", //s
                    "https://media.giphy.com/media/gJnKkHxaHifu1uQjvz/giphy.gif", //c
                    "https://media.giphy.com/media/3ofT5H4jVy3iz5PCJG/giphy.gif", //w
                    "https://media.giphy.com/media/xUySTUe1J3OyKfpj3i/giphy.gif", //v
                    "https://media.giphy.com/media/xUySTGgXspahkNlAOI/giphy.gif", //z
                    "https://media.giphy.com/media/3ofT5Jd7muZHslAxmU/giphy.gif", //e
                    "https://media.giphy.com/media/lPjImlE9Q7JxwxkXMl/giphy.gif"] //o

module.exports = {
  name: "dance",
  description: `Bailas!`,
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
        .setDescription(`**${message.author.username}** está bailando.`)
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