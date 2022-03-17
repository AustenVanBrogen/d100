const { channel } = require('diagnostics_channel');
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require("dotenv").config();

const token = process.env.BOT_TOKEN;
const prefix = '!';