const { MessageEmbed } = require('discord.js');
const { blue } = require('../../colors.json');

module.exports = {
	config: {
		name: 'serverinfo',
		usage: '!serverinfo',
		category: 'miscellaneous',
		description: 'Displays the server information for OvG.',
		accessableby: 'Verified',
	},
	run: async (bot, message, args) => {
		const sEmbed = new MessageEmbed()
			.setColor(blue)
			.setThumbnail(message.guild.iconURL())
			.addFields(
				{ name: 'Name', value: message.guild.name, inline: true },
				{ name: 'Owner', value: message.guild.owner, inline: true },
				{ name: 'Region', value: message.guild.region, inline: true },
				{ name: 'Member Count', value: message.guild.memberCount, inline: true },
				{ name: 'Created', value: message.channel.guild.createdAt, inline: true },
			);
		message.channel.send({ embed: sEmbed });
	},
};
