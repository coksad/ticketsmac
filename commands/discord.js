const Discord = require("discord.js");
const config = require("../config.json");
const log = require(`leekslazylogger`);
module.exports = {
  name: "discord",
  description: "Discord Server Link",
  usage: "[args]",
  aliases: ["none"],
  example: "discord",
  args: false,
  cooldown: config.cooldown,
  guildOnly: true,
  execute(message, args) {
    const client = message.client;
    // command starts here
    message.delete();

    const embed = new Discord.RichEmbed()
      .setTitle("Server Link")
      .setColor(config.colour)
      .setDescription("https://discord.gg/Nec6URx")
    message.channel.send(embed);
    

    // command ends here
  }
};
