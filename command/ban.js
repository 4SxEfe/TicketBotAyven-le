const {MessageActionRow, MessageSelectMenu, MessageEmbed, MessageButton} = require('discord.js')
module.exports = {
    name: 'ban',
    usage: 'ban',
    category: "mod",
    description: `Ban komutu`,
    async execute(client, message, args) {
        if(!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send("Üyeleri Banlama Yetkiniz Yok.")


        let user = message.mentions.users.first();




        if(!user) return message.channel.send("Lütfen Banlanacak Kişiyi Belirtiniz.")




const üye = message.guild.members.cache.get(user.id)


üye.ban()

const ayvenbuton = new MessageActionRow().addComponents(new MessageButton().setCustomId('ayven').setLabel("Gelme la piç").setStyle(2).setDisabled(true))


const ban = new MessageEmbed()
.setColor("#5865F2")
.setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
.setImage("https://media.discordapp.net/attachments/1052809611863933010/1109460082778972251/thor-power.gif?width=622&height=371")
.setDescription(`${user}, üyesi ${message.author} tarafından banlandı
`)




message.channel.send({embeds:[ban],components:[ayvenbuton]})




},

}