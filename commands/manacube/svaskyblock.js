const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'svaskyblock',
    category : 'manacube',
    description : 'SVA Inventar eines Spielers',

      /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

      run : async(client, message, args) => {
        if (!args.length) {
            return message.channel.send(`Missing UUID, ${message.author}!`);
        }
        message.channel.send(`https://api.manacube.com/api/svas/Skyblock/${args}`);

    }
}
