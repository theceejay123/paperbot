const { MessageEmbed } = require("discord.js");
const { get } = require("axios");
const colors = require("../utils/general/colors");

module.exports = {
  name: "dog",
  cooldown: 5,
  aliases: ["doggo", "d", "pup", "puppy", "aso"],
  execute(msg) {
    const { guild, client } = msg;
    msg.channel
      .send("Generating Picture of Dog...")
      .then((b_msg) => {
        const url = "https://dog.ceo/api/breeds/image/random";
        const title = `${guild.name} Dogs!`;
        get(url).then((res) => {
          const picture = res.data;
          const message = new MessageEmbed()
            .setColor(colors.lightBlue.light)
            .setAuthor(title, guild.iconURL())
            .setImage(picture.message)
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
