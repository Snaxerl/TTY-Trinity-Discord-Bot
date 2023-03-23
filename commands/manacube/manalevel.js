const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'manalevel',
    category : 'manacube',
    description : 'Manalevel eines Spielers',

      /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

      run : async(client, message, args) => {
        if (!args.length) {
            return message.channel.send(`Missing UUID, ${message.author}!`);
        }
        message.channel.send(`https://api.manacube.com/api/manalevel/${args}`);

    }
}
