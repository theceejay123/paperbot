const { MessageEmbed } = require("discord.js");
require("../utils/general/helper");

module.exports = {
  name: "hello",
  cooldown: 3,
  aliases: ["hi", "yo", "hola", "konnichiwa", "hey", "wassup", "sup", "aloha"],
  description: "Say hello!",
  execute(msg) {
    const { author, guild } = msg;
    const message = new MessageEmbed()
      .setAuthor(
        `${module.exports.aliases[
          Math.floor(Math.random() * module.exports.aliases.length)
        ].toProperCase()} ${author.username}!`
      )
      .setTimestamp()
      .setFooter(
        `${guild.name}`
      );

    msg.channel.send(message);
  },
};
