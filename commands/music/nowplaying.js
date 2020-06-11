const { prefix } = require('../../config.json');
const { Utils } = require('erela.js');
const { MessageEmbed } = require('discord.js');
const { stripIndents } = require('common-tags');

module.exports = {
	config: {
		name: 'nowplaying',
		usage: `${prefix}nowplaying`,
		category: 'music',
		description: 'Displays what Mighty Poro is currently playing.',
		accessableby: 'Verified',
	},
	run: async (bot, message, args) => {
		const player = bot.music.players.get(message.guild.id);
		if (!player || !player.queue[0]) return message.channel.send('No songs are currently playing within this server.');
		const { title, author, duration, thumbnail } = player.queue[0];

		const embed = new MessageEmbed()
			.setAuthor('Current Song Playing.', message.author.displayAvatarURL)
			.setThumbnail(thumbnail)
			.setDescription(stripIndents`
            ${player.playing ? '▶️' : '⏸️'} **${title}** \`${Utils.formatTime(duration, true)}\` by ${author}
            `);

		return message.channel.send(embed);
	},
};