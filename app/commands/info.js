const { MessageEmbed, Message } = require("discord.js");
const colors = require("../utils/general/colors");

module.exports = {
  name: "info",
  cooldown: 10,
  aliases: ["i", "server", "serverinfo"],
  execute(msg) {
    const { client, guild } = msg;
    const message = new MessageEmbed()
      .setColor(colors.lightGreen.dark)
      .setTitle("Server Info")
      .setThumbnail(guild.iconURL())
      .setAuthor(`${guild.name} Info`, guild.iconURL())
      .addField("**Server Name:**", `${guild.name}`)
      .addField("**Server Owner:**", `${guild.owner}`)
      .addField("**Member Count:**", `${guild.memberCount}`)
      .addField("**Role Count:**", `${guild.roles.size}`)
      .setTimestamp()
      .setFooter(
        `${client.user.tag} • Created by OnPaper`,
        client.user.displayAvatarURL()
      );
    msg.channel.send(message);
  },
};
