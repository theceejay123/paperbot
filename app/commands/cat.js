const { MessageEmbed } = require("discord.js");
const { get } = require("axios");
const colors = require("../utils/general/colors");

module.exports = {
  name: "cat",
  cooldown: 5,
  aliases: ["kitty", "kat", "c", "feline"],
  description: "Cat pictures!",
  execute(msg) {
    const { client, guild } = msg;
    msg.channel
      .send("Generating Picture of Cat...")
      .then((b_msg) => {
        const url = "https://aws.random.cat/meow";
        const title = `${guild.name} Cats!`;
        get(url).then((res) => {
          const picture = res.data;
          const message = new MessageEmbed()
            .setColor(colors.lightGreen.light)
            .setAuthor(title, guild.iconURL())
            .setImage(picture.file)
            .setTimestamp()
            .setFooter(
              `${client.user.tag} • Created by OnPaper`,
              client.user.displayAvatarURL()
            );

          b_msg.edit(message).catch(console.error);
        });
      })
      .catch(console.error);
  },
};
