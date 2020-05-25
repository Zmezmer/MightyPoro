const { MessageEmbed } = require('discord.js');
const { readdirSync } = require('fs');
const { blue } = require('../../colors.json');
const { prefix } = require('../../config.json');

module.exports = {
	config: {
		name: 'help',
		usage: '!help',
		category: 'miscellaneous',
		description: 'Displays Mighty Poro\'s command list.',
		accessableby: 'Verified',
	},
	run: async (bot, message, args) => {
		const embed = new MessageEmbed()
			.setColor(blue)
			.setAuthor(`${message.guild.me.displayName} Command List`)
			.setThumbnail(bot.user.displayAvatarURL());

		if (!args[0]) {
			const categories = readdirSync('./commands/');

			embed.setDescription(`Prefix: \`${prefix}\`\nUse \`!help [command]\` to view the details on a specific command.`);
			embed.setFooter(`${message.guild.name} | Total Commands: ${bot.commands.size}`, message.guild.iconURL());

			categories.forEach(category => {
				const dir = bot.commands.filter(c => c.config.category === category);
				const capitalise = category.slice(0, 1).toUpperCase() + category.slice(1);
				try {
					embed.addField(`❯ ${capitalise} [${dir.size}]:`, dir.map(c => `\`${c.config.name}\``).join(' '));
				} catch(e) {
					console.log(e);
				}
			});
			return message.channel.send(embed);

		} else {
			let command = bot.commands.get(args[0].toLowerCase());
			if (!command) return message.channel.send(`That command doesn't exist. Use \`${prefix}help\` for the list of commands.`);
			command = command.config;

			embed.setColor(blue)
				.setAuthor(`${message.guild.me.displayName} Help`, bot.user.displayAvatarURL())
				.setDescription(`**Command:** ${command.name}\n**Description:** ${command.description || 'No Description'}\n**Usage:** ${command.usage || 'No Usage'}\n**Accessable by:** ${command.accessableby || 'Verified'}`);
			message.channel.send(embed);
		}
	},
};
