const config = require("../config.json")
const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const moment = require("moment");
const limit = new Map();
moment.locale("tr");
//client, message, args, embed, author, channel, guild
module.exports = {
    name: 'roll',
    usage: 'rol',
    category: "mod",
    description: `Rol komutu.`,
    async execute(client, message, args, embed, author, channel, guild) {
        if (!message.member.permissions.has("ADMINISTRATOR")) return message.reply({ embeds: [embed.setDescription(`Bu komutu kullanabilmek için öncelikle gerekli yetkin olmalı!`)] }).catch((err) => console.log(err), client.tick(message)).then((e) => setTimeout(() => { e.delete(); }, 10000));
      
       message.delete()
      let button1 = new Discord.MessageButton()
          .setStyle('DANGER')
          .setEmoji('<:tick:1115000436865376448>')
          .setLabel('Kayıt Olmak İçin Bas.')
          .setCustomId('javas')
  

  
          const ayven = new MessageEmbed()
          .setDescription(`> Merhaba **${message.guild.name}** Kullanıcıları Aşağıdan <@&${config.java}> Rolünü Alabilirsiniz.`)
  
  
      let row = new Discord.MessageActionRow()
          .addComponents(button1)
      
    
  
      message.channel.send({ embeds: [ayven], components: [row]  }) ;
  
  
  
  
    }
}