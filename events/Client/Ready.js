const { Event } = require("discordjs-framework");

module.exports = class Ready extends Event {

    constructor(client){

        super(client, {
            name: "ready",
            once: false
        })

    }

    exec = () => {

        this.client.updateCommands(process.env.GUILD_ID);
        console.log(`${this.client.user.username} online`)

    }

}