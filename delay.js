module.exports = {
    name: 'delay',
    async execute(message, args, Discord, Dynosaur) {
        await message.channel.send(`Websocket heartbeat: ${Dynosaur.ws.ping}ms.`);
        message.channel.send('Pinging...').then(sent => {
            sent.edit(`Roundtrip latency: ${sent.createdTimestamp - message.createdTimestamp}ms`);
        });
    }
}