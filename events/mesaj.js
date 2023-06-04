const config = require("../config.json");
const db = require("quick.db");
const client = global.client;
const moment = require("moment");
const { MessageEmbed } = require("discord.js")

moment.locale("tr")

module.exports = {
    name: 'messageDelete',
    async execute(client, message, ) {
    if (message.channel.type === "dm" || !message.guild || message.author.bot) return;
    const snipe = {
        icerik: message.content,
        yazar: message.author.id,
        yazilmaTarihi: message.createdTimestamp,
        silinmeTarihi: Date.now(),
    }
    let embed = new MessageEmbed().setColor('BLUE')
    let user = message.member
    client.channels.cache.get(config.mesajlog).send({ embeds: [embed.setDescription(`     
    ${user ? user.toString(): user.username} Kullanıcısı **${message.channel.name}** Bu Kanalda Mesaj Sildi. 
    Sildiği Mesaj :
    ${message.content}`)] });
}

}