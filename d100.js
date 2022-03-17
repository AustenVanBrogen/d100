const { channel } = require('diagnostics_channel');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require("dotenv").config();

const botToken = process.env.BOT_TOKEN;
const prefix = '!';

client.once('ready', () => {
    console.log("d100 bot is online");
});

client.on('messageCreate', async(message) =>{
    if((message.author.bot) || (!message.content.startsWith(prefix))) return;

    const args = message.content.slice(prefix.length).split("/ +/");
    const command = args.shift().toLowerCase();

    if (command === 'roll')
    {
        message.channel.send("That was a roll");
    }
});

client.login(botToken);