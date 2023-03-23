const { Message } = require('discord.js')

module.exports = {
    name : 'addrole' ,
    category : 'tty',
    description : 'Füge Nutzern bestimme Rollen zu',
    run : async(client, message, args) => {
/**
* @param {Message} message
*/
if(!message.member.hasPermission("MANAGE_ROLES")) return message.chanel.send('Du hast keine Berechtigungen dafür.')
const target = message.mentions.members.first()
if(!target) return message.channel.send('No member specified')
const role = message.mentions.roles.first()
if(!role) return  message.channel.send('No Role specified')
await target.roles.add(role)
message.channel.send(`${target.user.username} wurde die Rolle zugeteilt`)

}}