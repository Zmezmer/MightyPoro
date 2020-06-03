const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'rtft',
		usage: `${prefix}rtft`,
		category: 'games',
		description: 'Join the TFT role to be alerted when others want to play TFT.',
		accessableby: 'Verified',
	},
	run: async (bot, message) => {
		const role = message.guild.roles.cache.find(r => r.name === 'TFT');
		const member = message.member;

		if (!member.roles.cache.some(r => r.name === 'TFT')) {
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