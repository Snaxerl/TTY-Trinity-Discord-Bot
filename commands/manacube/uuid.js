const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'uuid',
    category : 'manacube',
    description : 'Beschaffung der UUID eines Spielers',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(` Loading...`)
        const embed = new MessageEmbed()
            .setTitle('UUID Check')
            .setDescription(`https://gameplay.tools/minecraft/uuid`)
            await message.channel.send(embed)
            msg.delete()

    }
}