module.exports = {
    name: 'botinfo',
    description: 'Info on bot',
    execute(message) {
        message.channel.send(`The developer of this bot is: \n SovietRulez#0001\n Version : 1.0`);
    },
};