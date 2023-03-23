module.exports = {
    name : 'clear',
    aliases : ['purge'],
    category : 'tty',
    description : 'Lösche eine festgelegte Anzahl an Nachrichten in diesem Channel',
    run : async(client, message, args) => {
        if(!args[0]) return message.channel.send('Bitte gib an wie viele Nachrichten du löschen möchtest: 1 - 99')
        if(isNaN(args[0])) return message.channel.send('NUR ZAHLEN!')
        if(parseInt(args[0]) > 99) return message.channel.send('Ich kann nur 99 Nachrichten löschen.')
        await message.channel.bulkDelete(parseInt(args[0]) + 1)
            .catch(err => console.log(err))
        message.channel.send('Deleted ' + args[0]  + " messages.")
    }
}