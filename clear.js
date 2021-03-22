module.exports = {
    name: 'clear',
    description: 'bulkdeletes a number of messages',
    async execute(message, args, Discord, Dynosaur, prefix) {
        let amount = parseInt(args[0])
        if (isNaN(amount)) {
            return message.reply('you need to tell me how many messages do you want to be deleted!');
        } else if (amount < 2 || amount > 99) {
            return message.reply('you need to input a number between 2 and 99!');
        } else {
            message.channel.bulkDelete(parseInt(++amount));
            await message.reply(`I have deleted \`${--amount}\` messages!`).then((message) => {
                setTimeout(function () {
                    message.delete()
                }, 2500)
            })
        }
    }
}