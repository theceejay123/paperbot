const { MessageEmbed } = require("discord.js");
const colors = require("../utils/general/colors");
const honorifics = require("../utils/general/honorifics");

module.exports = {
  name: "ping",
  cooldown: 3,
  aliases: ["p", "latency"],
  description: "Pings the user back!",
  execute(msg) {
    const { author, client, guild, member } = msg;
    msg.channel.send("Pinging...").then((b_msg) => {
      const name = member.nickname ?? author.username;
      const milli = b_msg.createdTimestamp - msg.createdTimestamp;
      const honorific = honorifics.randomize();
      const phrases = [
        `Hai! There you go ${name}-${honorific}. (」°ロ°)」`,
        `Are you sure this is you ${name}-${honorific}? (＿ ＿*) Z z z`,
        `Please tell me ${name}-${honorific} is joking...  ＼(º □ º l|l)/`,
        `Take that ${name}-${honorific}! ┬┴┬┴┤･ω･)ﾉ`,
        `${name}-${honorific} is sooooo slow	(.❛ ᴗ ❛.)`,
      ];
      const response = phrases[Math.floor(Math.random() * phrases.length)];
      const message = new MessageEmbed()
        .setColor(colors.PinkShade.light)
        .setTitle(response)
        .setDescription(`It took ${milli}ms to ping`)
        .setTimestamp()
        .setFooter(
          `${msg.client.user.tag} • Created by OnPaper`,
          msg.client.user.displayAvatarURL()
        );

      b_msg.edit(message);
    });
  },
};
