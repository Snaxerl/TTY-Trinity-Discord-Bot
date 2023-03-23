const { MessageEmbed } = require('discord.js')

module.exports = {
        name : 'reaction-elo',
        run : async(client, message) => {
            const embed = new MessageEmbed()
                .setTitle('League of Legends Elo')
                .setDescription('React to get the Role\n1️⃣ - Master+\n2️⃣ - Diamond\n3️⃣ - Platin\n4️⃣ - Gold\n5️⃣ - Silber\n6️⃣ - Bronze\n7️⃣ - Iron')
                .setColor('GREEN')

            const msg = await message.channel.send(embed)
            await msg.react('1️⃣')
            await msg.react('2️⃣')
            await msg.react('3️⃣')
            await msg.react('4️⃣')
            await msg.react('5️⃣')
            await msg.react('6️⃣')
            await msg.react('7️⃣')
        }



}