const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'helpadmin',
    category : 'tty',
    description : 'Pinge den Entwickler an',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(` Loading...`)
        message.reply(`Snaxerl wurde kontaktiert`);
        client.users.fetch('315394116932599818', false).then((user) => {
          user.send('Du wurdest angepingt!');
         });
            

    
      }

    }


      
       
       