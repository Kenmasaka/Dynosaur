module.exports = {
    name: 'userinfo',
    description: 'gives info about a user',
    execute(message, args, Discord, Dynosaur, prefix) {
        const info = message.mentions.users.first() || message.author;
        const infoMember = message.mentions.members.first() || message.member;

        message.reply(`**Some info about \`${info.username}\` : **
${info.username} has joined the server at ${infoMember.joinedAt}, and have created their account on ${info.createdAt}. Their last message sent on this server is ${infoMember.lastMessage} in <#${infoMember.lastMessageChannelID}>. Their account id is ${info.id}.`)
    }
}