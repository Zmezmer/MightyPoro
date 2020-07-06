const { prefix } = require('../../config.json');
const { Chance } = require('chance');

module.exports = {
	config: {
		name: 'roll',
		usage: `${prefix}roll [# of dice]d[# of sides]`,
		category: 'fun',
		description: 'Roll any number of dice with any number of sides.',
		accessableby: 'Verified',
	},
	run: async (bot, message, args) => {
		try {
			const chance = new Chance();
			const result = chance.rpg(`${args}`);
			const sum = result.reduce(function(a, b) {
				return a + b;
			}, 0);
			message.channel.send(`[${result}]`);
			message.channel.send(`Sum: ${sum}`);
		} catch (error) {
			message.channel.send('I ran into a problem rolling the dice. The proper format is #d#. Do not use zero.');
		}
	},
};
