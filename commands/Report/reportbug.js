const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'reportbug',
    category : 'Report',
    description : 'Reporte einen Bug an den Entwickler',

    /**
     *@param {Client} client
     *@param {Message} message
     * @param {String[]} args
     */
run: async (client, message, args) => {

    const owner = client.users.cache.get('315394116932599818');

    const query = args.join(" ");
    if(!query) return message.reply('Bitte gib einen Bug an');

    const reportEmbed = new MessageEmbed()
        .setTitle('New Bug!')
        .addField('Author', message.author.toString(), true)
        .addField('Guild', message.guild.name, true)
        .addField('Report', query)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

    owner.send(reportEmbed)

}
  


}

    






