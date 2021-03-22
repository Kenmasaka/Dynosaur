module.exports = {
    name: 'serverinfo',
    description: 'gives info about the guild you are in',
    execute(message, args, Discord, Dynosaur, prefix) {
        function verified() {
            if (message.guild.verified == true) {
                return 'This server has been officially verified by Discord.';
            } else {
                return 'This server is not verified by Discord.';
            };
        };
        let verifiedOrNot = verified();
        message.guild.fetchInvites();
        message.reply(`${message.guild} has ${message.guild.memberCount} members. It was created on ${message.guild.createdAt} by ${message.guild.owner}. It has ${message.guild.premiumSubscriptionCount} boosts. ${verifiedOrNot} Server id : ${message.guild.id}.`)
    }
}