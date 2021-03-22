module.exports = {
	name: 'help',
	description: 'gives you the command list',
	execute(message, args, Discord, Dynosaur, prefix) {
        const helpEmbed = new Discord.MessageEmbed()
        .setAuthor('Requested by ' + message.author.username, message.author.displayAvatarURL({ dynamic: true }))
        .setColor('#F425F3')
        .setDescription(`My prefix on this server is ${prefix}. To get help about a specified command, please type \`${prefix}helpspecified <command>\`.`)
        .addField('<:infoicon:818505458595659807>', '**INFORMATION**', true)
        .addField(`${prefix}serverinfo :`, 'Get some info about the server you are in.', false)
        .addField(`${prefix}userinfo :`, `Get some info about you, or other members.`, false)
        .addField(`${prefix}botinfo : `, 'Get info about me!', false)
        .addField(`${prefix}help : `, 'The commands that I can handle', false)
        .addField(`${prefix}channelinfo :`, `Get info about the channel you have mentionned.`, false)
        .addField(`${prefix}invite : `, `Invite me to your server!`, false)
        .addField(`${prefix}support :`, 'Join the support server.', false)
        .addField('<:admin:818506081311522826>', '**ADMINISTRATION**', true)
        .addField(`${prefix}kick : `, 'Kicks a member from the server.', false)
        .addField(`${prefix}ban : `, 'Bans a member from the server.', false)
        .addField(`${prefix}say : `, 'Make me say something.', false)
        .addField(`${prefix}clear : `, 'Delete a number of messages.', false)
        .addField(`${prefix}clonechannel :`, `Clones the channel you are currently in.`, false)
        .addField(`${prefix}clonedelete :`, 'Clones and then deletes the channel you are in.', false)
        .addField(`${prefix}deletechannel :`, 'Deletes the channel.', false)
        .addField(`${prefix}poll : `, 'Make a poll to ask stuff to your members.', false)
        .addField('<:other:818750075949809695>', `Other stuff`, true)
        .addField(`${prefix}8ball : `, 'Ask a question to the magic 8ball.', false)
        .addField(`${prefix}ticket :`, `Make a ticket to get support.`, false)
        .addField(`${prefix}suggest :`, 'Suggest something, like updates, for the server.', false)
        .addField(`${prefix}botsuggest :`, 'Suggest something for the dev to add to the bot!', false)
        .addField(`${prefix}bugreport : `, 'Report bugs that you have found.', false)
        .addField(`${prefix}avatar : `, 'Get an avatar.', false)

    message.channel.send(helpEmbed);
	},
};