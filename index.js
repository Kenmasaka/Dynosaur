const fs = require('fs');
const Discord = require('discord.js');
const Dynosaur = new Discord.Client();
Dynosaur.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    Dynosaur.commands.set(command.name, command);
}
Dynosaur.cooldowns = new Discord.Collection();
const prefix = '='
require('dotenv').config();
const mongoose = require('./database/mongoose')
mongoose.init();
Dynosaur.once('ready', () => {
    console.log('Dynosaur is online, great job!');
    Dynosaur.user.setActivity(`${prefix}help | Version 1.5.7`, { type: 'WATCHING' });
});

Dynosaur.on('message', message => {
    if (message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!Dynosaur.commands.has(command)) return;
    const { cooldowns } = Dynosaur;

    if (!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
        const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

        if (now < expirationTime) {
            const timeLeft = (expirationTime - now) / 1000;
            return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
        }
    }
    timestamps.set(message.author.id, now);
    setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    try {
        Dynosaur.commands.get(command).execute(message, args, Discord, Dynosaur, prefix);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
})

// Bulk delete/ad-block/Auto-react/textchannel create commands
Dynosaur.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.startsWith('https://discord.gg') || message.content.startsWith('https') || message.content.startsWith('www') && !message.member.permissions.has('ADMINISTRATOR')) {
        message.reply('please do not post ads!')
        message.delete();
    } else if (message.content.startsWith('hello')) {
        message.react('<:hello:819128677287460864>')
    } else if (message.content.startsWith(prefix + 'createvoice')) {
        const name = message.content.slice(13)
        if (name.length > 99) {
            message.channel.send('The name you have entered has more than 99 characters.');
        } else {
            message.guild.channels
                .create(name, {
                    type: 'voice'
                }).then(channel => {
                    channel.setUserLimit(10);
                })
        }
    } else if (message.content.toLowerCase().startsWith(prefix + 'ping')) {
        message.channel.send(`Your current ping is \`${Date.now() - message.createdTimestamp} ms\`.`)
    } else if (message.content.toLowerCase().startsWith('bot')) {
        message.react('🙌');
        await message.channel.send('I am a bot!!!!').then((message) => {
            message.react('👀');
        })
    }
})

// Say secret command/8ball/ticket/clonechannel/suggest/poll
Dynosaur.on('message', async message => {
    if (message.author.bot) return;
    if (message.content.startsWith(prefix + 'raysecretcommand') && message.author.tag == 'Kenmasaka#7387') {
        let whatToSay = message.content.split(' ').slice(1).join(' ');
        message.delete()
        message.channel.send(`${whatToSay}`)
    } else if (message.content.startsWith(prefix + '8ball')) {
        message.content.split(' ');
        let randomNumber = Math.round(Math.random() * 10);
        if (message.content.slice(7)) {
            if (randomNumber === 1) {
                let ballEmbed1 = new Discord.MessageEmbed()
                    .setColor('#42F342')
                    .setTitle('Magic 8ball')
                    .setDescription(message.content.slice(7))
                    .addField(`Magic 8ball says...`, 'Surely not!', false)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
                message.channel.send(ballEmbed1)
            } else if (randomNumber === 2) {
                let ballEmbed2 = new Discord.MessageEmbed()
                    .setColor('#42F342')
                    .setTitle('Magic 8ball')
                    .setDescription(message.content.slice(7))
                    .addField(`Magic 8ball says...`, 'Maybe, I\'ll think about it.', false)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
                message.channel.send(ballEmbed2)
            } else if (randomNumber === 3) {
                let ballEmbed3 = new Discord.MessageEmbed()
                    .setColor('#42F342')
                    .setTitle('Magic 8ball')
                    .setDescription(message.content.slice(7))
                    .addField(`Magic 8ball says...`, 'Sure!', false)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
                message.channel.send(ballEmbed3)
            } else if (randomNumber === 4) {
                let ballEmbed4 = new Discord.MessageEmbed()
                    .setColor('#42F342')
                    .setTitle('Magic 8ball')
                    .setDescription(message.content.slice(7))
                    .addField(`Magic 8ball says...`, 'Never, how did you even think this would happen?', false)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
                message.channel.send(ballEmbed4)
            } else if (randomNumber === 5) {
                let ballEmbed5 = new Discord.MessageEmbed()
                    .setColor('#42F342')
                    .setTitle('Magic 8ball')
                    .setDescription(message.content.slice(7))
                    .addField(`Magic 8ball says...`, 'Probably, I\'m no magician, I cannot know everything.', false)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
                message.channel.send(ballEmbed5)
            } else if (randomNumber === 6) {
                let ballEmbed6 = new Discord.MessageEmbed()
                    .setColor('#42F342')
                    .setTitle('Magic 8ball')
                    .setDescription(message.content.slice(7))
                    .addField(`Magic 8ball says...`, 'You guessed it!', false)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
                message.channel.send(ballEmbed6)
            } else if (randomNumber === 7) {
                let ballEmbed7 = new Discord.MessageEmbed()
                    .setColor('#42F342')
                    .setTitle('Magic 8ball')
                    .setDescription(message.content.slice(7))
                    .addField(`Magic 8ball says...`, 'N O P E.', false)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
                message.channel.send(ballEmbed7)
            } else if (randomNumber === 8) {
                let ballEmbed8 = new Discord.MessageEmbed()
                    .setColor('#42F342')
                    .setTitle('Magic 8ball')
                    .setDescription(message.content.slice(7))
                    .addField(`Magic 8ball says...`, 'You had a dream... but it will never become reality.', false)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
                message.channel.send(ballEmbed8)
            } else if (randomNumber === 9) {
                let ballEmbed9 = new Discord.MessageEmbed()
                    .setColor('#42F342')
                    .setTitle('Magic 8ball')
                    .setDescription(message.content.slice(7))
                    .addField(`Magic 8ball says...`, 'Is this a real question? Okay, then the answer is N O.', false)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
                message.channel.send(ballEmbed9)
            } else if (randomNumber === 10) {
                let ballEmbed10 = new Discord.MessageEmbed()
                    .setColor('#42F342')
                    .setTitle('Magic 8ball')
                    .setDescription(message.content.slice(7))
                    .addField(`Magic 8ball says...`, 'I DON\'T KNOW.', false)
                    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
                message.channel.send(ballEmbed10)
            }
        } else {
            message.reply('ask me something if you want an answer!')
        }
    } else if (message.content.startsWith(prefix + 'ticket')) {
        const ticketEmbed = new Discord.MessageEmbed()
            .setColor('#F42F32')
            .setAuthor(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`Welcome to this ticket channel, ${message.author.username}! Admins and mods will be with you as soon as possible. You can close this ticket at any time using the \`${prefix}closeticket\` command.`)

        await message.guild.channels.create('Ticket - ' + message.author.username, {
            permissionOverwrites: [
                {
                    id: message.author.id,
                    allow: ['SEND_MESSAGES', 'VIEW_CHANNEL']
                },
                {
                    id: message.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL']
                }
            ]
        }).then((channel) => {
            channel.send(ticketEmbed)
        }
        ).catch(err => {
            console.log(err);
            message.channel.send('I had an error creating your ticket. Please check that I have all permissions, or contact the support server via the `=support` command.')
        });
    } else if (message.content.startsWith(prefix + 'clonechannel')) {
        if (message.member.hasPermission('MANAGE_CHANNELS')) {
            await message.channel.send(`I have succesfully cloned ${message.channel.name}.`);
            message.channel.clone();

        } else {
            const errorCloneEmbed = new Discord.MessageEmbed()
                .setColor('#42F352')
                .setAuthor(message.author.username)
                .setTitle('You do not have permissions to clone this channel.')
                .setDescription('To do so, please check that you have the `manage channels` permission, or ask the owner of this server to give you it.')
            message.channel.send(errorCloneEmbed)
        }
    } else if (message.content.startsWith(prefix + 'suggest')) {
        message.content.split(' ');
        const errorSuggestEmbed = new Discord.MessageEmbed()
            .setTitle('Error')
            .setColor('#0000FF')
            .setDescription(`${message.author.username}, you haven't specified what do you want to suggest! Please retry using the \`${prefix}suggest\` command, but this time don't forget to specify what do you want to suggest!`);
        if (message.content.slice(9)) {
            const suggestEmbed = new Discord.MessageEmbed()
                .setTitle(`Suggestion by ${message.author.username}.`)
                .setDescription(`${message.author.username} has made the following suggestion :`)
                .addField(`${message.author.username}'s suggestion :`, message.content.slice(9))
                .setColor('#00FF00');
            const suggestionMessage = await message.channel.send(suggestEmbed);
            await suggestionMessage.react('<:check:819554424488853517>')
            suggestionMessage.react('<:nope:819554743834902568>')
        } else {
            message.channel.send(errorSuggestEmbed);
        }
    } else if (message.content.startsWith(prefix + 'deletechannel')) {
        if (message.member.hasPermission('MANAGE_CHANNELS')) {
            message.channel.delete(`${message.author.tag} has deleted this channel, using the ${prefix}deletechannel command.`)
        }
    } else if (message.content.startsWith(prefix + 'clonedelete')) {
        if (message.member.hasPermission('MANAGE_CHANNELS')) {
            message.channel.clone();
            message.channel.delete(`${message.author.tag} has deleted and cloned this channel, using the ${prefix}clonedelete command.`)
        } else {
            return;
        }
    } else if (message.content.startsWith(prefix + 'poll')) {
        message.content.split(' ');
        const pollChannel = message.mentions.channels.first() || message.channel
        if (message.member.hasPermission('ADMINISTRATOR')) {
            if (message.content.slice(6)) {
                const pollEmbed = new Discord.MessageEmbed()
                    .setTitle('New poll!')
                    .setColor('#F032F1')
                    .setDescription(message.content.slice(6))
                    .setAuthor(`Poll by ${message.author.username}`, message.author.displayAvatarURL)
                const pollMessage = await pollChannel.send(pollEmbed)
                message.delete()
                await pollMessage.react('<:check:819554424488853517>');
                pollMessage.react('<:nope:819554743834902568>')
            } else {
                const errorPollEmbed = new Discord.MessageEmbed()
                    .setTitle(`Error`)
                    .setColor('#02F362')
                    .setDescription('You haven\'t specified a question for the poll to be about!')
                    .setFooter(`Poll by ${message.author.username}.`)
                message.channel.send(errorPollEmbed)
            }
        } else {
            const noPermsPollEmbed = new Discord.MessageEmbed()
                .setTitle('Error')
                .setDescription(`${message.author.username}, you do not have enough perms to create a poll.`)
                .setFooter('Perms needed : administrator.')
                .setColor('#0F3425')
            message.channel.send(noPermsPollEmbed)
            message.delete()
        }
    } else if (message.content.startsWith(prefix + 'closeticket')) {
        if (message.channel.name.startsWith('ticket-')) {
            message.channel.delete('Ticket has ended.')
        }
    }
})
Dynosaur.login(process.env.TOKEN);