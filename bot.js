const Discord = require('discord.js');
const client = new Discord.Client();
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

client.login(process.env.BOT_TOKEN);
