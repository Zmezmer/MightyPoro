const { prefix } = require('../../config.json');

module.exports = bot => {
	console.log(`${bot.user.username} is online.`);
	bot.user.setActivity(`mightyporo.com | ${prefix}help`, { type: 'PLAYING' });
};