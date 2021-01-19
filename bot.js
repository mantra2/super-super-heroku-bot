const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(Nzk5NTgzMTk2ODQ0MzkyNDQ4.YAFr4Q.ruFcZzM3q4_Xng7MBNr36utQFys);
