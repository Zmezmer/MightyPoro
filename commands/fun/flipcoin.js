const { prefix } = require('../../config.json');
const { Chance } = require('chance');

module.exports = {
	config: {
		name: 'coinflip',
		usage: `${prefix}coinflip`,
		category: 'fun',
		description: 'Flip a coin for heads or tails.',
		accessableby: 'Verified',
	},
	run: async (bot, message) => {
		const chance = new Chance();
		const result = chance.coin();
		message.channel.send(result.charAt(0).toUpperCase() + result.slice(1));
	},
};
