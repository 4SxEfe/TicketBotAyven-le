const {Client, Collection, Intents, MessageEmbed} = require('discord.js');
const {readdirSync } = require('fs')
const client = new Client({ intents: 32767 })

const { token } = require('./config.json');

const config = require("./config");

client.login(config.token);
client.commands = new Collection();


const commandFiles = readdirSync('./command').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./command/${file}`);
	client.commands.set(command.name, command);
	}



const eventFiles = readdirSync('./events').filter(file => file.endsWith('.js'));
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(client, ...args));
	} else {
		client.on(event.name, (...args) => event.execute( client, ...args));
	}
}
//--OTOROL-HOŞGELDİN
client.on("guildMemberAdd", async (member) => {
	await member.roles.add(config.otorol).catch(e => {});
  });
client.on("guildMemberAdd", async member => {
	if(member.user.bot) return;
	member.guild.channels.cache.get(config.hgkanal).send(`> ${member},${member.guild.name} sunucusuna katıldı ${member.guild.memberCount} üye <:artbir:1114976624333562008>`)
	});
client.on("guildMemberRemove", async member => {
	if(member.user.bot) return;
	member.guild.channels.cache.get(config.sgkanal).send(`> ${member},${member.guild.name} sunucusundan ayrıldı ${member.guild.memberCount} üye <:eksibir:1114976583564922920>`)
	});

//---SESE SOKMA
const { joinVoiceChannel } = require('@discordjs/voice');
 client.on('ready', () => { 
  joinVoiceChannel({
channelId: (config.seskanal),
guildId: (config.sunucuid),       
adapterCreator: client.guilds.cache.get(config.sunucuid).voiceAdapterCreator
    });
});

client.on("interactionCreate",async (interaction, message) => {
    if(interaction.isButton()) {

      if(interaction.customId === "javas") {
        let member = interaction.member
        if(member.roles.cache.has(config.java)) {
          await member.roles.remove(config.java);
          await interaction.reply({ content: `<@&${config.java}> rolünü üzerinizden başarıyla aldım!`, ephemeral: true });
        } else {
          await member.roles.add(config.java);
          await interaction.reply({ content: `<@&${config.java}> rolünü üzerinize başarıyla ekledim!`, ephemeral: true });
        };
    
	};
}
})
//mesajlog
