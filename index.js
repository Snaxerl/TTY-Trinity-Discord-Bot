const {Collection, Client, Discord} = require('discord.js')
const fs = require('fs')
const client = new Client({
    disableEveryone: true,
    partials : ["MESSAGE", "CHANNEL", "REACTION"]
});
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
}); 
client.on('ready', () => {
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1);
        client.user.setActivity(activities_list[index], { type: 'WATCHING' });
    }, 10000);
});

const activities_list = [
    "dir beim duschen zu",
    "in die Ferne",
    "dumm aus der W\u00e4sche",
    "zu wie du intest",
    "brutal gut aus",
    "sich nur um",
    "dir in die Augen Kleines",
    "stirnrunzelnd zu dir",
    "weg",
    "Animes",
    "Snaxerl zu",

];
client.on('message', async message =>{
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;
    if(!message.member) message.member = await message.guild.fetchMember(message);
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if(cmd.length == 0 ) return;
    let command = client.commands.get(cmd)
    if(!command) command = client.commands.get(client.aliases.get(cmd));
    if(command) command.run(client, message, args) 
})
client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    //ROLE-----------------------------------------------------------------------
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '1️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '2️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('id')
            
        }
    }
    if(reaction.message.id === 'is'){
        if(reaction.emoji.name === '3️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '4️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '5️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('id')
            
        }
    }
    //ELO------------------------------------------------------------------------------
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '1️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '2️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '3️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '4️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '5️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '6️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '7️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.add('id')
            
        }
    }
})
//ROLE-----------------------------------------------------------------------------------------
client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;
    if(!reaction.message.guild) return;
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '1️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '2️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '3️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '4️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '5️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('id')
            
        }
    }
    //ELO----------------------------------------------------------------------------------
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '1️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '2️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '3️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '4️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '5️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '6️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('id')
            
        }
    }
    if(reaction.message.id === 'id'){
        if(reaction.emoji.name === '7️⃣') {
            await reaction.message.guild.members.cache.get(user.id).roles.remove('id')
            
        }
    }
})
client.on('guildMemberAdd', async(member) => { 
  
    const Channel = member.guild.channels.cache.get('id') 
   
    const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Neues Mitglied!')
        .setDescription(`**${member.displayName}** Willkommen bei ${member.guild.name}, wir haben nun ${member.guild.memberCount} Mitglieder!`)
    
    Channel.send(embed)
})
client.on('guildMemberRemove', async(member) => { 
    
    const Channel = member.guild.channels.cache.get('id') 
    const embed = new MessageEmbed()
        .setColor('RED')
        .setTitle('Wir wurden verlassen :(')
        .setDescription(`**${member.displayName}** hat ${member.guild.name} verlassen, wir haben nun ${member.guild.memberCount} Mitglieder!`)
    
    Channel.send(embed)
})
client.login(token)

