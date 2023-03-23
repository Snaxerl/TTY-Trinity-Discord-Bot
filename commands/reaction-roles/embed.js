const { MessageEmbed } = require('discord.js')

module.exports = {
        name : 'reaction-role',
        run : async(client, message) => {
            const embed = new MessageEmbed()
                .setTitle('League of Legends Role')
                .setDescription('React to get the Role\n1️⃣ - Top Lane\n2️⃣ - Jungle\n3️⃣ - Mid Lane\n4️⃣ - ADC\n5️⃣ - Support')
                .setColor('GREEN')

            const msg = await message.channel.send(embed)
            await msg.react('1️⃣')
            await msg.react('2️⃣')
            await msg.react('3️⃣')
            await msg.react('4️⃣')
            await msg.react('5️⃣')
        }



}