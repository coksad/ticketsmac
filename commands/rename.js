const Discord = require("discord.js");
const config = require('../config.json');
module.exports = {
  name: "rename",
  description: "Renames a channel name to the name specified.",
  usage: "[args]",
  aliases: ["none"],
  example: "rename",
  args: false,
  cooldown: config.cooldown,
  guildOnly: true,
  execute(message, args) {
  
  const client = message.client;
    message.delete();

        let channelName = args.slice(0).join(" ")
      
        if (args[0]){
          message.channel.setName(channelName)
          }
    
    const embed = new Discord.RichEmbed()
      .setTitle("Channel Renamed")
      .setColor(config.colour)
      .setDescription( `I have renamed the channel name to your specified command. Please ensure you change the ticket name back to "ticket-123" to close.`)
    message.channel.send(embed);

        
        if(!args[0]) return message.reply('Enter a name')
  }};
