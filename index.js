const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
//const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const prefix = ".";
const commandFolders = fs.readdirSync("./commands");

client.once('ready', () =>{
    console.log('Ready');
})


client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(!client.commands.has(command)) return;
    try{
        client.commands.get(command).execute(message, args);

    }catch(error){
        console.error(error);
        message.reply('There was an issue');
    }
})

client.login('ODY5Njk0ODQ4Nzc1NjMwOTQ5.YQB8cg.Fm7zpwgygR-qpVZhHWh0BFe-zoU');

for (const folder of commandFolders) {
    const commandFiles = fs
      .readdirSync(`./commands/${folder}`)
      .filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
      const command = require(`./commands/${folder}/${file}`);
      client.commands.set(command.name, command);
    }
  }