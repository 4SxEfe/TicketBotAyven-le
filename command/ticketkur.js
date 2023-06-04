const {MessageActionRow, MessageSelectMenu} = require('discord.js')
module.exports = {
    name: 'ticket',
    usage: 'Şablon',
    category: "mod",
    description: `Şablon komutu.`,
    async execute(client, message, args) {
		message.delete()
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId('select')
					.setPlaceholder('Oluşturulacak bilet türünü seçin.')
					.addOptions([
						{
							label: 'Bot',
							description: 'Bot yaptırmak için ticket aç',
							value: 'bot',
							emoji: '🤖',
						},
						{
							label: 'Tasarım',
							description: 'Tasarım yaptırmak için ticket aç',
							value: 'tasarım',
							emoji: '🎨',
						},
                        {
							label: 'Rol alma',
							description: 'Developer-Designer-Shopper rol almak için ticket aç ',
							value: 'rolal',
							emoji: '📜',
						},
						{
							label: 'Destek-Öneri-Şikayet',
							description: 'Destek-Öneri-şikayet için ticket aç',
							value: 'destek',
							emoji: '💼',
						},
					]),
			);

        message.channel.send({
            embeds: [{
                title: '**AloneDark | Destek Sistemi**',
                description: 'Selam Değerli Üyelerimiz \n Sunucumuzda ticket açmak için butonlara basman yeterli. Kısaca butonlardan bahsedeyim 4 butondan oluşmakta ilk buton bot yaptırmak için ticket açan buton ikinci buton tasarım yaptırmak için ticket açan buton üçüncü buton rol almak için ticket açan buton dördüncü buton destek/öneri/şikayet için ticket açan buton iyi eğlenceler.  ',
                color: "RED",
                footer: {text: 'Created by Efe 🖤'}
            }],
            components: [row]
        })
    }
}
