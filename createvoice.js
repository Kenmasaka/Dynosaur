module.exports = {
    name: 'createvoice',
    cooldown: 20,
    execute(message, args, Discord, Dynosaur, prefix) {
        const name = args.join(' ');
        if (message.member.permissions.has('MANAGE_CHANNELS')) {
            if (name.length) {
                if (name.length > 99) {
                    message.reply('the name you wanted to give to the channel is too long! Please retry by giving me a smaller name.');
                } else {
                    message.guild.channels
                        .create(name, {
                            type: 'voice'
                        }).then((channel) => {
                            message.channel.send(`${message.author}, I have succesfully created a new text channel.`)
                            channel.setParent(message.channel.parent.id)
                        })
                }
            } else {
                message.reply('you do not have given me a name for the voice channel you want to create!');
            }
        } else {
            const errorEmbed = new Discord.MessageEmbed()
                .setTitle('Error')
                .setColor('#FF0000')
                .setDescription(`${message.author.username}, you do not have enough perms to create a voice channel.`)
                .setFooter('Permission needed : MANAGE_CHANNELS');
            message.channel.send(errorEmbed);
        }
    }
}