import Discord from "discord.js";

const client = new Discord.Client();

client.login(process.env.DISCORD_BOT_TOKEN);
