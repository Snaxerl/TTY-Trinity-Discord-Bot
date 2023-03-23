const translate = require('translate-google')

module.exports= {
    name : 'translate',
    category : 'info',
    description : 'Übersetze ins Deutsche',
    run : async(client, message, args) => {
        translate(args.join(" "), {to : 'de'}).then(res => {
            message.channel.send(res)
        }).catch(err => {
            message.channel.send('An error has occured')
            console.log(err)
        })
    }
}