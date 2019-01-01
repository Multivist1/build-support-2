const Discord = require('discord.js');
const {Attachment } = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	var args = msg.content.split(' ');
	if (args[0] != '!assemble') {
		return;
	}
	if(args.length === 1){
		msg.channel.send(`${msg.author}, usage: !assemble [ship_name] [default:original|upgraded] [default:1|2|3]`);
		return;
	}
	if(args.length === 2){
		msg.channel.send(`${msg.author}, usage: !assemble [ship_name] [default:original|upgraded] [default:1|2|3]`);
		return;
	}
	if(args[2] === 'original'|| args[2] === 'upgraded'){
		if(args[3] === '1'|| args[3] === '2'|| args[3] === '3'){
			msg.channel.send(`${msg.author}, main`, new Attachment('./img/'+args[1]+'_'+args[2]+'_'+args[3]+'_main.jpg')).catch(console.error);
			msg.channel.send(`${msg.author}, support`, new Attachment('./img/'+args[1]+'_'+args[2]+'_'+args[3]+'_support.jpg')).catch(console.error);
		}
		if(args[3] != '1' && args[3] != '2' && args[3] != '3'){
			msg.channel.send(`${msg.author}, main`, new Attachment('./img/'+args[1]+'_'+args[2]+'_1_main.jpg')).catch(console.error);
			msg.channel.send(`${msg.author}, support`, new Attachment('./img/'+args[1]+'_'+args[2]+'_1_support.jpg')).catch(console.error);
		}  
		
	}	
}
);

client.login(os.environ["TOKEN"]);
