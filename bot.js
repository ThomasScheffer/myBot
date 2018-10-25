const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const blizzard = require('blizzard.js').initialize({ apikey: config.blizzard });

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    blizzard.wow.character(['profile'], { origin: 'us', realm: 'amanthul', name: 'charni' })
      .then(response => {
        console.log(response.data);
        message.channel.send(response.data);
      });
    }
});

client.login(config.token);
