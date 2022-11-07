const { Message, EmbedBuilder } = require("discord.js");
const JUGNU = require("../../../handlers/Client");

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

const gifs = ["https://media.tenor.com/r1YUwEOQftgAAAAC/sana-dahyun-sana-clapping.gif", //1
"https://media.tenor.com/eaEd3voAI7wAAAAd/nayeon-twice.gif", //2
"https://media.tenor.com/yCjPZRtonKAAAAAC/mina-twice-mina.gif", //3
"https://media.tenor.com/4KtTJLuHWcQAAAAC/twice-kpop.gif", //4
"https://media.tenor.com/IveovEUowQMAAAAC/twice-congratulations.gif", //5
"https://media.tenor.com/AF5ftTDknyMAAAAC/twice-kpop.gif", //6
"https://media.tenor.com/z3ABOORiZfIAAAAC/chaeyoung-clap.gif", //7
"https://media.tenor.com/U-NZkuFnfYoAAAAC/twice-funny.gif", //8
"https://media.tenor.com/0sC-Cf5jsKUAAAAC/tzuyu-cute.gif", //9
"https://media.tenor.com/E9ZL-hIELuwAAAAC/chaeyoung-chaeyoung-clapping.gif", //10
"https://media.tenor.com/Cp5U22Y0M6YAAAAC/2yeon-twice-jeongyeon.gif", //11
"https://media.tenor.com/46LsjSzrOFQAAAAC/twice-jihyo.gif", //12
"https://media.tenor.com/35U5ON1_RWcAAAAC/chaeyoung-applause.gif", //13
"https://media.tenor.com/LbpN-eRFC7wAAAAC/chaeyoung-clap.gif", //14
"https://media.tenor.com/vctybMwja1cAAAAC/twice-nayeon.gif"] //15

module.exports = {
  name: "claps",
  aliases: ["clap"],
  description: `Aplaudes!`,
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
            let interactionEmbed = new EmbedBuilder()
            .setColor(client.config.embed.color)
            .setDescription(`**${message.author.username}** está aplaudiendo.😋`)
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
            .setDescription(`**${message.author.username} ** le aplaude a **${personaextra.username}**.`)
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
