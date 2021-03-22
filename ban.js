module.exports = {
    name: 'ban',
    description: 'bans someone',
    guildOnly: true,
    execute(message, args, Discord, Dynosaur, prefix) {
        // if the message content starts with "!ban"
        if (message.member.hasPermission('BAN_MEMBERS')) {
            // Assuming we mention someone in the message, this will return the user
            // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
            const bannedUser = message.mentions.users.first();
            // If we have a user mentioned
            if (bannedUser) {
                // Now we get the member from the user
                const memberToBan = message.guild.member(bannedUser);
                // If the member is in the guild
                if (memberToBan) {
                    /**
                     * Ban the member
                     * Make sure you run this on a member, not a user!
                     * There are big differences between a user and a member
                     * Read more about what ban options there are over at
                     * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
                     */
                    memberToBan
                        .ban({
                            reason: 'NONE',
                        })
                        .then(() => {
                            // We let the message author know we were able to ban the person
                            message.reply(`Successfully banned ${bannedUser.tag}!`);
                        })
                        .catch(err => {
                            // An error happened
                            // This is generally due to the bot not being able to ban the member,
                            // either due to missing permissions or role hierarchy
                            message.reply('I was unable to ban the member. If this error persists, please contact support here : https://discord.gg/EKXFWzXg4x');
                            // Log the error
                            console.error(err);
                        });
                } else {
                    // The mentioned user isn't in this guild
                    message.reply("That user isn't in this server!");
                }
            } else {
                // Otherwise, if no user was mentioned
                message.reply("You didn't mention the user to ban!");
            }
        }
    }
}