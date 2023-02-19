require("dotenv").config();
const { Intents, Client } = require("discordjs-framework");

const client = new Client({
    intents: Intents.DEFAULT,
    owner: [process.env.USER_ID],
    testGuilds: [process.env.GUILD_ID],
    path: {
        commands: "commands",
        events: "events"
    },
});
client.login(process.env.BOT_TOKEN).catch(function (err) {
    console.log("Erro ao se conectar", err);
});
