var TelegramBot = require('node-telegram-bot-api');
var Markov = require('markov');
var FS = require('fs');
var token = "578851495:AAGQGxFJCLK267YDKetJmxIs_YrfWMMdVSk";
var bot = new TelegramBot(token, { polling: true });

var dresdenMarkov = Markov();
var stream = FS.createReadStream(__dirname + '/dresden.txt');
dresdenMarkov.seed(stream);

//{"message_id":10,"from":{"id":138266312,"is_bot":false,"first_name":"Yu Peng","username":"reqons","language_code":"en-SG"},"chat":{"id":138266312,"first_name":"Yu Peng","username":"reqons","type":"private"},"date":1539356512,"text":"f"}



bot.on("text", (message) => {
	var returnmsg = dresdenMarkov.respond(message.text, message.text.split(' ').length*(Math.random()*3+1)).join(' ');
	bot.sendMessage(message.chat.id, returnmsg);
});

