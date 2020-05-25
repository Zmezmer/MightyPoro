const { MessageEmbed } = require('discord.js');
const { red } = require('../../colors.json');
const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'valagentlist',
		usage: `${prefix}valagentlist`,
		category: 'valorant',
		description: 'List all current Valorant agents.',
		accessableby: 'Verified',
	},
	run: async (bot, message, args) => {
		try {
			const embed = new MessageEmbed()
				.setColor(red)
				.setTitle('Valorant Agents')
				.setThumbnail('https://i.imgur.com/Zg07kqa.png')
				.setDescription(`
	            **Controller**\n- Brimstone\n- Omen\n- Viper\n
	            **Duelist**\n- Jett\n- Phoenix\n- Raze\n
	            **Initiator**\n- Breach\n- Sova\n
	            **Sentinel**\n- Cypher\n- Sage`);
			message.channel.send(embed);
		} catch (error) {
			message.channel.send('I\'m having trouble bringing up the agent list.');
		}
	},
};
