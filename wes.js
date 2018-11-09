const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});


client.on('ready', async() => {
var server = "510103671313268772";
var channel = "510484828848652288";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا يا خرا شنو هذا ')
	},305);
})

client.login("NTEwNTE1Mzc3NDA3Nzg3MDI4.Dsdj4A.kPwfubHBxQbWFCRb6K1asZf8m08");

