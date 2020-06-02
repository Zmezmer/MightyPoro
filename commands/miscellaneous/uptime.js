const { prefix } = require('../../config.json');
const ms = require('ms');

module.exports = {
	config: {
		name: 'uptime',
		usage: `${prefix}uptime`,
		category: 'miscellaneous',
		description: 'Displays the uptime for Mighty Poro.',
		accessableby: 'Verified',
	},
	run: async (bot, message) => {
		message.channel.send(`I've been online for: \`${ms(bot.uptime, { long: true })}\``);
	},
};
