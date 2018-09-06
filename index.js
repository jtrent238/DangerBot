/*
--- Discord's Rules on self-bots ---

Selfbots are against Discord's ToS (Terms of Service) so use it at your own risk. Also don't overuse it, and don't make it obvious that you are using it either. I'm not held responsible if you get banned for using this selfbot.
  
Here is an article made by Discord about self-bots: https://support.discordapp.com/hc/en-us/articles/115002192352

Also you can't run this script on repl.it :)
*/

const Discord = require("discord.js");
//const Colours = require("colors");

const Client = new Discord.Client();
const client = new Discord.Client();

//const token = process.env.TOKEN;
const prefix = "danger!";
const message = "";

const dangerzonedl = "";
const orespawndl = "";
const dangerzonever = "";
const orespawnver = "";

var developerids = ["204669722094993417"]

client.on('ready',() => {
  console.log(`Logged in as: ${client.user.tag}!`);
  console.log(`Client Id: ${client.user.id}!`);
  console.log(`Is client Verified?: ${client.user.verified}!`);
  console.log(`Client Created on: ${client.user.createdAt}!`);
  //hook.send('I am now alive!');
  //game(streamingGame);
});

client.on('message', message => {
    if (message.author === client.user) return;
    if(message.author.bot) return;

  //Help Message [Developer Help]
  if (message.content.startsWith(prefix + 'help')) {
    message.channel.sendMessage('<:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214>\n' + 
                                '<:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> The prefix for the bot is `' + prefix + '` <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214>\n <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> _*Commands!*_ <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> \n' +
                                '<:Logo:487381198218461214> `help` = Shows this message. :question: \n' + 
                                '<:Logo:487381198218461214> `dangerzonedl` = Gets the latest download link for DangerZone. \n' +
								                '<:Logo:487381198218461214> `orespawndl` = Gets the latest download link for OreSpawn. \n' +
								                '<:Logo:487381198218461214> `dangerzoneversion` = Gets the latest version of DangerZone. \n' +
                                '<:Logo:487381198218461214> `orespawnversion` = Gets the latest version of OreSpawn. \n' +
                                '<:Logo:487381198218461214> `dangerzonedl` = Gets the latest download link. \n'
                            )
    message.channel.sendMessage('<:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214> <:Logo:487381198218461214>')}
     
  
  
  //if you mention the bot.
  if (message.content.startsWith(client.user)) {
    //message.channel.sendMessage('this is a help command for the bot.');
    message.channel.sendMessage('<:Logo:487381198218461214>  Use `' + prefix + 'help` for a list of commands!');}
  
    //Gets DangerZone Download Link
  if (message.content.startsWith(prefix + 'dangerzonedl')) {
    message.channel.sendMessage('Click Here: ' + dangerzonedl + ' to download the latest version of DangerZone!');
  }
      //Gets OreSpawn Download Link
  if (message.content.startsWith(prefix + 'orespawndl')) {
    message.channel.sendMessage('Click Here: ' + orespawndl + ' to download the latest version of DangerZone!');
  }
  
      //Gets Latest DangerZone Version
  if (message.content.startsWith(prefix + 'dangerzoneversion')) {
    message.channel.sendMessage('The latest version of DangerZone is: ' + dangerzonever);
  }
  
        //Gets Latest Orespawn Version
  if (message.content.startsWith(prefix + 'orespawnversion')) {
    message.channel.sendMessage('The latest version of OreSpawn is: ' + orespawnver);
  }
  
      //Information about the bot.
  if (message.content.startsWith(prefix + 'info')) {
    message.channel.sendMessage('<:Logo:487381198218461214> Bot Version: ' + process.env.VERSION + ' ' + '(' + '_*' + process.env.SENTRY_VERSION + '*_' + ')' + '<:Logo:487381198218461214> \n<:Logo:487381198218461214> Bot made by: ' + process.env.AUTHOR + ' <:Logo:487381198218461214> \n<:Logo:487381198218461214> OreSpawn and DangerZone made by: ' + process.env.AUTHOR2 + ' <:Logo:487381198218461214>');
  }
  
  //Information about the bot. [Developer Information]
  if (message.content.startsWith(prefix + 'devinfo')) {
    if(message.member.id == developerids) {
      console.log(`Yay, its a Developer!`);
      message.channel.sendMessage('<:Logo:487381198218461214> Bot Version: ' + process.env.VERSION + ' ' + '(' + '_*' + process.env.SENTRY_VERSION + '*_' + ')' + 
                                  '<:Logo:487381198218461214> \n<:Logo:487381198218461214> Bot made by: ' + process.env.AUTHOR + ' <:Logo:487381198218461214>' + '\n <:Logo:487381198218461214>' + 
                                  '<:Logo:487381198218461214> OreSpawn and DangerZone made by: ' + process.env.AUTHOR2 + ' <:Logo:487381198218461214>' +
                                  `Logged in as: ${client.user.tag}!` + '<:Logo:487381198218461214> \n <:Logo:487381198218461214>' + 
                                  `Client Id: ${client.user.id}!` + '<:Logo:487381198218461214> \n <:Logo:487381198218461214>' + 
                                  `Is client Verified?: ${client.user.verified}!` + '<:Logo:487381198218461214> \n <:Logo:487381198218461214>' + 
                                  `Client Created on: ${client.user.createdAt}!` + '<:Logo:487381198218461214>');
  console.log(`Logged in as: ${client.user.tag}!`);
  console.log(`Client Id: ${client.user.id}!`);
  console.log(`Is client Verified?: ${client.user.verified}!`);
  console.log(`Client Created on: ${client.user.createdAt}!`);
  
    }
    else {
      console.log(`Nope, noppers, nadda. (NOT a Developer!)`);
      message.channel.sendMessage('Sorry Only a Developer can use this command');
}
  }
  
});


client.login(process.env.TOKEN);