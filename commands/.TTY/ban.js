const { MessageEmbed } = require('discord.js')

module.exports = {
    name : 'ban',
    category : 'tty',
    description : 'Banne einen Nutzer vom Server',

      /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    
    
      run : async(client, message, args) => {
  
   
        client.on('message', message => {
            
            if (!message.guild) return;
          
           
            if (message.content.startsWith('!ban')) {
        
              const user = message.mentions.users.first();
              
              if (user) {
                
                const member = message.guild.members.resolve(user);
               
                if (member) {
                  /**
                   * Ban the member
                   * Make sure you run this on a member, not a user!
                   * There are big differences between a user and a member
                   * Read more about what ban options there are over at
                   * https://discord.js.org/#/docs/main/master/class/GuildMember?scrollTo=ban
                   */
                  member
                    .ban({
                      reason: 'They were bad!',
                    })
                    .then(() => {
                 
                      message.channel.send(`Banned: ${user.tag}`);
                    })
                    .catch(err => {
                      
                      message.channel.send('Ban fehlgeschlagen');
                      
                      console.error(err);
                    });
                } else {
                 
                  message.channel.send("That user isn't in this guild!");
                }
              } else {
                
                message.channel.send("Woher soll ich wissen wen?!");
              }
            }
          })
}
}