const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
  //response.sendFile(__dirname + '/site/index.html');
  
  //app.use(morgan('combined'))
});

app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
//const Colours = require("colors");

const Client = new Discord.Client();
const client = new Discord.Client();

//const token = process.env.TOKEN;
const prefix = "danger!";
const message = "";

const dangerzonedl = "http://www.dangerzonegame.net/download-now.html";
const orespawndl = "\n _*Dangerzone*_ \n - OreSpawn for DZ can be found here: http://www.dangerzonegame.net/mods.html \n_*Minecraft*_ \n - 1.7.10: http://www.orespawn.com/download-17.html \n - 1.6.4: http://www.orespawn.com/download-164.html \n ";
const dangerzonever = "VERSION 1.7b Released August 19, 2018";
const orespawnver = "\n _*Dangerzone*_ \n - `ORESPAWN 2.0c ON DANGERZONE 1.7` released August 19th, 2018 \n _*Minecraft*_ \n - 1.7.10: `1.7.10v20.3` released on February 7, 2015!!! \n - 1.6.4: `1.6.4v20` released on September 27, 2014!!! \n ";

var developerids = ["204669722094993417"]

client.on('ready',() => {
  console.log(`Logged in as: ${client.user.tag}!`);
  console.log(`Client Id: ${client.user.id}!`);
  console.log(`Is client Verified?: ${client.user.verified}!`);
  console.log(`Client Created on: ${client.user.createdAt}!`);
  //hook.send('I am now alive!');
  client.user.setActivity(`Orespawn ` + process.env.OSVER + ` on DangerZone ` + process.env.DZVER);
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
      if (message.content.startsWith(prefix + 'dzdl')) {
        message.channel.sendMessage('Click Here: ' + dangerzonedl + ' to download the latest version of DangerZone!');
      }
      if (message.content.startsWith(prefix + 'dangerzonedownload')) {
        message.channel.sendMessage('Click Here: ' + dangerzonedl + ' to download the latest version of DangerZone!');
      }
      //Gets OreSpawn Download Link
  if (message.content.startsWith(prefix + 'orespawndl')) {
    message.channel.sendMessage('Click a link below to download the latest version of OreSpawn!: ' + orespawndl + '');
  }
      if (message.content.startsWith(prefix + 'osdl')) {
        message.channel.sendMessage('Click a link below to download the latest version of OreSpawn!: ' + orespawndl + '');
      }
      if (message.content.startsWith(prefix + 'orespawndownload')) {
        message.channel.sendMessage('Click a link below to download the latest version of OreSpawn!: ' + orespawndl + '');
      }
  
      //Gets Latest DangerZone Version
  if (message.content.startsWith(prefix + 'dangerzoneversion')) {
    message.channel.sendMessage('The latest version of DangerZone is: ' + dangerzonever);
  }
      if (message.content.startsWith(prefix + 'dzversion')) {
          message.channel.sendMessage('The latest version of DangerZone is: ' + dangerzonever);
      }
      if (message.content.startsWith(prefix + 'dangerzonever')) {
          message.channel.sendMessage('The latest version of DangerZone is: ' + dangerzonever);
      }
      if (message.content.startsWith(prefix + 'dzver')) {
        message.channel.sendMessage('The latest version of DangerZone is: ' + dangerzonever);
      }  
  
        //Gets Latest Orespawn Version
  if (message.content.startsWith(prefix + 'orespawnversion')) {
    message.channel.sendMessage('The latest version of OreSpawn is: ' + orespawnver);
  }
      if (message.content.startsWith(prefix + 'osversion')) {
        message.channel.sendMessage('The latest version of OreSpawn is: ' + orespawnver);
      }
      if (message.content.startsWith(prefix + 'orespawnver')) {
        message.channel.sendMessage('The latest version of OreSpawn is: ' + orespawnver);
      }
      if (message.content.startsWith(prefix + 'osver')) {
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