module.exports = {
    name: 'avatar',
    description: 'shows the avatar',
    async execute(message, args, Discord, Dynosaur, prefix) {
        if (message.author.bot) return;
        const person = message.mentions.users.first() || message.author;
        const avatarURL = person.displayAvatarURL({ dynamic: true })
        let person2 = undefined;
        if (person.username.endsWith('s')) {
            person2 = person.username + "'"
        } else {
            person2 = person.username + "'s"
        }
        const avatarEmbed = new Discord.MessageEmbed()
            .setAuthor(`Requested by ${message.author.username}`)
            .setTitle(`${person2} avatar`)
            .setImage(avatarURL);
        await message.channel.send(avatarEmbed).then((message) => {
        })
    }
}