const { MessageEmbed } = require("discord.js");
const colors = require("../utils/general/colors");

module.exports = {
  name: "user",
  cooldown: 10,
  aliases: ["u", "userinfo"],
  async execute(msg, args) {
    const { guild, client, author } = msg;
    const members = await guild.members.fetch();
    const mentioned = guild.member(
      msg.mentions.users.first() ||
        members.find((member) => member.user.username === args[0])
    );
    const member = mentioned.user ?? author;
    const message = new MessageEmbed()
      .setColor(colors.lightCreamPink.main)
      .setTitle("User Info")
      .setThumbnail(member.displayAvatarURL())
      .addFields(
        { name: "**Username:**", value: `${member.username}` },
        { name: "**Discriminator:**", value: `${member.discriminator}` },
        { name: "**ID:**", value: `${member.id}` },
        { name: "**Status:**", value: `${member.presence.status}` },
        { name: "**Created At:**", value: `${member.createdAt}` }
      )
      .setTimestamp()
      .setFooter(
        `${client.user.tag} • Created by OnPaper`,
        client.user.displayAvatarURL()
      );

    msg.channel.send(message);
  },
};
