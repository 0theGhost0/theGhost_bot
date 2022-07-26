<<<<<<< HEAD
const tmi = require('tmi.js')

const options = {
    options: {
        debug: true
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'theghost_bot_',
        password: 'oauth:86sbzix787t2u0xth3m5zyku2l6jm1'
    },
    channels: ['theghost_3_']
}

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    console.log('\x1b[36m%s\x1b[0m', '///////////Bereit///////////')

})

client.on('chat', (channel, user, message, self) => {
    if(message == '!help' || message == '!Help' || message == '!HELP') {
        client.action('theghost_3_', '!tt für Tiktok | !dc für den discord server | !valo für mein Valo namen  | !vrank für mein Valo Rank')
    }
    if(message == 'moin' || message == 'hi' || message == 'hey' || message == 'Moin' || message == 'Hey' || message == 'Hi' ) {
        client.action('theghost_3_', `Moin, @${user.username}`)
    }
    if(message == '!tt' || message == '!TikTok' || message == '!tiktok') {
        client.action('theghost_3_', 'Hier ist mein Tiktok: / ')
    }
    if(message == '!dc' || message == '!discord' || message == '!Discord') {
        client.action('theghost_3_', 'Hier mein Discord: bald')
    }
    if(message == '!valo' || message == '!Valo' || message == '!VALO') {
        client.action('theghost_3_', 'theGhost#6373')
    }
    if(message == '!vrank' || message == '!valorank' || message == '!ValoRank') {
        client.action('theghost_3_', 'Iron |||')
    }
            
})

client.on('clearchat', (channel, message) => {
    console.log('clearchat', {channel, message})
    client.say('theghost_3_', 'Der chat wurde gecleart!')
}) 

=======
const tmi = require('tmi.js')

const options = {
    options: {
        debug: true
    },
    connection: {
        cluster: 'aws',
        reconnect: true,
    },
    identity: {
        username: 'theghost_bot_',
        password: 'oauth:86sbzix787t2u0xth3m5zyku2l6jm1'
    },
    channels: ['Horizonfn']
}

const client = new tmi.client(options);

client.connect();

client.on('connected', (address, port) => {
    console.log('verbindung aufbau erfolgreich')

})

client.on('chat', (channel, user, message, self) => {
    if(message == '!help' || message == '!Help' || message == '!HELP') {
        client.action('Horizonfn', '!tt für Tiktok | !dc für den discord server | !valo für mein Valo namen  | !fn für mein Fortnite namen |  !vrank für mein Valo Rank')
    }
    if(message == 'moin' || message == 'hi' || message == 'hey' || message == 'Moin' || message == 'Hey' || message == 'Hi' ) {
        client.action('Horizonfn', `Moin, @${user.username}`)
    }
    if(message == '!tt' || message == '!TikTok' || message == '!tiktok') {
        client.action('Horizonfn', 'Hier ist mein Tiktok: https://www.tiktok.com/@twitch_horizonfn ')
    }
    if(message == '!dc' || message == '!discord' || message == '!Discord') {
        client.action('Horizonfn', 'Hier mein Discord: https://discord.com/invite/5WSukf9fbt')
    }
    if(message == '!valo' || message == '!Valo' || message == '!VALO') {
        client.action('Horizonfn', '12333#3318')
    }
    if(message == '!fn' || message == '!Fortnite' || message == '!fortnite') {
        client.action('Horizonfn', 'Horizon.fn')
    }
    if(message == '!vrank' || message == '!valorank' || message == '!ValoRank') {
        client.action('Horizonfn', 'bronze |||')
    }
            
})

client.on('clearchat', (channel, message) => {
    console.log('clearchat', {channel, message})
    client.say('Horizonfn', 'Der chat wurde gecleart!')
}) 

>>>>>>> e761f91643a81c51a64a4db128e3576668b84e9a
