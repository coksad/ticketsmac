const Discord = require("discord.js");
const config = require("../config.json");
const log = require(`leekslazylogger`);
const db = require ("../db");
const fetch = require("node-fetch");
// const randomString = require('random-string');
module.exports = {
  name: "save",
  description: "Save a transcript.",
  usage: "",
  aliases: ["save"],
  example: "Saves the ticket channel to a transcript logs channel.",
  args: false,
  cooldown: config.cooldown,
  guildOnly: true,
  execute: async (message, args) => {
    const hastebin = async content => {
  const key = await fetch("https://hastebin.com/documents", {
    method: "POST",
    body: content
  })
    .then(response => response.json())
    .then(body => body.key);
  return `https://hastebin.com/${key}.js`;
};
    const client = message.client;
    const cName = message.channel.name.includes("ticket-");
    if (!cName) return message.channel.send("You can't save a ticket outside a ticket channel.");
    const tickets = db.get(message.guild.id).tickets;
    const arr = [];
    tickets.map(ticket => {
      const { id } = ticket;
      const { transcript } = ticket;
      if (message.channel.id === id) arr.push(transcript);
    });
    const logs = await hastebin(arr.join("\n"));
    const logChannel = message.guild.channels.find(c => c.name === "ticket-transcripts");
    const creator = message.channel.topic;
    const embed = new Discord.RichEmbed()
    .setTitle("Transcript Logs")
    .addField("Ticket Creator", creator)
    .setDescription(`[Here](${logs})`)
    .setColor("RANDOM");
    logChannel.send(embed);
    message.channel.send(":white_check_mark: Done.");
  }
}
