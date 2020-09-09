const youtubeDiscord = require("ytdl-core-discord");
const soundcloudDiscord = require("soundcloud-downloader");
const { canModifyQueue } = require("../general/utils");

module.exports = {
  async play(song, msg) {
    const PRUNING = process.env.PRUNING;
    const SOUNDCLOUD_CLIENT_ID = process.env.SOUNDCLOUD_CLIENT_ID;
    const queue = msg.client.queue.get(msg.guild.id);
  },
};
