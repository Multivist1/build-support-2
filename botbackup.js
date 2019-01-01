const Discord = require('discord.js');
const {Attachment } = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	var args = msg.content.split(' ');
	if (args[0] != '!build') {
		return;
	}
	if(args.length === 1){
		msg.channel.send(`${msg.author}, usage: !build [ship_name] [default:original|upgraded]`);
		return;
	} 
	if(args.length === 2){
		args.push('original');
	} 
	if(args[2] === 'original'|| args[2] === 'upgraded'){
		msg.channel.send(`${msg.author}, main`, new Attachment('./img/'+args[1]+'_'+args[2]+'_main.jpg')).catch(console.error);
		msg.channel.send(`${msg.author}, support`, new Attachment('./img/'+args[1]+'_'+args[2]+'_support.jpg')).catch(console.error);
    }
  }
);

client.login(auth.token);