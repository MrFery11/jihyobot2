const { Message, EmbedBuilder } = require("discord.js");
const JUGNU = require("../../../handlers/Client");

Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
}

const gifs = ["https://64.media.tumblr.com/4bfb67fd7062ba2514d2f39b53eb1ff2/131b1db6dd4785da-7a/s400x600/97996cafdaa82bfbb5d27dc96f51a3e255348ab3.gif", //h
"https://thumbs.gfycat.com/ClassicDecentArchaeopteryx-max-1mb.gif", //a
"https://j.gifs.com/Lg0E84.gif", //n
"https://64.media.tumblr.com/9192bc93ef64f24531a160e3b3e640f6/tumblr_inline_ogcl5xhAeX1r1f7ap_250.gif",
"https://c.tenor.com/ru9o_9t8Y_4AAAAC/twice-kiss.gif",
"https://c.tenor.com/rYYMsleFYusAAAAM/kiss-kiss-cheek.gif",
"https://media.tenor.com/hSCIx5a4ECMAAAAM/twice-tzuyu.gif",
"https://c.tenor.com/BGp6mXXoksEAAAAM/dahyun3p-sana-kiss.gif",
"https://media.tenor.com/5BPfFF0dLdYAAAAC/twice-jihyo.gif",
"https://media.tenor.com/o35-9ADkG_kAAAAC/tzuyu-cute.gif",
"https://c.tenor.com/1V1MQCXmGUwAAAAM/jihyo-sana.gif"]

module.exports = {
  name: "kiss",
  aliases: ["kc", "kisscheek"],
  description: `Besas al usuario mencionado!`,
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
            .setDescription(`**${message.author.username} ** le dió un beso a **${personaextra.username}**.`)
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
