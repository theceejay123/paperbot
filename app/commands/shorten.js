const { post } = require("axios");

module.exports = {
  name: "shorten",
  cooldown: 20,
  aliases: ["s", "sh", "short"],
  description: "Shortens link",
  execute(msg, args) {
    msg.channel.send("Generating Link...").then((b_msg) => {
      const url = `http://sh.onpaper.ca/link`;
      post(
        url,
        {
          url: args[0],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res) => {
        const data = res.data;
        msg.delete();
        b_msg.edit(data.link);
      });
    });
  },
};
