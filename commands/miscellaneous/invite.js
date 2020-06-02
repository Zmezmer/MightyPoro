const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'invite',
		usage: `${prefix}invite`,
		category: 'miscellaneous',
		description: 'Generates a temporary invite link. Expires in 24 hours.',
		accessableby: 'Verified',
	},
	run: async (bot, message) => {
		const invite = await message.channel.createInvite({
			unique: true,
			maxAge: 86400,
		});
		message.channel.send(`${invite}`);
	},
};