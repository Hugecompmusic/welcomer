const discord = require('discord.js');
const client = new discord.Client();
const {TOKEN} = require('./config.json');
//Welcome & goodbye messages\\
client.on('ready', () => {
    console.log('im ready to welcome');
    client.user.setActivity('burrito by HugeCompMusic');
});
client.on('guildMemberAdd', member => {
    member.roles.add(member.guild.roles.cache.find(i => i.name === 'Among The Server'))

    const welcomeEmbed = new Discord.MessageEmbed()

    welcomeEmbed.setColor('#5cf000')
    welcomeEmbed.setTitle('**' + member.user.username + '** is now Among Us other **' + member.guild.memberCount + '** people')
    welcomeEmbed.setImage('https://cdn.mos.cms.futurecdn.net/93GAa4wm3z4HbenzLbxWeQ-650-80.jpg.webp')

    member.guild.channels.cache.find(i => i.name === 'greetings').send(welcomeEmbed)
})

client.on('guildMemberRemove', member => {
    const goodbyeEmbed = new Discord.MessageEmbed()

    goodbyeEmbed.setColor('#f00000')
    goodbyeEmbed.setTitle('**' + member.user.username + '** was not the impostor there are **' + member.guild.memberCount + '** left Among Us')
    goodbyeEmbed.setImage('https://gamewith-en.akamaized.net/article/thumbnail/rectangle/22183.png')

    member.guild.channels.cache.find(i => i.name === 'greetings').send(goodbyeEmbed)
})
client.login(TOKEN);
//Welcome & goodbye messages end\\