module.exports = {
	name: 'ping',
	description: 'Ping!',
	cooldown: 5,
	execute(message, args, Discord, Dynosaur, prefix) {
		message.channel.send('Pong.');
	},
};