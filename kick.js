module.exports = {
    name: 'kick',
    description: 'kicks a member.',
    guildOnly: true,
    execute(message, args, Discord, Dynosaur, prefix) {
        let whoToKick = message.mentions.users.first()
        if (whoToKick) {
            // Now we get the member from the user
            const member = message.guild.member(whoToKick);
            const kickError = new Discord.MessageEmbed()
                .setTitle('Error')
                .setDescription(`I was unable to kick ${whoToKick.tag}. For more info, join our support : https://discord.gg/EKXFWzXg4x`)
                .setColor('#F00')
                .setFooter(`Id of ${whoToKick.username} : ${whoToKick.id}.`, whoToKick.displayAvatarURL);
            const succesfullKick = new Discord.MessageEmbed()
                .setTitle('The kick was succesfull.')
                .setColor('#0F0')
                .setDescription(`I have successfully kicked ${whoToKick.tag}.`)
                .setFooter(`Kicked person id : ${whoToKick.id}.`, whoToKick.displayAvatarURL);
            const userIsNotInTheServerEmbed = new Discord.MessageEmbed()
                .setColor('#F00')
                .setTitle('Error')
                .setDescription('I was unable to kick ' + whoToKick.username + ' because they were not found on this server.');
            // If the member is in the guild
            if (member) {
                /**
                 * Kick the member
                 * Make sure you run this on a member, not a user!
                 * There are big differences between a user and a member
                 */
                member
                    .kick('No reason has been specified.')
                    .then(() => {
                        // We let the message author know we were able to kick the person
                        message.channel.send(succesfullKick);
                    })
                    .catch(err => {
                        // An error happened
                        // This is generally due to the bot not being able to kick the member,
                        // either due to missing permissions or role hierarchy
                        message.channel.send(kickError);
                        // Log the error
                        console.error(err);
                    });
            } else {
                // The mentioned user isn't in this guild
                message.channel.send(userIsNotInTheServerEmbed);
            }
            // Otherwise, if no user was mentioned
        } else {
            message.reply('I was unable to kick someone, because you haven\'t mentioned anyone to be kicked from this server.');
        }
    }
}