const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'ping',
		usage: `${prefix}ping`,
		category: 'miscellaneous',
		description: 'Pings Mighty Poro to check the latency.',
		accessableby: 'Verified',
	},
	run: async (bot, message, args) => {
		message.channel.send('Pinging...').then(m => {
			const ping = m.createdTimestamp - message.createdTimestamp;
			m.edit(`Bot Latency: \`${ping}ms\``);
		});
	},
};
