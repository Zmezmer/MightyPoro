const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'uptime',
		usage: `${prefix}uptime`,
		category: 'miscellaneous',
		description: 'Displays the uptime for Mighty Poro.',
		accessableby: 'Verified',
	},
	run: async (bot, message, args) => {
		function duration(ms) {
			const sec = Math.floor((ms / 1000) % 60).toString();
			const min = Math.floor((ms / (1000 * 60)) % 60).toString();
			const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
			const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
			return `${days.padStart(1, '0')} days, ${hrs.padStart(2, '0')} hours, ${min.padStart(2, '0')} minutes, ${sec.padStart(2, '0')} seconds`;
		}
		message.channel.send(`I've been online for: \`${duration(bot.uptime)}\``);
	},
};
