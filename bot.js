const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("480165666142420992")
setInterval(function() {
channel.send(`ThatMyBoy`);
}, 30)
})

client.on("ready", () => {
let channel =     client.channels.get("533256122631716875")
setInterval(function() {
channel.send(`كريدز كريدز كريدز`);
}, 30)
})


client.login(process.env.BOT_TOKEN);
