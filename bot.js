const Discord = require('discord.js');
const client = new Discord.Client();
const A = new Discord.Client();
const B = new Discord.Client();
const C = new Discord.Client();
const D = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("480165666142420992")
setInterval(function() {
channel.send(`ThatMyBoyThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy`);
}, 1000)
})


client.on('message', message => {
  var prefix = ".";
  
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;
   
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
   
let args = message.content.split(" ").slice(1);
   
if (command === "say") {
message.delete()
  message.channel.sendMessage(args.join(" ")).catch(console.error);
}

A.on("ready", () => {
let channel =     client.channels.get("480165666142420992")
setInterval(function() {
channel.send(`ThatMyBoyThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy`);
}, 1000)
})


B.on("ready", () => {
let channel =     client.channels.get("480165666142420992")
setInterval(function() {
channel.send(`ThatMyBoyThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy`);
}, 1000)
})


C.on("ready", () => {
let channel =     client.channels.get("480165666142420992")
setInterval(function() {
channel.send(`ThatMyBoyThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy`);
}, 1000)
})

D.on("ready", () => {
let channel =     client.channels.get("480165666142420992")
setInterval(function() {
channel.send(`ThatMyBoyThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy ThatMyBoy`);
}, 1000)
})


client.login(process.env.BOT_TOKEN);
A.login(process.env.TOKEN1);
B.login(process.env.TOKEN2);
C.login(process.env.TOKEN3);
D.login(process.env.TOKEN4);
