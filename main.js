/**
 * Discord Bot - PaperBot
 *
 * Description: Official BOT of OnPaper
 * Author: Janeal Pimentel
 * Created: September 02, 2020
 */

require("dotenv").config();

const { readdirSync } = require("fs");
const { join } = require("path");
const Client = require("./app/client/_client");
const { Collection } = require("discord.js");
const { PREFIX } = require("./config.json");

const client = new Client();
client.commands = new Collection();
client.prefix = PREFIX;
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const cmdList = readdirSync("./app/commands").filter((file) =>
  file.endsWith(".js")
);

cmdList.forEach((fileCommand) => {
  const command = require(`./app/commands/${fileCommand}`);
  client.commands.set(command.name, command);
});

client.on("ready", () => {
  console.log(`${client.user.username} is online!`);
  client.user.setActivity(`${PREFIX}help`);
});

client.on("warn", (info) => console.log(info));
client.on("error", console.error);

/**
 * Import all commands
 */
const commandFiles = readdirSync(
  join(__dirname, "app/commands")
).filter((file) => file.endsWith(".js"));

for (const cFile of commandFiles) {
  const command = require(join(__dirname, "app/commands", `${cFile}`));
  client.commands.set(command.name, command);
}

client.on("message", async (msg) => {
  if (msg.author.bot || !msg.content.startsWith(PREFIX)) return;
  if (msg.channel.type === "dm")
    msg.channel.send("Type **-help** for more info. _(Only works on servers)_");

  const prefixRegex = new RegExp(
    `^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`
  );
  if (!prefixRegex.test(msg.content)) return;

  const [, matchedPrefix] = msg.content.match(prefixRegex);
  const args = msg.content.slice(matchedPrefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();
});

client.login(`${process.env.DISCORD_TOKEN}`);
