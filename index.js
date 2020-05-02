const { Client } = require('discord.js');
const { config } = require("dotenv");

const client = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
});

client.on("ready", () => {
    console.log("GOMMEMODE!");
});

client.on('guildMemberAdd', member =>{
    const channel = member.guild.channels.cache.find(channel => channel.name === "general");
    if(!channel) return;

    channel.send(`Moin ${member}, willkommen auf dem aktivsten und besten Discord Server, Deutschlands. Bei Fragen einfach in #general , vielleicht hast du ja Glück und dir antwortet jemand in den nächsten 2 Wochen und ansonsten einfach möglichst oft den Gomme Emoji benutzen. :gomme: *Antwort nach Din-Norm 321002*`)
});

client.login(process.env.TOKEN);
