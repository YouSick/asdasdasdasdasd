const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("480165666142420992")
setInterval(function() {
channel.send(`هنا كلام ال سبام`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
