const { MessageEmbed, Client, Message, MessageActionRow, MessageSelectMenu } = require("discord.js");
let ayar = require("../config.json"); 

const client = global.bot;

module.exports = {
  name: 'perm',
  usage: 'PERM',
  category: "mod",
  description: `PERM KOMUTU`,
  
   async execute(client, message, args, embed) {
  if (!message.member.permissions.has("ADMINISTRATOR")) return message.react(ayar.emoji)

let uye = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if (!uye) return message.reply({ content:` • Örnek; a.perm @AloneDark/ID`});
if(message.author.id === uye.id) return message.reply({content: `Kendine Rol Veremezsin !`, ephemeral: true })

const perm = new MessageActionRow()
.addComponents(
    new MessageSelectMenu()
        .setCustomId('perm')
        .setPlaceholder('Eklemek istediğiniz perm için tıklayınız')
        .addOptions([
            {
                label: 'Vip',
                value: 'vip',
                emoji: '970343074150621215'
            },						
            {
                label: 'Tasarımcı',
                value: 'tasarımcı',
                emoji: '970343065820753940'
            },
            {
                label: 'Müşteri',
                value: 'musteri',
                emoji: '970343083818508388'
            },
            {
                label: 'Developer',
                value: 'developer',
                emoji: '1071418303916032040'
            },
        ]),
);

const msg = await message.reply({ content : `${uye} kullanıcısına perm eklemek için aşağıdaki menüyü kullanınız`, components: [perm] });

const filter = i => i.user.id == message.author.id 
const collector = msg.createMessageComponentCollector({ filter, componentType: 'SELECT_MENU', max: 1, time: 20000 });
collector.on("collect", async (interaction) => {

     if (interaction.values[0] === "vip") {
        uye.roles.cache.has(ayar.vipRole) ? uye.roles.remove(ayar.vipRole) : uye.roles.add(ayar.vipRole);
        if(!uye.roles.cache.has(ayar.vipRole)) {
          
          msg.edit({ content:`<:tick:1115000436865376448> Başarıyla ${uye}, isimli kişiye **Vip** rolü verildi.`, components: [] });
        } else {
          
          msg.edit({ content:`<:tick:1115000436865376448> Başarıyla ${uye}, isimli kişinin **Vip** rolü geri alındı.`, components: [] });
        };
     }

     if (interaction.values[0] === "müzisyen") {
        uye.roles.cache.has(ayar.müzisyenRole) ? uye.roles.remove(ayar.müzisyenRole) : uye.roles.add(ayar.müzisyenRole);
        if(!uye.roles.cache.has(ayar.müzisyenRole)) {
          client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Müzisyen** adlı rol verildi.`)]})
          msg.edit({ content:`<:tick:1115000436865376448>Başarıyla ${uye}, isimli kişiye **Müzisyen** rolü verildi.`, components: [] });
        } else {
          client.channels.cache.find(x => x.name == "rol_log").send({ embeds: [embed.setDescription(`${uye} isimli kişiye **${moment(Date.now()).format("LLL")}** tarihinde ${message.author} tarafından **Müzisyen** adlı rol geri alındı.`)]})
          msg.edit({ content:`<:tick:1115000436865376448>Başarıyla ${uye}, isimli kişinin **Müzisyen** rolü geri alındı.`, components: [] });
        };
     }

    if (interaction.values[0] === "tasarımcı") {
        uye.roles.cache.has(ayar.musteri) ? uye.roles.remove(ayar.musteri) : uye.roles.add(ayar.musteri);
        if(!uye.roles.cache.has(ayar.musteri)) {
          msg.edit({ content:`<:tick:1115000436865376448> Başarıyla ${uye}, isimli kişiye **Tasarımcı** rolü verildi.`, components: [] });
        } else {
          msg.edit({ content:`<:tick:1115000436865376448> Başarıyla ${uye}, isimli kişinin **Tasarımcı** rolü geri alındı.`, components: [] });
        };
     }

    if (interaction.values[0] === "streamer") {
        uye.roles.cache.has(ayar.streamerRole) ? uye.roles.remove(ayar.streamerRole) : uye.roles.add(ayar.streamerRole);
        if(!uye.roles.cache.has(ayar.streamerRole)) {
          
          msg.edit({ content:`<:tick:1115000436865376448> Başarıyla ${uye}, isimli kişiye **Streamer** rolü verildi.`, components: [] });
        } else {
          
          msg.edit({ content:`<:tick:1115000436865376448> Başarıyla ${uye}, isimli kişinin **Streamer** rolü geri alındı.`, components: [] });
        };
     }

    if (interaction.values[0] === "developer") {
        uye.roles.cache.has(ayar.developer) ? uye.roles.remove(ayar.developer) : uye.roles.add(ayar.developer);
        if(!uye.roles.cache.has(ayar.developer)) {
          
          msg.edit({ content:`<:tick:1115000436865376448> Başarıyla ${uye}, isimli kişiye **Developer** rolü verildi.`, components: [] });
        } else {
         
          msg.edit({ content:`<:tick:1115000436865376448> Başarıyla ${uye}, isimli kişinin **Developer** rolü geri alındı.`, components: [] });
        };
     }
    })

}
}