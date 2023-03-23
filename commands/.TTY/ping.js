const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'tty',
    description : 'Latenz und API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setDescription(`WebSocket ping  ${client.ws.ping}MS\nMessage edit ping  ${Math.floor(msg.createdAt - message.createdAt)}MS!`)
            await message.channel.send(embed)
            msg.delete()

    }
}
