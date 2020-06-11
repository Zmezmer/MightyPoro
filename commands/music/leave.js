const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'leave',
		usage: `${prefix}leave`,
		category: 'music',
		description: 'Makes Mighty Poro leave the voice channel.',
		accessableby: 'Verified',
	},
	run: async (bot, message, args) => {
		const { voiceChannel } = message.member;
		const player = bot.music.players.get(message.guild.id);

		if(!player) return message.channel.send('No songs are currently playing on this server.');
		if(!voiceChannel || voiceChannel.id !== player.voiceChannel.id) return message.channel.send('You need to be in a voice channel to use the leave command.');

		bot.music.players.destroy(message.guild.id);
		return message.channel.send('Successfully stopped the music.');
	},
};