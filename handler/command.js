const { readdirSync } = require('fs');

module.exports = (bot) => {
	const load = dirs => {
		const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
		for (const file of commands) {
			const pull = require(`../commands/${dirs}/${file}`);
			bot.commands.set(pull.config.name, pull);
		}
	};
	['fun', 'games', 'miscellaneous', 'valorant'].forEach(x => load(x));
};
