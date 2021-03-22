module.exports = {
    name: 'say',
    description: 'make the bot say something',
    execute(message, args, Discord, Dynosaur, prefix) {
        let whatToSay = args.join(' ');
        if (whatToSay) {
            message.channel.send(`${message.author.username} told me to say ${whatToSay}`)
        } else {
            message.reply('what do you want me to say?')
        }
    }
}