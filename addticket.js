module.exports = {
    name: 'addticket',
    async execute(message, args, Discord, Dynosaur, prefix) {
        if (message.channel.name.startsWith('ticket-')) {
            if (message.mentions.users.first().length) {
                const mentionedUser = message.mentions.users.first();
                await message.channel.createOverwrite(mentionedUser, {
                    VIEW_CHANNEL: true
                }).then(() => {
                    message.channel.send(`I have succesfully given permission to <@${mentionedUser.id}> to view the ticket and to chat in it.\n You can deny his access by doing the ${prefix}byeticket command.`)
                })
            }
        }
    }
}