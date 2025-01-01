const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json'); // حيث ستضع الـ Token الخاص بك هنا.

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.once('ready', () => {
    console.log('The bot is online!');
});

client.on('messageCreate', message => {
    if (message.content === '!hello') {
        message.reply('Hello, I am your bot!');
    }
});

client.login(token);
