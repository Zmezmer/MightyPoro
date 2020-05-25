const { prefix } = require('../../config.json');
const { MessageEmbed } = require('discord.js');
const { red } = require('../../colors.json');

module.exports = {
	config: {
		name: 'valweapon',
		usage: `${prefix}valweapon [weapon name]`,
		category: 'valorant',
		description: 'Look up the information for a Valorant weapon.',
		accessableby: 'Verified',
	},
	run: async (bot, message, args) => {
		try {
			const Weapons = {
				classic: {
					name: 'Classic',
					type: 'Sidearm',
					image: 'https://i.imgur.com/mIE31zg.png',
					cost: 'Free',
					primary: 'Semi-automatic',
					pfirerate: '6.75 rounds/sec',
					alternate: '3-round Burst',
					afirerate: '2.22 rounds/sec',
					damage: 'Body 26 | Head 78 | Leg 22 **(0-30m)**\nBody 22 | Head 66 | Leg 18 **(30-50m)**',
					magazine: '12',
					wallpen: 'Low',
				},
				shorty: {
					name: 'Shorty',
					type: 'Sidearm',
					image: 'https://i.imgur.com/ofHaX0a.png',
					cost: '200',
					primary: 'Semi-automatic',
					pfirerate: '3.3 rounds/sec',
					damage: 'Body 12 | Head 36 | Leg 10 **(0-9m)**\nBody 8 | Head 24 | Leg 6 **(9-15m)**',
					magazine: '2',
					wallpen: 'Low',
				},
				frenzy: {
					name: 'Frenzy',
					type: 'Sidearm',
					image: 'https://i.imgur.com/DdV690y.png',
					cost: '400',
					primary: 'Full-automatic',
					pfirerate: '10 rounds/sec',
					damage: 'Body 26 | Head 78 | Leg 22 **(0-20m)**\nBody 21 | Head 63 | Leg 17 **(20-50m)**',
					magazine: '13',
					wallpen: 'Low',
				},
				ghost: {
					name: 'ghost',
					type: 'Sidearm',
					image: 'https://i.imgur.com/75iZ2Sk.png',
					cost: '500',
					primary: 'Semi-automatic',
					pfirerate: '6.75 rounds/sec',
					damage: 'Body 30 | Head 105 | Leg 26 **(0-30m)\nBody 25 | Head 88 | Leg 21 **(30-50m)**',
					magazine: '15',
					wallpen: 'Medium',
				},
				sheriff: {
					name: 'Sheriff',
					type: 'Sidearm',
					image: 'https://i.imgur.com/XBAbtHm.png',
					cost: '800',
					primary: 'Semi-automatic',
					pfirerate: '4 rounds/sec',
					damage: 'Body 55 | Head 160 | Leg 47 **(0-30m)**\nBody 50 | Head 145 | Leg 43 **(30-50m)**',
					magazine: '6',
					wallpen: 'High',
				},
				stinger: {
					name: 'Stinger',
					type: 'SMG',
					image: 'https://i.imgur.com/9fqxnGK.png',
					cost: '1,000',
					primary: 'Full-automatic',
					pfirerate: '18 rounds/sec',
					alternate: 'Zoom Made (1.15x), 4-round Burst, Spread Reduction',
					afirerate: '4 rounds/sec',
					damage: 'Body 27 | Head 67 | Leg 23 **(0-20m)**\nBody 25 | Head 62 | Leg 21 **(20-50m)**',
					magazine: '20',
					wallpen: 'Low',
				},
				spectre: {
					name: 'Spectre',
					type: 'SMG',
					image: 'https://i.imgur.com/QSGOCUV.png',
					cost: '1,600',
					primary: 'Full-automatic',
					pfirerate: '13.33 rounds/sec',
					alternate: 'Zoom Mode (1.15x), Spread Reduction',
					afirerate: '12 rounds/sec',
					damage: 'Body 26 | Head 78 | Leg 22 **(0-20m)**\nBody 22 | Head 66 | Leg 18 **(20-50m)**',
					magazine: '30',
					wallpen: 'Medium',
				},
				bulldog: {
					name: 'Bulldog',
					type: 'Rifle',
					image: 'https://i.imgur.com/H7HFUAL.png',
					cost: '2,100',
					primary: 'Full-automatic',
					pfirerate: '9.15 rounds/sec',
					alternate: 'Zoom Mode (1.25x), 3-round Burst',
					afirerate: '4 rounds/sec',
					damage: 'Body 35 | Head 116 | Leg 30 **(0-50m)**',
					magazine: '24',
					wallpen: 'Medium',
				},
				guardian: {
					name: 'Guardian',
					type: 'Rifle',
					image: 'https://i.imgur.com/1Bk5kYJ.png',
					cost: '2,700',
					primary: 'Semi-automatic',
					pfirerate: '6.5 rounds/sec',
					alternate: 'Zoom Mode (1.5x, Spread Reduction)',
					afirerate: '6.5 rounds/sec',
					damage: 'Body 65 | Head 195 | Leg 49 **(0-50m)**',
					magazine: '12',
					wallpen: 'Medium',
				},
				phantom: {
					name: 'Phantom',
					type: 'Rifle',
					image: 'https://i.imgur.com/SZmtVK1.png',
					cost: '2,900',
					primary: 'Full-automatic',
					pfirerate: '11 rounds/sec',
					alternate: 'Zoom Mode (1.25x), Spread Reduction',
					afirerate: '9.9 rounds/sec',
					damage: 'Body 39 | Head 156 | Leg 33 **(0-15m)\nBody 35 | Head 140 | Leg 30 **(15-30m)**\nBody 31 | Head 124 | Leg 26 **(30-50m)**',
					magazine: '30',
					wallpen: 'Medium',
				},
				vandal: {
					name: 'Vandal',
					type: 'Rifle',
					image: 'https://i.imgur.com/dmmVg4i.png',
					cost: '2,900',
					primary: 'Full-automatic',
					pfirerate: '9.25 rounds/sec',
					alternate: 'Zoom Mode (1.25x, Spread Reduction',
					afirerate: '8.32 rounds/sec',
					damage: 'Body 39 | Head 156 | Leg 33 **(0-50m)**',
					magazine: '25',
					wallpen: 'Medium',
				},
				bucky: {
					name: 'Bucky',
					type: 'Shotgun',
					image: 'https://i.imgur.com/rJmXuxF.png',
					cost: '900',
					primary: 'Semi-automatic',
					pfirerate: '1.1 rounds/sec',
					alternate: 'Semi-automatic Air Burst, Extended Primary Fire Shot',
					afirerate: '1.1 rounds/sec',
					damage: 'Body 22 | Head 44 | Leg **(0-8m)**\nBody 17 | Head 34 | Leg 14**(8-12m)**\nBody 9 | Head 18 | Leg 8 **(12-50m)**',
					magazine: '5',
					wallpen: 'Low',
				},
				judge: {
					name: 'Judge',
					type: 'Shotgun',
					image: 'https://i.imgur.com/jQpHXKf.png',
					cost: '1,500',
					primary: 'Full-automatic',
					pfirerate: '3.5 rounds/sec',
					damage: 'Body 17 | Head 34 | Leg 14 **(0-10m)**\nBody 13 | Head 26 | Leg 11 **(10-15m)**\nBody 10 | Head 20 | Leg 9 **(15-50m)**',
					magazine: '7',
					wallpen: 'Medium',
				},
				ares: {
					name: 'Ares',
					type: 'Heavy',
					image: 'https://i.imgur.com/cTmTuSq.png',
					cost: '1,700',
					primary: 'Full-automatic',
					pfirerate: '10 to 13 rounds/sec (increases over duration of fire)',
					alternate: 'Zoom Mode (1.25x), Spread Reduction',
					afirerate: '10 to 13 rounds/sec (increases over duration of fire)',
					damage: 'Body 30 | Head 72 | Leg 25 **(0-30m)**\nBody 28 | Head 67 | Leg 23 **(30-50m)**',
					magazine: '50',
					wallpen: 'High',
				},
				odin: {
					name: 'Odin',
					type: 'Heavy',
					image: 'https://i.imgur.com/IqR1yj1.png',
					cost: '3,200',
					primary: 'Full-automatic',
					pfirerate: '12 to 15.6 rounds/sec (increases over duration of fire)',
					alternate: 'Zoom mode (1.25x), Spread Reduction',
					afirerate: '15.6 rounds/sec',
					damage: 'Body 38 | Head 95 | Leg 32 **(0-30m)**\nBody 31 | Head 77 | Leg 26 **(30-50m)**',
					magazine: '100',
					wallpen: 'High',
				},
				marshal: {
					name: 'Marshal',
					type: 'Sniper',
					image: 'https://i.imgur.com/y05qrtw.png',
					cost: '1,100',
					primary: 'Semi-automatic',
					pfirerate: '1.5 rounds/sec',
					alternate: 'Zoom Mode (2.5x), Spread Reduction',
					afirerate: '1.2 rounds/sec',
					damage: 'Body 101 | Head 202 | Leg 85 **(0-50m)**',
					magazine: '5',
					wallpen: 'Medium',
				},
				operator: {
					name: 'Operator',
					type: 'Sniper',
					image: 'https://i.imgur.com/DlIFQ0o.png',
					cost: '4,500',
					primary: 'Semi-automatic',
					pfirerate: '0.75 rounds/sec',
					alternate: 'Dual-Zoom Mode (2.5x or 5x), Spread Reduction',
					afirerate: '0.75 rounds/sec',
					damage: 'Body 150 | Head 255 | Leg 127',
					magazine: '5',
					wallpen: 'High',
				},
			};

			const name = message.content.toLowerCase().substr(prefix.length + 10);
			const valweapon = Weapons[name];

			const embed = new MessageEmbed()
				.setColor(red)
				.setTitle(`${valweapon.name} - ${valweapon.type}`)
				.setThumbnail('https://i.imgur.com/Zg07kqa.png')
				.setDescription(`**Cost**\n${valweapon.cost}\n
                **Primary Fire**\n${valweapon.primary}\n${valweapon.pfirerate}\n
                **Alternate Fire**\n${valweapon.alternate || 'None'}\n${valweapon.afirerate || ''}\n
                **Damage**\n${valweapon.damage}\n
                **Magazine Capactiy**\n${valweapon.magazine}\n
                **Wall Penetration**\n${valweapon.wallpen}`)
				.setImage(valweapon.image);
			message.channel.send(embed);
		} catch (error) {
			message.channel.send('I couldn\'t find that weapon.');
		}
	},
};
