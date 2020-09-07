require("../utils/general/helper");
const { MessageEmbed } = require("discord.js");
const honorifics = require("../utils/general/honorifics");
const colors = require("../utils/general/colors");

module.exports = {
  name: "hello",
  cooldown: 3,
  aliases: ["hi", "yo", "hola", "konnichiwa", "hey", "wassup", "sup", "aloha"],
  description: "Say hello!",
  execute(msg) {
    const { author, guild } = msg;
    const message = new MessageEmbed()
      .setColor(colors.lightBlue.main)
      .setAuthor(
        `${module.exports.aliases[
          Math.floor(Math.random() * module.exports.aliases.length)
        ].toProperCase()} ${author.username}-${honorifics.randomize()}!`
      )
      .setTimestamp()
      .setFooter(`${guild.name}`);

    msg.channel.send(message);
  },
};
