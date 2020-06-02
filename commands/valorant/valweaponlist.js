const { MessageEmbed } = require('discord.js');
const { red } = require('../../colors.json');
const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'valweaponlist',
		usage: `${prefix}valweaponlist`,
		category: 'valorant',
		description: 'List all the current Valorant weapons.',
		accessableby: 'Verified',
	},
	run: async (bot, message) => {
		try {
			const embed = new MessageEmbed()
				.setColor(red)
				.setTitle('Valorant Weapons')
				.setThumbnail('https://i.imgur.com/Zg07kqa.png')
				.setDescription(`
                **Sidearms**\n- Classic\n- Shorty\n- Frenzy\n- Ghost\n- Sheriff\n
                **SMGs**\n- Stinger\n- Spectre\n
                **Rifles**\n- Bulldog\n- Guardian\n- Phantom\n- Vandal\n
                **Shotguns**\n- Bucky\n- Judge\n
                **Heavies**\n- Ares\n- Odin\n
                **Snipers**\n- Marshal\n- Operator`);
			message.channel.send(embed);
		} catch (error) {
			message.channel.send('I\'m having trouble bringing up the weapon list.');
		}
	},
};
