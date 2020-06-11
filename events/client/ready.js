const { prefix } = require('../../config.json');
const { ErelaClient, Utils } = require('erela.js');
const { nodes } = require('../../config.json');

module.exports = bot => {
	console.log(`${bot.user.username} is online.`);
	bot.user.setActivity(`mightyporo.com | ${prefix}help`, { type: 'PLAYING' });

	bot.music = new ErelaClient(bot, nodes)
		.on('nodeError', console.log)
		.on('nodeConnect', () => console.log('Successfully created a new Node.'))
		.on('queueEnd', player => {
			player.textChannel.send('Queue has ended.');
			return bot.music.players.destroy(player.guild.id);
		})
		.on('trackStart', ({ textChannel }, { title, duration }) => textChannel.send(`Now playing: **${title}** \`${Utils.formatTime(duration, true)}\``).then(m => m.delete({ timeout: 15000, reason: 'Timeout' })).catch(console.error));

	bot.levels = new Map()
		.set('none', 0.0)
		.set('low', 0.10)
		.set('medium', 0.15)
		.set('high', 0.25);
};