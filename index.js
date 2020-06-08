const { Client, Collection } = require('discord.js');
const { token } = require('./config.json');
const bot = new Client();

bot.commands = new Collection();
['command', 'event'].forEach(x => require(`./handlers/${x}`)(bot));

bot.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'lobby');
	if (!channel) return;
	channel.send(`${member} has joined the server!`);
});

bot.login(token).catch(error => {
	console.error(error);
	process.exit(1);
});