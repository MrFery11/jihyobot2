const { Message, EmbedBuilder } = require("discord.js");
const JUGNU = require("../../../handlers/Client");

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

const gifs = ["https://media.tenor.com/3boOuw_6fNsAAAAC/twice-hug.gif", //1
"https://media.tenor.com/7ERO3rUl-3wAAAAC/mina-twice.gif", //2
"https://media.tenor.com/3OtqfLrirhEAAAAC/twice-momo.gif", //3
"https://media.tenor.com/r8zJ58pZX0gAAAAC/chaeyoung-twice.gif", //4
"https://media.tenor.com/c6LL_2jKrMIAAAAd/chaeyoung-happy.gif", //5
"https://media.tenor.com/WuUFVDCNLnoAAAAd/yoo-jeongyeon-jeongyeon.gif", //6
"https://media.tenor.com/g5CujuF0mgcAAAAS/minayeon-mina-hug.gif", //7
"https://media.tenor.com/z6-z9R1C16gAAAAd/chaeyoung-tzuyu.gif", //8
"https://media.tenor.com/xCEh2FrwhJAAAAAC/nationsgaygroup-mina-sana-hug.gif", //9
"https://media.tenor.com/e-wdryQBwHQAAAAC/twice-sana.gif", //10
"https://media.tenor.com/mKl8ESpLjA4AAAAC/jihyo-chaeyoung.gif", //11
"https://media.tenor.com/24NqvmCXh6YAAAAC/twice-sana.gif", //12
"https://media.tenor.com/QtFH5LISIQcAAAAd/mina-surprise.gif", //13
"https://media.tenor.com/CylvbYnf_lcAAAAC/twice-cute-dahyun-and-chae-hug.gif", //14
"https://media.tenor.com/hqTE1e_sbuQAAAAS/samo-sana.gif"] //15

module.exports = {
  name: "hug",
  description: `Abrazas al usuario mencionado!`,
  userPermissions: ['SEND_MESSAGES'],
  botPermissions: ['EMBED_LINKS'],
  category: "Interaction",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  run: async (client, message, args, prefix, queue) => {
    let personamencionada = args.join(' ')
    if(!personamencionada){
        try {
            personaextra = client.users.cache.find(user => user.id === '878088786960085052')
            let interactionEmbed = new EmbedBuilder()
            .setColor(client.config.embed.color)
            .setDescription(`**${personaextra.username} ** abraza a **${message.author.username}**. (つ≧▽≦)つ`)
            .setImage(gifs.sample())
            .setTimestamp()
            return await message.channel.send({ embeds: [interactionEmbed] });
        } catch (error) {
            console.log(error);
            return await message.channel.send(
            `❌ | No pude encontrar un gif, lo siento :c`
            );
        }
    } else {
        try {
            personaextra = message.mentions.users.first()
            let interactionEmbed = new EmbedBuilder()
            .setColor(client.config.embed.color)
            .setDescription(`**${message.author.username} ** abraza a **${personaextra.username}**. (つ≧▽≦)つ`)
            .setImage(gifs.sample())
            .setTimestamp()
            return await message.channel.send({ embeds: [interactionEmbed] });
        } catch (error) {
            console.log(error);
            client.logger(error.message, "error");
            return await message.channel.send(
              `❌ | No pude encontrar un gif, lo siento :c`
            );
        }    
    }
  },
};
