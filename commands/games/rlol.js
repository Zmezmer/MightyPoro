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
			message.channel.send('Role added.');
		} else {
			member.roles.remove(role).catch(err => {
				console.error(err);
			});
			message.channel.send('Role removed.');
		}
	},
};