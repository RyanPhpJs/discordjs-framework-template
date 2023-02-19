const { Command } = require("discordjs-framework");
const { EmbedBuilder } = require("discord.js");
const { userInfo } = require("os");

module.exports = class extends Command {
    constructor(client){
        super(client, {
            name: "info user",
            description: "Obtenha informações sobre determinado usúario",
            options: [
                {
                    name: "user",
                    description: "Usúario que vai ser buscado",
                    type: "USER",
                    default: (i) => i.user
                }
            ]
        });
    }
    exec = async (interaction, { user }) => {

        const embed = new EmbedBuilder()
            .setTitle(`UserInfo`)
            .addFields({ name: "Username", value: user.username })
            .setThumbnail(user.displayAvatarURL())
        
        return interaction.reply({
            embeds: [embed]
        })
        
    }
}