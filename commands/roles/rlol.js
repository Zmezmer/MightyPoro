const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'rlol',
		usage: `${prefix}rlol`,
		category: 'games',
		description: 'Join the LoL role to be alerted when others want to play LoL.',
		accessableby: 'Verified',
	},
	run: async (bot, message) => {
		const role = message.guild.roles.cache.find(r => r.name === 'LoL');
		const member = message.member;

		if (!member.roles.cache.some(r => r.name === 'LoL')) {
			member.roles.add(role).catch(err => {
				console.error(err);
			});
			if (message.guild.roles.cache.find(r => r.name === 'LoL')) {
				message.channel.send(`${message.author}, role added.`);
			} else {
				message.channel.send(`${message.author}, I couldn't find that role. Has it been created yet?`);
			}
		} else {
			member.roles.remove(role).catch(err => {
				console.error(err);
			});
			message.channel.send(`${message.author}, role removed.`);
		}
	},
};