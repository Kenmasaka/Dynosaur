module.exports = {
    name: 'channelinfo',
    description: 'gives info about a channel',
    execute(message, args, Discord, Dynosaur, prefix) {
        const channelInfo = message.mentions.channels.first() || message.channel;
        function nsfwOrNotFunction() {
            if (channelInfo.nsfw == true) {
                return 'This channel is considered to contain NSFW content.'
            } else if (channelInfo.nsfw == false) {
                return 'This channel is not considered to contain NSFW content.'
            }
        }
        function categoryOrNot() {
            if (!channelInfo.parent) {
                return 'This channel isn\'t in a category'
            } else {
                return `This channel is in the ${channelInfo.parent} category`
            }
        };
        const isItACategory = categoryOrNot();
        let nsfwOrNot = nsfwOrNotFunction()
        const channelInfoEmbed = new Discord.MessageEmbed()
            .setAuthor(`Requested by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle(`Info about ${channelInfo.name}.`)
            .setDescription(`${isItACategory} of the ${channelInfo.guild} server, and its id is ${channelInfo.id}. The last message sent in this channel is \`${channelInfo.lastMessage}\`, and its id is ${channelInfo.lastMessageID}. ${nsfwOrNot}`)
        message.channel.send(channelInfoEmbed);
    }
}