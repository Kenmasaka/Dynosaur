module.exports = {
    name: 'helpspecified',
    description: 'gives info about specified commands',
    execute(message, args, Discord, Dynosaur, prefix) {
        if (args[0] === 'serverinfo') {
            const serverInfoHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(`**HELP** -- Server info`)
                .setDescription(`This command, one of the first that the bot has ever had, gives useful information about the server you are in, including its number of members, the id of the server, its name, owner, date of creation, boost count, etc.`)
                .setFooter(`How to use this command : ${prefix}serverinfo`)
            message.channel.send(serverInfoHelpEmbed);
        } else if (args[0] === 'userinfo') {
            const userInfoHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- User info')
                .setDescription(`Get information about you, \`${message.author.username}\`, including : the time you created your account, your username, the time you joined this server, and your last message.`)
                .setFooter(`How to use this command : ${prefix}userinfo <member>`)
            message.channel.send(userInfoHelpEmbed);
        } else if (args[0] === 'botinfo') {
            const botInfoHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Bot info')
                .setDescription(`Get some info about myself, including : my name, date of creation, version, avatar, and other things.`)
                .setFooter(`How to use this command : ${prefix}botinfo`)
            message.channel.send(botInfoHelpEmbed);
        } else if (args[0] === 'channelinfo') {
            const channelInfoHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Channel info')
                .setDescription(`Get some info about the channel you are in, including its id, name, type, etc.`)
                .setFooter(`How to use this command : ${prefix}channelinfo`)
            message.channel.send(channelInfoHelpEmbed);
        } else if (args[0] === 'invite') {
            const inviteHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Invite')
                .setDescription(`Get a link to invite me to your favorite server!`)
                .setFooter(`How to use this command : ${prefix}invite`)
            message.channel.send(inviteHelpEmbed);
        } else if (args[0] === 'kick') {
            const kickHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Kick')
                .setDescription(`Kick members. What is a kick ? Kicking a member is a very common type of sanction : they'll be kicked, but if someone gives them another invite link, they could rejoin at any time.`)
                .setFooter(`How to use this command : ${prefix}kick <member>`)
            message.channel.send(kickHelpEmbed);
        } else if (args[0] === 'ban') {
            const banHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Ban')
                .setDescription(`A ban is like a kick, but the banned person cannot join again the server they have got banned from.`)
                .setFooter(`How to use this command : ${prefix}ban <member>`)
            message.channel.send(banHelpEmbed);
        } else if (args[0] === 'say') {
            const sayHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Say')
                .setDescription(`Make me say something (nothing bad please)`)
                .setFooter(`How to use this command : ${prefix}say <text>`)
            message.channel.send(sayHelpEmbed);
        } else if (args[0] === 'clear') {
            const clearHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Clear')
                .setDescription(`Make me clear a given number of messages, between 2 and 99!`)
                .setFooter(`How to use this command : ${prefix}clear <number>`)
            message.channel.send(clearHelpEmbed);
        } else if (args[0] === 'support') {
            const supportHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Support')
                .setDescription(`Get a link redirecting to my support server to get help, suggest commands, or just chat with other users!`)
                .setFooter(`How to use this command : ${prefix}support`)
            message.channel.send(supportHelpEmbed);
        } else if (args[0] === '8ball') {
            const ballHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- 8ball')
                .setDescription(`Ask a question to the magic 8ball. P.S. : This command is completely random, it might say stupid things.`)
                .setFooter(`How to use this command : ${prefix}8ball <question>`)
            message.channel.send(ballHelpEmbed);
        } else if (args[0] === 'ticket') {
            const ticketHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Ticket')
                .setDescription(`Make a channel where you can ask questions, report someone that doesn't follow the rules, or just discuss with an admin that you like! (Use ${prefix}closeticket to close it).`)
                .setFooter(`How to use this command : ${prefix}ticket`);
            message.channel.send(ticketHelpEmbed);
        } else if (args[0] === 'clonechannel') {
            const clonechannelHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Clone channel')
                .setDescription(`Clone the channel you are currently in!`)
                .setFooter(`How to use this command : ${prefix}clonechannel`)
            message.channel.send(clonechannelHelpEmbed);
        } else if (args[0] === 'suggest') {
            const suggestHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Suggest')
                .setDescription(`Suggest changes for the server you are currently in, or its purpose (association, bots, companies, etc). Please use this command only in the channel made for it to be used.`)
                .setFooter(`How to use this command : ${prefix}suggest <suggestion>`)
            message.channel.send(suggestHelpEmbed);
        } else if (args[0] === 'bugreport') {
            const bugreportHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Bug report')
                .setDescription(`Report bugs that you have found within the bot.`)
                .setFooter(`How to use this command : ${prefix}bugreport <bug>`)
            message.channel.send(bugreportHelpEmbed);
        } else if (args[0] === 'avatar') {
            const avatarHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Avatar')
                .setDescription(`Check the avatar of members of your server.`)
                .setFooter(`How to use this command : ${prefix}avatar (@person)`)
            message.channel.send(avatarHelpEmbed);
        } else if (args[0] === 'poll') {
            const pollHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Poll')
                .setDescription(`Make a poll for your server members to answer to.`)
                .setFooter(`How to use this command : ${prefix}poll <question>`)
            message.channel.send(pollHelpEmbed);
        } else if (args[0] === 'createtext') {
            const createtextHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Create text')
                .setDescription(`Creates a text channel with normal perms.`)
                .setFooter(`How to use this command : ${prefix}createtext <name>`)
            message.channel.send(createtextHelpEmbed);
        } else if (args[0] === 'createvoice') {
            const createvoiceHelpEmbed = new Discord.MessageEmbed()
                .setAuthor(`Requested by ${message.author.username}.`, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('**HELP** -- Create voice')
                .setDescription(`Create a voice channel with normal perms.`)
                .setFooter(`How to use this command : ${prefix}createvoice <name>`)
            message.channel.send(createvoiceHelpEmbed);
        }
    }
}