const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'skip',
		usage: `${prefix}skip`,
		category: 'music',
		description: 'Skips the song that is currently playing.',
		accessableby: 'Verified',
	},
	run: (bot, message, args) => {
		const player = bot.music.players.get(message.guild.id);
		if(!player) return message.channel.send('No songs are currently playing in this server.');

		const voiceChannel = message.member.voice.channel;
		if(!voiceChannel || voiceChannel.id !== player.voiceChannel.id) return message.channel.send('You need to be in a voice channel to use the skip command.');

		player.stop();
		return message.channel.send('Skipped the current song!');
	},
};