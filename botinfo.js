module.exports = {
    name: 'botinfo',
    description: 'gives info about me!',
    execute(message, args, Discord, Dynosaur, prefix) {
        const botinfoEmbed = new Discord.MessageEmbed()
            .setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle('Info about me!')
            .setDescription(`I was created on Saturday 8th of March 2021 by Kenmasaka. My id is 817782749213360219, and you can check my command list with ${prefix}help. Kenmasaka used discord.js to create me.`)
            .setFooter(`I am cool, too`)
        message.channel.send(botinfoEmbed)
    }
}