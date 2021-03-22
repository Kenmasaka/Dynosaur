module.exports = {
    name: 'createtext',
    cooldown: 20,
    execute(message, args, Discord, Dynosaur, prefix) {
        if (message.member.permissions.has('MANAGE_CHANNELS')) {
            const name = args.join(' ');
            if (name.length) {
                if (!name.length > 99) {
                    message.guild.channels
                        .create(name, {
                            type: 'text'
                        }).then((channel, message) => {
                            channel.setTopic(`Channel created by ${message.author.tag}.`)
                            channel.setParent(message.channel.parent)
                            message.channel.send(`${message.author}, I have succesfully created a new text channel.`)
                        })
                } else {
                    message.reply('the name you wanted to give to the channel is too long! Please retry by giving me a smaller name.');
                }
            } else {
                message.reply('you do not have given me a name for the text channel you want to create!');
            }
        } else {
            const errorEmbed = new Discord.MessageEmbed()
                .setTitle('Error')
                .setColor('#FF0000')
                .setDescription(`${message.author.username}, you do not have enough perms to create a text channel.`)
                .setFooter('Perms needed : MANAGE_CHANNELS');
            message.channel.send(errorEmbed);
        }
    }
}