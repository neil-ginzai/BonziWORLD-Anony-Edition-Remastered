const prefix = "$";
const botname = "UbunuBOT (" + prefix + "help)";
const version = "█████████";
var help =
  "UbunuBOT Commands\n$help, $say {TEXT}, $joke, $fact, $botinfo, $roominfo";
var help = "Sleep Stream Commands\n$help, $execaudio";
var botinfo =
  "UbunuBOT Version " +
  version +
  ". Find UbunuBOT at: https://████████.███/████████";

var SSM = 0;

function sendMsg(msg) {
  setTimeout(() => {
    bot.emit("talk", { text: msg });
  }, 1100);
}

setTimeout(() => {
  bot.emit("command", { list: ["name", botname] });
}, 1000);
setTimeout(() => {
  bot.emit("command", { list: ["name", botname] });
}, 2100);
setTimeout(() => {
  bot.emit("command", { list: ["color", "black"] });
}, 3200);
setTimeout(() => {
  sendMsg("UbunuBOT is online. Type " + prefix + "help to see commands.");
  setInterval(() => {
    sendMsg("UbunuBOT is online. Type " + prefix + "help to see commands.");
  }, 60000);
}, 4300);

function ubunutussm() {
  const SSM = 1;
}

bot.on("talk", (message) => {
  if (SSM == 0) {
    if (message.text == prefix + "roominfo") {
      sendMsg("Amount of users in the room: " + window.usersAmt);
    }
    if (message.text == prefix + "help") {
      sendMsg(help);
    }
    if (message.text == prefix + "botinfo") {
      sendMsg(botinfo);
    }
    if (message.text.startsWith(prefix + "say")) {
      sendMsg(message.text.substring(prefix.length + 3));
    }
    if (message.text == prefix + "joke") {
      setTimeout(() => {
        bot.emit("command", { list: ["joke"] });
      }, 1100);
    }
    if (message.text == prefix + "fact") {
      setTimeout(() => {
        bot.emit("command", { list: ["fact"] });
      }, 1100);
    }
  }
  if (SSM == 1) {
    if (message.text == prefix + "help") {
      sendMsg(helpssm);
    }
    if (message.text == prefix + "execaudio") {
      (audio = new Audio(message.text.substring(prefix.length + 9))),
        audio.play();
    }
  }
});
