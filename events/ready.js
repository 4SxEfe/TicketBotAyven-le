module.exports = {
    name: 'ready',
    once: true,

    async execute(client) {
        console.log(`${client.user.username} Giriş Yapıldı`)

        var KARISIKDURUM = 1
        setInterval(async () => {
            status =  [`🖤 AloneDark #DESTEK`,`Efe & Ayven <<3`,`discord.gg/safecode`]
            KARISIKDURUM = (KARISIKDURUM + 2) % (status.length);
            client.user.setPresence({
                activities: [{
                    name: `${status[KARISIKDURUM]}`,
                    type: "WATCHING",
                  }],
                  status: "dnd"})
        }, 5000);
    }
}
