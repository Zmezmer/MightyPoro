const { Client, Collection } = require('discord.js');
const { token, prefix } = require('./config.json');
const bot = new Client();

bot.commands = new Collection();
command = require(`./handler/command.js`)(bot);

bot.once('ready', () => {
	console.log(`${bot.user.username} is online.`);
	bot.user.setActivity(`mightyporo.com | ${prefix}help`, { type: 'PLAYING' });
})

bot.on('message', async message => {
	if (message.author.bot || message.channel.type === 'dm') return;
	if (!message.content.startsWith(prefix)) return;

	const memberRole = message.member.roles.cache.some(role => role.name === 'Verified');

	if (!memberRole) {
		return message.reply('You must be a Verified user to interact with me.');
	}

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const cmd = args.shift().toLowerCase();
	const commandfile = bot.commands.get(cmd);

	if (commandfile) {
		commandfile.run(bot, message, args)
	} else {
		message.channel.send('Did you type the command correctly? Use ``!help`` to view my list of commands.');
	};
});

bot.on('guildMemberAdd', member => {
	const channel = member.guild.channels.cache.find(ch => ch.name === 'lobby');
	if (!channel) return;

	channel.send(`${member} has joined the server!`);
});

bot.login(token).catch(error => {
	console.error(error);
	process.exit(1);
});