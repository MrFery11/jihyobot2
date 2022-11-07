const { Message, EmbedBuilder } = require("discord.js");
const JUGNU = require("../../../handlers/Client");

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

const gifs = ["https://i.pinimg.com/originals/7f/b3/db/7fb3db13884a0229b51efe4657f4e55b.gif", //h
                    "https://thumbs.gfycat.com/CompassionateUnawareHuia-max-1mb.gif", //a
                    "https://c.tenor.com/WsCvSexlo_UAAAAd/twice-korean.gif", //n
                    "https://thumbs.gfycat.com/MadFatJaguarundi-max-1mb.gif",
                "https://i.pinimg.com/originals/1e/d4/67/1ed467b7fd5eb20fb3a5c23b55933e33.gif"]

module.exports = {
  name: "pat",
  description: `Acaricias al usuario mencionado!`,
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
            return message.channel.send("Necesitas mencionar a alguien!");
    } else {
        try {
            personaextra = message.mentions.users.first()
            let interactionEmbed = new EmbedBuilder()
            .setColor(client.config.embed.color)
            .setDescription(`**${message.author.username} ** acarició a **${personaextra.username}**.`)
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
