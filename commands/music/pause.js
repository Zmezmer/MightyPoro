const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'pause',
		usage: `${prefix}pause`,
		category: 'music',
		description: 'Pauses the music being played by Mighty Poro.',
		accessableby: 'Verified',
	},
	run: (bot, message, args) => {
		const player = bot.music.players.get(message.guild.id);
		if (!player) return message.channel.send('No songs are currently playing in this server.');

		const { voiceChannel } = message.member;
		if (!voiceChannel || voiceChannel.id !== player.voiceChannel.id) return message.channel.send('You need to be in a voice channel to pause music.');


		player.pause(player.playing);
		return message.channel.send(`Player is now ${player.playing ? 'resumed' : 'paused'}.`);
	},
};