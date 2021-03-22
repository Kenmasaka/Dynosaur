module.exports = {
    name: 'bugreport',
    description: 'REPORT A BUG',
    async execute(message, args, Discord, Dynosaur, prefix) {
        const bug = args;
        if (bug.length) {
            const bugEmbed = new Discord.MessageEmbed()
                .setTitle('NEW BUG REPORT')
                .setAuthor(message.author.tag)
                .setDescription(bug.join(' '))
                .setFooter(message.guild.name)
            await Dynosaur.channels.cache.get('821306949907644476').send(bugEmbed)
            message.channel.send(bugEmbed);
            message.channel.send('Bug successfully sent to the developers.')
        } else {
            message.channel.send('You haven\'t specified a bug to report.')
        }
    }
}