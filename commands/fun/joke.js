const { prefix } = require('../../config.json');
const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const { blue } = require('../../colors.json');

module.exports = {
	config: {
		name: 'joke',
		usage: `${prefix}joke`,
		category: 'fun',
		description: 'Mighty Poro tells a random joke.',
		accessableby: 'Verified',
	},
	run: async (bot, message) => {
		const getJoke = async () => {
			const response = await axios.get(
				'https://official-joke-api.appspot.com/random_joke',
			);
			const joke = response.data;
			return joke;
		};
		const jokeValue = await getJoke();
		const embed = new MessageEmbed()
			.setColor(blue)
			.setThumbnail(bot.user.displayAvatarURL())
			.setTitle('Jokes!')
			.setDescription(`${jokeValue.setup}\n\n${jokeValue.punchline}`);
		message.channel.send(embed);
	},
};