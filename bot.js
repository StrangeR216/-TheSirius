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
client.login(process.env.BOT_TOKEN);
{
  "name": "бан",
  "permissions": "BAN_MEMBERS",
  "restriction": "1",
  "_id": "SLUwP",
  "actions": [
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${mentionedUser} Ты нарушил(а) правила этого сервера\n",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "${mentionedUser} и за это ты понесешь наказание!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Я, Великий и Могущественный Администратор ${member} изгоняю тебя ${mentionedUser}",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "time": "1",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Во имя Ромы, Админстрации сервера и...\nСвятого Сириуса!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "time": "3",
      "measurement": "1",
      "name": "Wait"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "АМИНЬ!",
      "storage": "0",
      "varName2": "",
      "name": "Send Message"
    },
    {
      "member": "0",
      "varName": "",
      "reason": "",
      "name": "Ban Member"
    }
  ],
  "_aliases": [
    "Бан"
  ]
}
//THIS MUST BE THIS WAY
client.login(process.env.BOT_TOKEN);
