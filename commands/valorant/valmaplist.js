const { MessageEmbed } = require('discord.js');
const { red } = require('../../colors.json');
const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'valmaplist',
		usage: `${prefix}valmaplist`,
		category: 'valorant',
		description: 'List all the current Valorant maps.',
		accessableby: 'Verified',
	},
	run: async (bot, message, args) => {
		try {
			const embed = new MessageEmbed()
				.setColor(red)
				.setTitle('Valorant Maps')
				.setThumbnail('https://i.imgur.com/Zg07kqa.png')
				.setDescription('- Bind\n- Haven\n- Split');
			message.channel.send(embed);
		} catch (error) {
			message.channel.send('I\'m having trouble bringing up the map list.');
		}
	},
};
