module.exports = {
    name: 'randomrules',
    description: 'gives a random list of random rules',
    execute(message, args, Discord, Dynosaur, prefix) {
        const random = Math.round(Math.random() * 2);
        if (random === 0) {
            const ruleNumberOne = new Discord.MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
                .setTitle('Server rules')
                .setColor('#90EE90')
                .addField('Rule 1 : Respect', 'All members must respect each others, whatever happens. Insults, non-acceptable jokes, etc are strictly forbidden. Any member that does not respect these rules, whether in private messages or anywhere in the server shall be punished.', false)
                .addField('Rule 2 : Explicit content', 'All types of NSFW content or incitation to consume it is not allowed in the text and voice channels, usernames and nicknames, profile images, statuses, etc, unless in channels that are marked as containing explicit content.', false)
                .addField('Rule 3 : Discord', 'You must at all times respect Discord\'s terms and conditions. Any member under the age of 13 shall be banned from the server.', false)
                .addField('Rule 4 : Racism', 'Any act of racism, sexism, or any difference of comportement because of a believing, a color, or a religion is strictly forbidden.', false)
                .addField('Rule 5 : Members', 'If you see anyone disrepecting the rules above, please create a `=ticket` in the commands channel. Even if our server has admins, they aren\'t online 24/7, and cannot handle the server at all times. We count on you!', false)
                .setFooter('As of joining the server, we declare that you have read and understood these simple rules.');
            message.channel.send(ruleNumberOne);
            message.delete()
        } else if (random === 1) {
            const ruleNumberTwo = new Discord.MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
                .setTitle('Server rules')
                .setColor('#90EE90')
                .addField('Respect', 'Please respect each others all the time, on this server or via dms.', false)
                .addField('Explicit content', 'Do not post explicit/NSFW content on the server.', false)
                .addField('Discord', 'Please respect Discord terms and conditions.')
                .addField('Racism', 'Do not treat people in a different manner, even if they are different.', false)
                .addField('Members', `Make a \`${prefix}ticket\` if someone doesn\'t respect the rules above.`)
                .setFooter('If you join this server, you agree to these rules.')
            message.channel.send(ruleNumberTwo);
            message.delete()
        } else if (random === 2) {
            const ruleNumberThree = new Discord.MessageEmbed()
                .setAuthor(message.guild.name, message.guild.iconURL({ dynamic: true }))
                .setTitle('Rules')
                .setColor('#FE24F0')
                .addField('Rule 1 :', 'Respect people because they\'re human.')
                .addField('Rule 2 :', 'Do not post porn stuff & explicit content.')
                .addField('Rule 3 :', 'Respect discord TOS.')
                .addField('Rule 4 :', 'Don\'t be racist.')
                .addField('Rule 5 :', 'Open a `=ticket` if something bad happens.')
                .setFooter('You have read and agreed the rules by chatting in this server.')
            message.channel.send(ruleNumberThree)
            message.delete()
        }
    }
}