const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const blizzard = require('blizzard.js').initialize({ apikey: config.blizzard });

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {

        message.channel.send("pong!");

    }
});

client.login(config.token);
