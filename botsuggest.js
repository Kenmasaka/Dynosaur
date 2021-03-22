module.exports = {
    name: 'botsuggest',
    description: 'suggests changes',
    async execute(message, args, Discord, Dynosaur, prefix) {
        const suggestion = args.join(' ');
        const suggestionEmbed = new Discord.MessageEmbed()
            .setAuthor(`Suggestion by ${message.author.tag}`, message.author.displayAvatarURL)
            .setDescription(suggestion)
            .setFooter(`Suggested from the ${message.guild.name} server.`, message.guild.iconURL)
            .setColor('#F432F0')
        let suggestBotChannel = Dynosaur.channels.cache.get('818067170298167327');
        if (suggestion.length) {
            await suggestBotChannel.send(suggestionEmbed).then((message) => {
                message.react('<:check:819554424488853517>')
                message.react('<:nope:819554743834902568>');
            })
        } else {
            message.reply('what do you want to suggest?')
        }
    }
}