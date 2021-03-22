module.exports = {
    name: 'invite',
    description: 'gives the invite link',
    execute(message, args, Discord, Dynosaur, prefix) {
        message.reply('you can invite me using this link : https://discord.com/oauth2/authorize?client_id=817782749213360219&scope=bot&permissions=8')
    }
}