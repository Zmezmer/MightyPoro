const { prefix } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
const { red } = require('../../colors.json');

module.exports = {
	config: {
		name: 'valmap',
		usage: `${prefix}valmap [map name]`,
		category: 'valorant',
		description: 'Display a Valorant map.',
		accessableby: 'Verified',
	},
	run: async (bot, message) => {
		try {
			const Maps = {
				bind: {
					name: 'BIND',
					image: 'https://i.imgur.com/THb5Zn1.png',
					bombsites: '2',
					teleporters: '2',
				},
				haven: {
					name: 'HAVEN',
					image: 'https://i.imgur.com/pphzC1r.png',
					bombsites: '3',
					teleporters: '0',
				},
				split: {
					name: 'SPLIT',
					image: 'https://i.imgur.com/v7N8Ksi.png',
					bombsites: '2',
					teleporters: '0',
				},
			};

			const name = message.content.toLowerCase().substr(prefix.length + 7);
			const valmap = Maps[name];

			const embed = new MessageEmbed()
				.setColor(red)
				.setTitle(`Valorant Map - ${valmap.name}`)
				.setThumbnail('https://i.imgur.com/Zg07kqa.png')
				.setDescription(`**Bomb Sites:**\n${valmap.bombsites}\n**Teleporters:**\n${valmap.teleporters}`)
				.setImage(valmap.image);
			message.channel.send(embed);
		} catch (error) {
			message.channel.send('I can\'t seem to find that map.');
		}
	},
};
