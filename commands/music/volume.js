const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'volume',
		usage: `${prefix}volume`,
		category: 'music',
		description: 'Adjust the music volume.',
		accessableby: 'Verified',
	},
	run: async (bot, message, args) => {
		const player = bot.music.players.get(message.guild.id);
		if (!player) return message.channel.send('No songs are currently playing in this server.');

		const voiceChannel = message.member.voice.channel;
		if (!voiceChannel || voiceChannel.id !== player.voiceChannel.id) return message.channel.send('You need to be in a voice channel to adjust the volume.');

		if (!args[0]) return message.channel.send(`Current Volume: ${player.volume}`);
		if (Number(args[0]) <= 0 || Number(args[0]) > 100) return message.channel.send('You may only set the volume from 1-100.');

		player.setVolume(Number(args[0]));
		return message.channel.send(`Successfully set the volume to: ${args[0]}`);
	},
};