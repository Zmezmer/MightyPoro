const { MessageEmbed } = require('discord.js');
const { blue } = require('../../colors.json');
const { prefix } = require('../../config.json');
const moment = require('moment');

module.exports = {
	config: {
		name: 'serverinfo',
		usage: `${prefix}serverinfo`,
		category: 'miscellaneous',
		description: 'Displays the server information for OvG.',
		accessableby: 'Verified',
	},
	run: async (bot, message) => {
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
		const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
		const emojis = message.guild.emojis.cache;
		const verificationLevels = {
			NONE: 'None',
			LOW: 'Low',
			MEDIUM: 'Medium',
			HIGH: '(╯°□°）╯︵ ┻━┻',
			VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻',
		};
		const embed = new MessageEmbed()
			.setDescription(`**${message.guild.name}**`)
			.setColor(blue)
			.setThumbnail(message.guild.iconURL())
			.addField('General', [
				`**❯ Name:** ${message.guild.name}`,
				`**❯ Server ID:** ${message.guild.id}`,
				`**❯ Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
				`**❯ Region:** ${message.guild.region}`,
				`**❯ Boost Tier:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
				`**❯ Explicit Filter:** ${verificationLevels[message.guild.verificationLevel]}`,
				`**❯ Time Created:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`,
			])
			.addField('Statistics', [
				`**❯ Member Count:** ${message.guild.memberCount}`,
				`**❯ Humans:** ${members.filter(member => !member.user.bot).size}`,
				`**❯ Bots:** ${members.filter(member => member.user.bot).size}`,
				`**❯ Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
				`**❯ Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
				`**❯ Role Count:** ${roles.length}`,
				`**❯ Emoji Count:** ${emojis.size}`,
				`**❯ Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
				`**❯ Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
				`**❯ Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
			])
			.addField('Presence', [
				`**❯ Online:** ${members.filter(member => member.presence.status === 'online').size}`,
				`**❯ Idle:** ${members.filter(member => member.presence.status === 'idle').size}`,
				`**❯ Do Not Disturb:** ${members.filter(member => member.presence.status === 'dnd').size}`,
				`**❯ Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
			]);
		message.channel.send(embed);
	},
};