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
let channel =     client.channels.get("532623090195234828")
setInterval(function() {
channel.send(`Vanz.#6868 is doing fake account and join to invite rewards server don't give him rewards`);
}, 30)
})


client.login(process.env.BOT_TOKEN);
