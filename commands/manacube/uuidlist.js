const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'uuidlist',
    category : 'manacube',
    description : 'Auswahl an gespeicherten UUIDs',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(` Loading...`)
        const embed = new MessageEmbed()
            .setTitle('UUID Liste')
            .setDescription(` 
            
            await message.channel.send(embed)
            msg.delete()

    }
}