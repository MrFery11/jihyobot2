const { ActivityType, EmbedBuilder } = require("discord.js");
const client = require("../index");

client.on("ready", async () => {
  console.log(`${client.user.username} Is Online`);
  client.user.setActivity({
    //name: `@${client.user.username} /help`,
    name: `Talk that Talk M/V`,
    type: ActivityType.Listening,
  });

  client.on('guildMemberAdd', member => {
    const channelID ='951329047013629972' //TwiceFrenia
    const serverID = '948849016874090506' //TwiceFrenia

    const message = `**Bienvenid@** ${member} **al servidor de TwiceFrenia!**`

    const channel = member.guild.channels.cache.get(channelID)
    let guild1 = member.guild;
    if(guild1 == serverID){
    channel.send(message)

    let interactionEmbed = new EmbedBuilder()
            .setTitle("Bienvenid@ a TwiceFrenia! <:Lightstick:967960541102481408>")
            .setColor(client.config.embed.color)
            .addFields(
              { name: '\u200B', value: "- Antes de hablar pasa por <#948928079630319647> para que evitemos problemas! <:Chill:966578743445454858>" },
              { name: '\u200B', value: '- Igual pasa por  <#951329820573302804> para escoger a tu bias y muchos otros roles divertidos' },
              { name: '\u200B', value: 'Por último ven y diviértete con nosotros en <#1029180425417011220>!!!' }
            )
            .setImage("https://media.discordapp.net/attachments/980842887929540678/980930729447932074/9C0E1F58-8C0C-4EA1-BA6F-D60B94ED4DA8.gif?width=461&height=238")
            .setThumbnail("https://media.discordapp.net/attachments/948849016874090509/981709907915071488/IMG_3362.png?width=472&height=473")
            .setTimestamp()
            return channel.send({ embeds: [interactionEmbed] });
    }
  })
  // loading database
  require("../handlers/Database")(client);

  client.guilds.cache.forEach(async (guild) => {
    await client.updateembed(client, guild);
  });
});
