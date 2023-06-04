const { MessageEmbed, Client, Message, MessageActionRow, MessageSelectMenu } = require("discord.js");
let ayar = require("../config.json"); 

const client = global.bot;

module.exports = {
  name: 'helpers',
  usage: 'helpers',
  category: "mod",
  description: `helpers KOMUTU`,
  
   async execute(client, message, args, embed) {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.react(ayar.emoji)

let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!uye) return message.reply({ content:`<@&${ayar.helpers}> Yardım İstiyorlar Gel Buraya...`});
if(message.author.id === uye.id) return message.reply({content: `AloneDark #DESTEK`, ephemeral: true })
   }}