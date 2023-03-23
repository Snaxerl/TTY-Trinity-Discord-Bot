const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'credits',
    category : 'tty',
    description : 'Entwickler',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(` Loading...`)
        const embed = new MessageEmbed()
            .setTitle('Snaxerl#4444')
            .setDescription(`Created by Snaxerl\nErster Release 06.06.2022`)
            await message.channel.send(embed)
            msg.delete()

    }
}