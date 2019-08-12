const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
//THIS MUST BE THIS WAY
client.login(process.env.NTkwOTk4Nzc4OTc5NTQ5MTk0.XVG6Bw.Umjz6F2zRJYja_IhzkcLpmD1hDo);
