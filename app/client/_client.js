const { Client } = require("discord.js");

module.exports = class extends Client {
  constructor(config) {
    super({
      disableMentions: "everyone",
      disableEveryone: true,
      disableEvents: ["TYPING_START"],
    });

    this.config = config;
    this.queue = new Map();
  }
};
