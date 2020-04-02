const Discord = require("discord.js");
const config = require("../config.json");
const log = require(`leekslazylogger`);
module.exports = {
  name: "invite",
  description: "Discord Server Link",
  usage: "[args]",
  aliases: ["none"],
  example: "invite",
  args: false,
  cooldown: config.cooldown,
  guildOnly: true,
  execute(message, args) {
    const client = message.client;
    // command starts here
    message.delete();

    const embed = new Discord.RichEmbed()
      .setTitle("Want a bot of your own? Join Discord Bots now!")
      .setColor(config.colour)
      .setDescription("https://discord.gg/s3a5rpm")
    message.channel.send(embed);
    

    // command ends here
  }
};
