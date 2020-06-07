const { prefix } = require('../../config.json');
const { MessageEmbed } = require('discord.js');

module.exports = {
	config: {
		name: 'butterdog',
		usage: `${prefix}butterdog`,
		category: 'fun',
		description: 'u dum!',
		accessableby: 'Verified',
	},
	run: async (bot, message) => {
		const embed = new MessageEmbed()
			.setImage('https://i.imgur.com/Nu3QK2N.png');
		message.channel.send(embed);
	},
};
