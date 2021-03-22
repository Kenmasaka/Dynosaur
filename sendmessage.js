module.exports = {
    name: 'sendmessage',
    description: 'sends a dm',
    async execute(message, args, Discord, Dynosaur, prefix) {
        let dmedPerson = message.mentions.users.first();
        let dmMessage = args.slice(1);
        if (dmedPerson) {
            if (dmMessage) {
                const succefullDm = new Discord.MessageEmbed()
                    .setTitle('Successfully messaged' + dmedPerson)
                    .setDescription(`Congrats! You have just sent the following message to ${dmedPerson} : \n${dmMessage}`);
                await dmedPerson.send(`${message.author.tag} has sent you this message : \n ${dmMessage}`)
                message.channel.send(succefullDm)
            } else {
                const noMessage = new Discord.MessageEmbed()
                    .setTitle('Error')
                    .setDescription('You haven\'t told me what do you want to send! Please retry using the command.')
                    .setColor('#FF0000');
                message.channel.send(noMessage);
            }
        } else {
            const noMentionedPerson = new Discord.MessageEmbed()
                .setTitle('Error')
                .setDescription('You haven\'t mentioned a person to send the dm to. Please retry using the command.')
                .setColor('#FF0000');
            message.channel.send(noMentionedPerson);
        }
    }
}