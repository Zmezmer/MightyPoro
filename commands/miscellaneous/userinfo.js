const { MessageEmbed } = require('discord.js');
// eslint-disable-next-line no-unused-vars
const { blue } = require('../../colors.json');
const { prefix } = require('../../config.json');
const moment = require('moment');

module.exports = {
	config: {
		name: 'userinfo',
		usage: `${prefix}userinfo`,
		category: 'miscellaneous',
		description: 'Displays a user\'s information.',
		accessableby: 'Verified',
	},
	run: async (bot, message, [target]) => {
		const member = message.mentions.members.last() || message.guild.members.cache.get(target) || message.member;
		const roles = member.roles.cache
			.sort((a, b) => b.position - a.position)
			.map(role => role.toString())
			.slice(0, -1);
		const flags = {
			DISCORD_EMPLOYEE: 'Discord Employee',
			DISCORD_PARTNER: 'Discord Partner',
			BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
			BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
			HYPESQUAD_EVENTS: 'HypeSquad Events',
			HOUSE_BRAVERY: 'House of Bravery',
			HOUSE_BRILLIANCE: 'House of Brilliance',
			HOUSE_BALANCE: 'House of Balance',
			EARLY_SUPPORTER: 'Early Supporter',
			TEAM_USER: 'Team User',
			SYSTEM: 'System',
			VERIFIED_BOT: 'Verified Bot',
			VERIFIED_DEVELOPER: 'Verified Bot Developer',
		};
		const userFlags = member.user.flags.toArray();
		const embed = new MessageEmbed()
			.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
			.setColor(member.displayHexColor || 'blue')
			.addField('User', [
				`**❯ Username:** ${member.user.username}`,
				`**❯ Discriminator:** ${member.user.discriminator}`,
				`**❯ ID:** ${member.id}`,
				`**❯ Avatar:** [Link to avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
				`**❯ Status:** ${member.user.presence.status}`,
				`**❯ Account Created:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
				`**❯ Server Join Date:** ${moment(member.joinedAt).format('LT')} ${moment(member.joinedAt).format('LL')} ${moment(member.joinedAt).fromNow()}`,
				`**❯ Game:** ${member.user.presence.game || 'Not playing a game.'}`,
				`**❯ Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
				`**❯ Roles [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? bot.utils.trimArray(roles) : 'None'}`,
				`**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
			]);
		message.channel.send(embed);
	},
};