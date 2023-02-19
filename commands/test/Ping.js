const { Command } = require("discordjs-framework");

module.exports = class extends Command {
    constructor(client){
        super(client, {
            name: "ping",
            description: "mostra o ping do comando",
        });
    }
    exec = async (interaction) => {
        
        const ping = Date.now() - interaction.createdTimestamp;
        return interaction.reply(`Ping global é ${ping}ms`);
        
    }
}