const fs = require('fs');
const { MessageEmbed } = require('discord.js');
const { red } = require('../../colors.json');
const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'zach',
		usage: `${prefix}zach`,
		category: 'miscellaneous',
		description: 'ZAAACH!',
		accessableby: 'Verified',
	},
	run: async (bot, message, args) => {
		try {
			if (message.member.voice.channel) {
				const connection = await message.member.voice.channel.join();
				connection.play(fs.createReadStream('./audio/zach.ogg'), { type: 'ogg/opus' });
				setTimeout(() => {
					connection.disconnect();
				}, 3000);
			}
			const embed = new MessageEmbed()
				.setColor(red)
				.setTitle('Zach')
				.setThumbnail('https://i.imgur.com/Zg07kqa.png')
				.setDescription(`**Origin**\n:flag_us: United States\n
	            **Type**\nAutist\n
	            **Abilities**\nFeed\nTilt\nRanked Boost\nAutistic Screeching\n
	            **Description**\nWith the ability to weaponize his autism. Zach is able to climb and then fall ranked TFT within 48 hours.`)
				.setImage('https://i.imgur.com/EqRMbu9.jpg');
			message.channel.send(embed);
		} catch (error) {
			message.channel.send('Something went wrong. It was probably Zach\'s fault.');
		}
	},
};
