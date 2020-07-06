const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'rcod',
		usage: `${prefix}rcod`,
		category: 'roles',
		description: 'Join the CoD role to be alerted when others want to play CoD.',
		accessableby: 'Verified',
	},
	run: async (bot, message) => {
		const role = message.guild.roles.cache.find(r => r.name === 'CoD');
		const member = message.member;

		if (!member.roles.cache.some(r => r.name === 'CoD')) {
			member.roles.add(role).catch(err => {
				console.error(err);
			});
			if (message.guild.roles.cache.find(r => r.name === 'CoD')) {
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