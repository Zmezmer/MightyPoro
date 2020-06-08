const { prefix } = require('../../config.json');

module.exports = async (bot, message) => {
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
		commandfile.run(bot, message, args);
	} else {
		message.channel.send('Did you type the command correctly? Use ``!help`` to view my list of commands.');
	}
};