const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'clear',
		usage: `${prefix}clear [1-99]`,
		category: 'miscellaneous',
		description: 'Delete up to 99 messages at once. Admin use only.',
		accessableby: 'Admins',
	},
	run: async (bot, message, args) => {
		const memberRole = message.member.roles.cache.some(role => role.name === 'Admins');

		if (!memberRole) {
			return message.reply('This is an Admin command and not available to regular users.');
		}

		const amount = parseInt(args[0]) + 1;

		if (isNaN(amount)) {
			return message.reply('That isn\'t a valid number. I can only accept numbers between 1 and 99.');
		} else if (amount <= 1 || amount > 100) {
			return message.reply('You need to input a number between 1 and 99.');
		}

		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('There was an error trying to delete messages in this channel.');
		});
	},
};