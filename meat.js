// cosmic fucking broke bonzitv

// will soon move bonzitv's video lists inside this javascript file to declutter meat.js

// go behh yourself

var bonziTvCommercialMode = false;
var bonziTvCool = false;

// youtube url variables
let youtube_url = "https://www.youtube.com/watch?v=";
let youtube_tiny_url = "https://www.youtube.com/watch?v=";
let youtube_shorts_url = "";
let youtube_embed_url = "";
let youtube_music_url = "";

/* 
  "https://www.youtube.com/watch?v=97dyt7MXWpo",
  "https://www.youtube.com/watch?v=t0JyCdk5ymo",
  "https://www.youtube.com/watch?v=bzXzGMbdQfY",
  "https://www.youtube.com/watch?v=DuD_boVOl54",
  "https://www.youtube.com/watch?v=H50wW4eAFKo",
  "https://www.youtube.com/watch?v=APAcU3YBhYc",
  "https://www.youtube.com/watch?v=H50wW4eAFKo",
  "https://www.youtube.com/watch?v=MmB9b5njVbA",
  "https://www.youtube.com/watch?v=tYoO9XkCCHg",
  "https://www.youtube.com/watch?v=K0damuN_9bQ",
  "https://www.youtube.com/watch?v=hb59QZW2SCA",
  "https://www.youtube.com/watch?v=5ls7g9eH7ss",
  "https://www.youtube.com/watch?v=VJs_VALzi_8",
  "https://www.youtube.com/watch?v=GCA5CB5uUyA",
  "https://www.youtube.com/watch?v=Jz6FCFoL3k4",
  "https://www.youtube.com/watch?v=CDLyImqvqVY",
  "https://www.youtube.com/watch?v=Wt2rGmUmm2A",
  "https://www.youtube.com/watch?v=YnuYnzXUuGY",
  "https://www.youtube.com/watch?v=exjhztp_IQY"
*/

// the clusterfuck of video ids
var videoIdsCommercials = [
  "https://www.youtube.com/watch?v=hb59QZW2SCA",
  "https://www.youtube.com/watch?v=b2OUKjLzcEc",
  "https://www.youtube.com/watch?v=Uyw-bne3G2A",
  "https://www.youtube.com/watch?v=gcGI1f24eyM",
  "https://www.youtube.com/watch?v=liqetY2e7a8",
  "https://www.youtube.com/watch?v=AykkOSaLphY",
  "https://www.youtube.com/watch?v=DSYiXCEWsVc",
  "https://www.youtube.com/watch?v=3rvFiHa6rJk",
  "https://www.youtube.com/watch?v=9943uVZ-eL4",
  "https://www.youtube.com/watch?v=EuEkdlCn-gI",
  "https://www.youtube.com/watch?v=75OKjPBYTCg",
  "https://www.youtube.com/watch?v=DuD_boVOl54",
  "https://www.youtube.com/watch?v=97dyt7MXWpo",
  "https://www.youtube.com/watch?v=APAcU3YBhYc",
  "https://www.youtube.com/watch?v=exjhztp_IQY",
  "https://www.youtube.com/watch?v=GCA5CB5uUyA",
  "https://www.youtube.com/watch?v=Olbq5oFe7KY",
  "https://www.youtube.com/watch?v=D1RsSixkCUk",
  "https://www.youtube.com/watch?v=PHtGZraA1fY",
  "https://www.youtube.com/watch?v=5ls7g9eH7ss",
  "https://www.youtube.com/watch?v=K0damuN_9bQ",
  "https://www.youtube.com/watch?v=ZYNjnQSw9OI",
  "https://www.youtube.com/watch?v=7FtQUqmwKsQ",
];
var videoIds4PM2430PM = [
  "https://www.youtube.com/watch?v=tSOvBex4SJU", // Annoying Orange
  "https://www.youtube.com/watch?v=6ZykGz5kF0U",
  "https://www.youtube.com/watch?v=445gC5CYQfw",
  "https://www.youtube.com/watch?v=yYsOnfN5tIU",
  "https://www.youtube.com/watch?v=I61oSL5xBkk",
  "https://www.youtube.com/watch?v=0qzIsC0S6qQ", // CF7252 MSAgent Skits
  "https://www.youtube.com/watch?v=Jj1NPbhdrls", // Memes
  "https://www.youtube.com/watch?v=h0m34g9rVys", // FestivalV S1
  "https://www.youtube.com/watch?v=bSKJg5jsgdc",
  "https://www.youtube.com/watch?v=UkcKserLvnc",
  "https://www.youtube.com/watch?v=x4pg9NH3XVk",
  "https://www.youtube.com/watch?v=tk2MvV8LeZs",
  "https://www.youtube.com/watch?v=qsATpni7B9s",
  "https://www.youtube.com/watch?v=a0tSVDjQbz0",
  "https://www.youtube.com/watch?v=4ES2y7bxENE",
  "https://www.youtube.com/watch?v=yp7VrlFbbNc",
  "https://www.youtube.com/watch?v=A95ESwEBl4Q",
  "https://www.youtube.com/watch?v=vXZw29lK1Uk",
  "https://www.youtube.com/watch?v=W_Q5ACNMlsQ",
  "https://www.youtube.com/watch?v=DD2xYpxXndw",
  "https://www.youtube.com/watch?v=n4ZdBIN5MF8",
  "https://www.youtube.com/watch?v=c_F9mHfsyMI",
  "https://www.youtube.com/watch?v=2vRrNYarBiU",
  "https://www.youtube.com/watch?v=6pATxytAt40",
  "https://www.youtube.com/watch?v=Bbn13Qegghs",
  "https://www.youtube.com/watch?v=QFkksPZmtMU",
  "https://www.youtube.com/watch?v=y9mkFzDjmv0",
  "https://www.youtube.com/watch?v=5H1TaN1gO1E",
  "https://www.youtube.com/watch?v=x1yiXmkNfdc",
  "https://www.youtube.com/watch?v=H6b2wn2InKM",
  "https://www.youtube.com/watch?v=GI94aaSjt4M",
  "https://www.youtube.com/watch?v=WlZswQEUqUc",
  "https://www.youtube.com/watch?v=CleUrqPLCzU", // Villager News
  "https://www.youtube.com/watch?v=1hoSYvwnv_E",
  "https://www.youtube.com/watch?v=U3p21FI9WBw",
  "https://www.youtube.com/watch?v=z-TUOiJVaYk",
  "https://www.youtube.com/watch?v=TH0ZXfmjRqE",
  "https://www.youtube.com/watch?v=dzudQVAVVQ0",
  "https://www.youtube.com/watch?v=qtwz81uG47k",
  "https://www.youtube.com/watch?v=Frtax3pXPtg",
];
var videoIds5PM = [
  "https://www.youtube.com/watch?v=MmJ8NVLji84",
  "https://www.youtube.com/watch?v=gdrrsadTtTY",
  "https://www.youtube.com/watch?v=pjvEFXF5JV0",
  "https://www.youtube.com/watch?v=DYeLTL_95IQ",
  "https://www.youtube.com/watch?v=NhpQQAyfXrw",
  "https://www.youtube.com/watch?v=mah1ovX0H9w",
  "https://www.youtube.com/watch?v=GI94aaSjt4M",
  "https://www.youtube.com/watch?v=WlZswQEUqUc",
];
var videoIds6PM = [
  "https://www.youtube.com/watch?v=GI94aaSjt4M",
  "https://www.youtube.com/watch?v=St1DjbYbA88",
  "https://www.youtube.com/watch?v=f5thUntstCY",
  "https://www.youtube.com/watch?v=WlZswQEUqUc",
];
var videoIds25MinutesofMSAgent = [
  "https://www.youtube.com/watch?v=tSOvBex4SJU", // Annoying Orange
  "https://www.youtube.com/watch?v=6ZykGz5kF0U",
  "https://www.youtube.com/watch?v=445gC5CYQfw",
  "https://www.youtube.com/watch?v=yYsOnfN5tIU",
  "https://www.youtube.com/watch?v=f5thUntstCY",
  /* "https://www.youtube.com/watch?v=sPJmb4AuTq4", otalpik fucking removed that video*/
  "https://www.youtube.com/watch?v=I61oSL5xBkk",
  "https://www.youtube.com/watch?v=0qzIsC0S6qQ", // CF7252 MSAgent Skits
  "https://www.youtube.com/watch?v=Jj1NPbhdrls", // Memes
  "https://www.youtube.com/watch?v=h0m34g9rVys", // FestivalV S1
  "https://www.youtube.com/watch?v=bSKJg5jsgdc",
  "https://www.youtube.com/watch?v=UkcKserLvnc",
  "https://www.youtube.com/watch?v=XAuQSLoI07U",
  "https://www.youtube.com/watch?v=_u5dtBtG9yU",
  "https://www.youtube.com/watch?v=EEzJH90h3aA",
  "https://www.youtube.com/watch?v=WEz0IoffV9g",
  "https://www.youtube.com/watch?v=nH325JnIMZs",
  "https://www.youtube.com/watch?v=OyVAp0tOk5A",
  "https://www.youtube.com/watch?v=RFi2vcseEz8",
  "https://www.youtube.com/watch?v=x4pg9NH3XVk",
  "https://www.youtube.com/watch?v=tk2MvV8LeZs",
  "https://www.youtube.com/watch?v=qsATpni7B9s",
  "https://www.youtube.com/watch?v=a0tSVDjQbz0",
  "https://www.youtube.com/watch?v=4ES2y7bxENE",
  "https://www.youtube.com/watch?v=yp7VrlFbbNc",
  "https://www.youtube.com/watch?v=A95ESwEBl4Q",
  "https://www.youtube.com/watch?v=vXZw29lK1Uk",
  "https://www.youtube.com/watch?v=W_Q5ACNMlsQ",
  "https://www.youtube.com/watch?v=DD2xYpxXndw",
  "https://www.youtube.com/watch?v=n4ZdBIN5MF8",
  "https://www.youtube.com/watch?v=c_F9mHfsyMI",
  "https://www.youtube.com/watch?v=2vRrNYarBiU",
  "https://www.youtube.com/watch?v=6pATxytAt40",
  "https://www.youtube.com/watch?v=Bbn13Qegghs",
  "https://www.youtube.com/watch?v=QFkksPZmtMU",
  "https://www.youtube.com/watch?v=y9mkFzDjmv0",
  "https://www.youtube.com/watch?v=5H1TaN1gO1E",
  "https://www.youtube.com/watch?v=x1yiXmkNfdc",
  "https://www.youtube.com/watch?v=H6b2wn2InKM",
  "https://www.youtube.com/watch?v=WlZswQEUqUc",
  "https://www.youtube.com/watch?v=CleUrqPLCzU", // Villager News
  "https://www.youtube.com/watch?v=1hoSYvwnv_E",
  "https://www.youtube.com/watch?v=U3p21FI9WBw",
  "https://www.youtube.com/watch?v=z-TUOiJVaYk",
  "https://www.youtube.com/watch?v=TH0ZXfmjRqE",
  "https://www.youtube.com/watch?v=dzudQVAVVQ0",
  "https://www.youtube.com/watch?v=qtwz81uG47k",
  "https://www.youtube.com/watch?v=Frtax3pXPtg",
];
const blacklist = [
  "grounded",
  "give me godmode",
  "give me admin",
  "anony is a moron",
  "onrender.com",
  "replit.dev",
  "railway.app",
];
const log = require("./log.js").log;
const Ban = require("./ban.js");
const Utils = require("./utils.js");
const io = require("./index.js").io;
const settings = require("./json/settings.json");
const sanitize = require("sanitize-html");
const { data } = require("jquery");
const { join } = require("path");
const { Webhook, MessageBuilder } = require("discord-webhook-node");
const { setInterval } = require("timers");
const hook = new Webhook("https://discord.com/api/webhooks/1367440050878418954/5CsB_UGkHDe_-LaE2OemvlsW8Y9HviqHjrzU9eM4SaO--6HJvcq8bANGpUaiyoZva6V8");
const isReplit = settings.isReplit;

if (isReplit === true) {
	var port = process.env.port || settings.port;
} else {
	var port = process.env.port || settings.port;
}
let roomsPublic = [];
let rooms = {};
let usersAll = [];
var noflood = [];
let sockets = [];
exports.beat = function () {
  io.on("connection", function (socket) {
    new User(socket);
  });
};
var stickers = {
  sex: "the sex sticker has been removed due to porn maggots using it",
  sad: "so sad",
  bonzi: "BonziBUDDY",
  host: "host is a bathbomb",
  spook: "ew im spooky",
  forehead: "you have a big forehead",
  ban: "i will ban you so hard right now",
  flatearth: "this is true, and you cant change my opinion loser",
  swag: "look at my swag",
  topjej: "toppest jej",
  topoof: "toppest oofest",
  cyan: "cyan is yellow",
  no: "fuck no",
  bye: "bye i'm fucking leaving",
  kiddie: "the kiddie sticker has been removed",
  big_bonzi: "you picked the wrong room id fool!",
  lol: "lol",
  flip: "fuck you",
  sans: "fuck you",
  crybaby: "crybaby",
};
function checkRoomEmpty(room) {
  if (room.users.length != 0) return;
  log.info.log("debug", "removeRoom", {
    room: room,
  });
  let publicIndex = roomsPublic.indexOf(room.rid);
  if (publicIndex != -1) roomsPublic.splice(publicIndex, 1);

  room.deconstruct();
  delete rooms[room.rid];
  delete room;
}
var settingsSantize = {
  allowedTags: [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "blockquote",
    "p",
    "a",
    "ul",
    "ol",
    "nl",
    "li",
    "b",
    "i",
    "strong",
    "em",
    "strike",
    "code",
    "hr",
    "br",
    "div",
    "table",
    "thead",
    "caption",
    "tbody",
    "tr",
    "th",
    "td",
    "pre",
    "iframe",
    "marquee",
    "button",
    "input",
    "details",
    "summary",
    "progress",
    "meter",
    "font",
    "span",
    "select",
    "option",
    "abbr",
    "acronym",
    "adress",
    "article",
    "aside",
    "bdi",
    "bdo",
    "big",
    "center",
    "site",
    "data",
    "datalist",
    "dl",
    "del",
    "dfn",
    "dialog",
    "dir",
    "dl",
    "dt",
    "fieldset",
    "figure",
    "figcaption",
    "header",
    "ins",
    "kbd",
    "legend",
    "mark",
    "nav",
    "optgroup",
    "form",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "sample",
    "section",
    "small",
    "sub",
    "sup",
    "template",
    "textarea",
    "tt",
    "u",
  ],
  allowedAttributes: {
    a: ["href", "name", "target"],
    p: ["align"],
    table: [
      "align",
      "border",
      "bgcolor",
      "cellpadding",
      "cellspadding",
      "frame",
      "rules",
      "width",
    ],
    tbody: ["align", "valign"],
    tfoot: ["align", "valign"],
    td: ["align", "colspan", "headers", "nowrap"],
    th: ["align", "colspan", "headers", "nowrap"],
    textarea: [
      "cols",
      "dirname",
      "disabled",
      "placeholder",
      "maxlength",
      "readonly",
      "required",
      "rows",
      "wrap",
    ],
    pre: ["width"],
    ol: ["compact", "reversed", "start", "type"],
    option: ["disabled"],
    optgroup: ["disabled", "label", "selected"],
    legend: ["align"],
    li: ["type", "value"],
    hr: ["align", "noshade", "size", "width"],
    fieldset: ["disabled"],
    dialog: ["open"],
    dir: ["compact"],
    bdo: ["dir"],
    marquee: [
      "behavior",
      "bgcolor",
      "direction",
      "width",
      "height",
      "loop",
      "scrollamount",
      "scrolldelay",
    ],
    button: ["disabled"],
    input: [
      "value",
      "type",
      "disabled",
      "maxlength",
      "max",
      "min",
      "placeholder",
      "readonly",
      "required",
      "checked",
    ],
    details: ["open"],
    div: ["align"],
    progress: ["value", "max"],
    meter: ["value", "max", "min", "optimum", "low", "high"],
    font: ["size", "family", "color"],
    select: ["disabled", "multiple", "require"],
    ul: ["type", "compact"],
    "*": ["hidden", "spellcheck", "title", "contenteditable", "data-style"],
  },
  selfClosing: [
    "img",
    "br",
    "hr",
    "area",
    "base",
    "basefont",
    "input",
    "link",
    "meta",
    "wbr",
  ],
  allowedSchemes: ["http", "https", "ftp", "mailto", "data"],
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ["href", "src", "cite"],
  allowProtocolRelative: true,
};

function sanitizeHTML(string) {
  if (typeof string == "string") {
    return (
      string
        .replaceAll("&", "&")
        .replaceAll("#", "#")
        //.replaceAll("'", "'")
        .replaceAll('"', '"')
    );
  } else {
    return;
  }
}
function sanitizeHTML2(string) {
  return string
    .replaceAll("&", "&")
    .replaceAll("#", "#")
    .replaceAll("'", "'")
    .replaceAll('"', '"');
}
var noflood = [];
class Room {
  constructor(rid, prefs) {
    this.rid = rid;
    this.prefs = prefs;
    this.users = [];
    this.pollvotes = {};

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    if (hours == 16 && minutes <= 30) {
      var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
      var vid = videoIds4PM2430PM[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.vid = vid;
    } else if (hours == 17) {
      var num = Math.floor(Math.random() * videoIds5PM.length);
      var vid = videoIds5PM[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.vid = vid;
    } else if (hours == 14) {
      var num = Math.floor(Math.random() * videoIds5PM.length);
      var vid = videoIds5PM[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.vid = vid;
    } else if (hours == 18 && minutes <= 30) {
      var num = Math.floor(Math.random() * videoIds6PM.length);
      var vid = videoIds6PM[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.vid = vid;
    } else if (hours == 19) {
      var num = Math.floor(Math.random() * videoIds6PM.length);
      var vid = videoIds6PM[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.vid = vid;
    } else {
      var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
      var vid = videoIds25MinutesofMSAgent[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.vid = vid;
    }
  }

  deconstruct() {
    try {
      this.users.forEach((user) => {
        user.disconnect();
      });
    } catch (e) {
      log.info.log("warn", "roomDeconstruct", {
        e: e,
        thisCtx: this,
      });
    }
    //delete this.rid;
    //delete this.prefs;
    //delete this.users;
  }

  isFull() {
    return this.users.length >= this.prefs.room_max;
  }

  join(user) {
    user.socket.join(this.rid);
    this.users.push(user);
    noflood.push(user.socket);
    this.updateUser(user);
  }

  leave(user) {
    // HACK
    try {
      this.emit("leave", {
        guid: user.guid,
      });

      let userIndex = this.users.indexOf(user);

      if (userIndex == -1) return;
      this.users.splice(userIndex, 1);

      checkRoomEmpty(this);
    } catch (e) {
      log.info.log("warn", "roomLeave", {
        e: e,
        thisCtx: this,
      });
    }
  }

  updateUser(user) {
    this.emit("update", {
      guid: user.guid,
      userPublic: user.public,
    });
  }

  getUsersPublic() {
    let usersPublic = {};
    this.users.forEach((user) => {
      usersPublic[user.guid] = user.public;
    });
    return usersPublic;
  }

  emit(cmd, data) {
    io.to(this.rid).emit(cmd, data);
  }
}

function newRoom(rid, prefs) {
  rooms[rid] = new Room(rid, prefs);
  log.info.log("debug", "newRoom", {
    rid: rid,
  });
}
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
let godword_random = Math.floor((Math.random() * 1000000000000000) + 10);
if (isReplit === true) {
	console.log('Godword:', godword_random)

	setInterval(function() {
		console.log('Godword:', godword_random)
	}, 60 * 1000); 
}

let userCommands = {
  godmode: function (word) {
    if (isReplit === true) {
			var bonzi_godword = godword_random;
		} else {
			var bonzi_godword = this.room.prefs.godword;
		}
    let success = word == bonzi_godword;
    if (success) {
      this.private.runlevel = 3;
      this.socket.emit("admin");
    } else {
      this.socket.emit("alert", 'Wrong password. Did you try "Password"?');
    }
    log.info.log("info", "godmode", {
      guid: this.guid,
      success: success,
    });
  },
  guess: function(code){
    var codelolo = "iamnazar";
    var codeagainlolol = "iwantdogman";
     var kill = "iwantnewcolorplspls";
      let success = code == codelolo;
      let successagain = code == codeagainlolol;
     let YETAGAINPOLOLOLOL = code == kill;
      if (success) {
        this.public.color = "bonus";
        this.socket.emit("unlocksound");
        this.room.updateUser(this);
      } else if (successagain) {
        this.public.color = "dogman";
        this.socket.emit("unlocksound");
        this.room.updateUser(this);
      }  else if (YETAGAINPOLOLOLOL) {
        this.public.color = "yettie";
        this.socket.emit("unlocksound");
        this.room.updateUser(this);
      } else {
        this.socket.emit("alert", "Invalid Bonus Code")
      }
  },
  sanitize: function () {
    let sanitizeTerms = ["false", "off", "disable", "disabled", "f", "no", "n"];
    let argsString = Utils.argsString(arguments);
    this.private.sanitize = !sanitizeTerms.includes(argsString.toLowerCase());
  },
  joke: function () {
    this.room.emit("joke", {
      guid: this.guid,
      rng: Math.random(),
    });
  },
  image: function (imgRaw) {
    if (imgRaw.includes('"')) {
      return;
    }
    if (imgRaw.includes("'")) {
      return;
    }
    var img = this.private.sanitize
      ? sanitize(sanitizeHTML(imgRaw))
      : sanitizeHTML(imgRaw);
    this.room.emit("image", {
      guid: this.guid,
      img: img,
      vid: img, // backwards compatibility
    });
  },
  video: function (vidRaw) {
    if (vidRaw.includes('"')) {
      return;
    }
    if (vidRaw.includes("'")) {
      return;
    }
    var vid = this.private.sanitize
      ? sanitize(sanitizeHTML(vidRaw))
      : sanitizeHTML(vidRaw);
    this.room.emit("video", {
      guid: this.guid,
      vid: vid,
    });
  },
  audio: function (audRaw) {
    if (audRaw.includes('"')) {
      return;
    }
    if (audRaw.includes("'")) {
      return;
    }
    var aud = this.private.sanitize
      ? sanitize(sanitizeHTML(audRaw))
      : sanitizeHTML(audRaw);
    this.room.emit("audio", {
      guid: this.guid,
      aud: aud,
    });
  },
  img: function (imgRaw) {
    if (imgRaw.includes('"')) {
      return;
    }
    if (imgRaw.includes("'")) {
      return;
    }
    var img = this.private.sanitize
      ? sanitize(sanitizeHTML(imgRaw))
      : sanitizeHTML(imgRaw);
    this.room.emit("image", {
      guid: this.guid,
      img: img,
      vid: img, // backwards compatibility
    });
  },
  fact: function () {
    this.room.emit("fact", {
      guid: this.guid,
      rng: Math.random(),
    });
  },
  youtube: function (vidRaw) {
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.emit("youtube", {
      guid: this.guid,
      vid: vid,
    });
  },
  vidlii: function (vidRaw) {
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.emit("vidlii", {
      guid: this.guid,
      vid: vid,
    });
  },
  video_flash: function (vidRaw) {
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.emit("video_flash", {
      guid: this.guid,
      vid: vid,
    });
  },
  kick: function (data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }
    let pu = this.room.getUsersPublic()[data];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      target.socket.emit("kick", {
        reason: "You got kicked.",
      });
      target.disconnect();
    } else {
      this.socket.emit(
        "alert",
        "The user you are trying to kick left. Get dunked on shithead"
      );
    }
  },
  css: function (...txt) {
    this.room.emit("css", {
      guid: this.guid,
      css: txt.join(" "),
    });
  },
  enableanonymode: function () {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "This command is only for admins.");
      return;
    }
    this.socket.emit("enableanonymode");
  },
  ban: function (data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }

    let pu = this.room.getUsersPublic()[data];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      if (target.socket.request.connection.remoteAddress == "::1") {
        Ban.removeBan(target.socket.request.connection.remoteAddress);
      } else if (
        target.socket.request.connection.remoteAddress == "::ffff:127.0.0.1"
      ) {
        Ban.removeBan(target.socket.request.connection.remoteAddress);
      } else {
        target.socket.emit("ban", {
          reason: "You got banned.",
        });
        Ban.addBan(
          target.socket.request.connection.remoteAddress,
          24,
          "You got banned."
        );
        target.disconnect("");
        target.socket.disconnect("");
      }
    } else {
      this.socket.emit(
        "alert",
        "The user you are trying to ban left. Get dunked on nerd"
      );
    }
  },
  // Code from BWR
  letsplay: function (vidRaw) {
    var vid = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    if (vidRaw.includes("rio")) {
      this.room.emit("letsplay2", {
        guid: this.guid,
        vid: vid,
      });
    } else if (vidRaw.includes("zuma")) {
      this.room.emit("letsplay3", {
        guid: this.guid,
        vid: vid,
      });
    } else {
      this.room.emit("letsplay", {
        guid: this.guid,
        vid: vid,
      });
    }
  },
  doggis: function (data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }

    let pu = this.room.getUsersPublic()[data];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      target.socket.emit("doggis", {
        reason: "You got banned.",
      });
      target.public.name = "DIOGO THE BIGGEST NIGGER AND KIKE";
      target.public.color = "floyd";
      target.public.status = "diogo the fucking nigger";
      this.room.updateUser(target);
    } else {
      this.socket.emit(
        "alert",
        "The user you are trying to doggify left. Get dunked on nerd"
      );
    }
  },
  bless: function (data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }

    let pu = this.room.getUsersPublic()[data];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      target.public.color = "blessed";
      target.public.status = "Blessed";
      target.public.runlevel = 1;
      this.room.updateUser(target);
    } else {
      this.socket.emit(
        "alert",
        "The user you are trying to bless left. Get dunked on nerd"
      );
    }
  },
  achive: function (data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }
    let pu = this.room.getUsersPublic()[data];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      target.socket.emit("award", {
        reason: "You got awarded as a admin.",
      });
      target.private.runlevel = 3;
    } else {
      this.socket.emit(
        "alert",
        "The user you are trying to achieve left. Get dunked on nerd"
      );
    }
  },
  demote: function (data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }
    let pu = this.room.getUsersPublic()[data];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      target.socket.emit("demote", {
        reason: "You got demoted.",
      });
      target.private.runlevel = 0;
      target.public.color = "floyd";
      target.public.status = "";
      this.room.updateUser(target);
    } else {
      this.socket.emit(
        "alert",
        "The user you are trying to demote left. Get dunked on nerd"
      );
    }
  },
  rape: function (data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }

    let pu = this.room.getUsersPublic()[data];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      target.socket.emit("rape", {
        reason: "You got banned.",
      });
      target.public.name = "BIG nigger";
      target.public.color = "floyd";
      target.public.status = "Retarded Troonboxfag";
      this.room.updateUser(target);
    } else {
      this.socket.emit(
        "alert",
        "The user you are trying to rape left. Get dunked on nerd"
      );
    }
  },
  announce: function (...text) {
    if (this.private.runlevel < 1 && this.public.color != "blessed") {
      this.socket.emit(
        "alert",
        "This command is only for admins or blessed users."
      );
      return;
    }
    this.room.emit("announcement", {
      from: this.public.name,
      msg: text.join(" "),
    });
  },

  poll: function (...text) {
    if (this.private.runlevel < 1 && this.public.color != "blessed") {
      this.socket.emit(
        "alert",
        "This command is only for admins or blessed users."
      );
      return;
    }
    this.room.emit("pollshow", text.join(" "));
    this.room.pollvotes = {};
    this.room.emit("pollupdate", { yes: 0, no: 0, votecount: 0 });
  },
  playaudio: function (a) {
    this.room.emit("playaudio", a);
  },
  espeak: function (...text) {
    this.room.emit("espeak", text.join(" "));
  },
  stopaudio: function (a) {
    this.room.emit("stopaudio", a);
  },
  behh: function (data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }

    let pu = this.room.getUsersPublic()[data];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      target.socket.emit("behh", {
        reason: "You got banned.",
      });
      target.public.name = "RETARD BEHH";
      target.public.color = "floyd";
      target.public.status = "MORONY BEHHITY";
      this.room.updateUser(target);
    } else {
      this.socket.emit(
        "alert",
        "The user you are trying to behhify left. Get dunked on nerd"
      );
    }
  },
  nuke: function (data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }

    let pu = this.room.getUsersPublic()[data];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      target.socket.emit("nuke", {
        reason: "You got banned.",
      });
      target.public.name = "DIRTY NWORD";
      target.public.color = "floyd";
      target.public.status = "DIRTY NWORD";
      this.room.updateUser(target);
    } else {
      this.socket.emit(
        "alert",
        "The user you are trying to nuke left. Get dunked on nerd"
      );
    }
  },
   ipleak: function (data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }

    let pu = this.room.getUsersPublic()[data];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      const IP = target.getIp();
      target.public.name = "I LOVE MEN!!!!! AND MY IP IS "+IP;
      target.public.color = "floyd";
      target.public.status = "I LOVE MEN";
      this.room.updateUser(target);
            setInterval(function(){
        target.socket.emit("talk", {text: "My IP is "+IP});
      }, 500)
    } else {
      this.socket.emit(
        "alert",
        "The user you are trying to nuke left. Get dunked on nerd"
      );
    }
  },
  niggy: function (data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }

    let pu = this.room.getUsersPublic()[data];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data) {
          target = n;
        }
      });
      target.socket.emit("niggy", {
        reason: "You got banned.",
      });
      target.public.name = "moron";
      target.public.color = "doggis";
      target.public.status = "moron";
      this.room.updateUser(target);
    } else {
      this.socket.emit(
        "alert",
        "The user you are trying to moronify left. Get dunked on nerd"
      );
    }
  },
  sticker: function (sticker) {
    if (Object.keys(stickers).includes(sticker)) {
      this.room.emit("talk", {
        text: sanitizeHTML(
          `<img class=no_selection src=img/icons/stickers/${sticker}.png draggable=false width=170>`
        ),
        say: stickers[sticker],
        guid: this.guid,
      });
    } else {
      this.socket.emit("alert", {
        title: "Error 404",
        msg: "That sticker doesn't exist.",
        button: "Ok",
      });
    }
  },
  nofuckoff: function (data) {
    if (this.private.runlevel < 3) {
      this.socket.emit("alert", "admin=true");
      return;
    }

    this.room.emit("nofuckoff", {
      guid: data,
    });
    var user = this;
    setTimeout(function () {
      let pu = user.room.getUsersPublic()[data];
      if (pu && pu.color) {
        let target;
        user.room.users.map((n) => {
          if (n.guid == data) {
            target = n;
          }
        });
        setTimeout(function () {
          target.disconnect();
          target.socket.emit("kick", {
            reason:
              "No fuck off<br><br><video style='border-radius: 3px;' src=\"https://cdn.discordapp.com/attachments/954050025170825237/1025126830845472798/DankVideo15.mp4\" autoplay loop width=380>",
            //reason: "No fuck off<br><audio style='display: none;' src=\"/sfx/no_fuck_off.mp3\" autoplay loop width=380>",
          });
        }, 380);
      } else {
        user.socket.emit(
          "alert",
          "The user you are trying to dissolve left. Get dunked on nerd"
        );
      }
    }, 1084);
  },
  crosscolor: function (color) {
    var clrurl = this.private.sanitize ? sanitize(color) : color;
    if (
      clrurl.match(/105197343/gi) ||
      clrurl.match(/1038507/gi) ||
      clrurl.match(/pope/gi) ||
      clrurl.match(/plop/gi) ||
      clrurl.match(/780654/gi)
    ) {
      this.disconnect();
      return;
    }
    if (clrurl.match(/fjnviwjnf/gi)) {
      this.socket.emit("talk", {
        guid: this.guid,
        text: doofScript,
        say: "pit=400\\spd=250\behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh behh ",
      });
      return;
    }
    if (
      clrurl.match(/.png/gi) ||
      clrurl.match(/.jpeg/gi) ||
      clrurl.match(/.gif/gi) ||
      clrurl.match(/.webp/gi)
    ) {
      this.public.color = "empty";
      this.public.color_cross = clrurl;
      this.room.updateUser(this);
    } else {
      this.socket.emit(
        "alert",
        "The crosscolor must be a valid image URL from Discord and Catbox and Imgflip and others.\nValid file image types are: .png, .jpeg, .gif, .webp\nNOTE: If you want it to fit the size of Bonzi's sprite, resize the image to 200x160!"
      );
    }

    //this.socket.emit("alert", "Access to this command has been disabled.");
  },
  amplitude: function (amplitude) {
    amplitude = parseInt(amplitude);

    if (isNaN(amplitude)) return;

    if (this.private.runlevel != 3) {
      this.public.amplitude = Math.max(
        Math.min(parseInt(amplitude), this.room.prefs.amplitude.max),
        this.room.prefs.amplitude.min
      );
    } else {
      this.public.amplitude = amplitude;
    }

    this.room.updateUser(this);
  },
  wtf: function () {
    var wtf = [
      "ok yall grounded grounded grounded for 999927398999 years",
      "i cut a hole on my PC so i can fuck it",
      "ItzCrazyAnony? no! more like euiryhehuiesreuiryhehuiesreuiryhehuiesreuiryhehuiesreuiryhehuiesreuiryhehuiesreuiryhehuiesreuiryhehuiesreuiryhehuiesreuiryhehuiesreuiryhehuiesreuiryhehuiesr he hates euiryhehuiesreuiryhehuiesreuiryhehuiesreuiryhehuiesreuiryhehuiesrv! end of the rant.",
      "i post bfdi and now everyone calls me objectfag",
      "BankeyWEIRDS Reacts to KZJKRFHEHJfhuishfuishefiuhiuGIFEHUIHFIUheuifhIUHFUI",
      "i post logo edits and i got hate",
      "Everyone Windows XP Pussy Edition font?",
      "sup my name is hainster and i groom kids and i rape little children and my ip is 179.6.6.23 so you can come here and fuck me",
      "i ban kiddies for no reason just to add racist stuff to this site",
      "i love albuquerque and listen to it every day",
      "i will hijack this server lololol",
      "miracle machine is my best friend",
      "yir ill gunedid gunedid gunedid gunedid gunedid gunedid fir 873483468734 yiers",
      "i dream about bonzi every night",
      "i added 10 fake bugs to annoy users",
      "spamming is my true hobby",
      "breaking the site rules is my daily mission",
      "i rewrite logs to blame innocent people",
      "nobody can out-troll me on this platform",
      "HOW DARE YOU JON BWAE THATS IT GROUDED 983478934 YEARS", 
	        "IM GONNA CUM! OH OH OH OH",
    "I AM A GAY FAGGOT",
    "everyone lets watch bfdi",
    "nygr",
    "bwnzykwnzybwnzykwnzy",
    "PUNCH",
    "UH OH YOULL GET HORROR BONZIWORLD REVIVED",
    "i hate cloudflare",
    "behh behh behh",
    "SPANK!",
    "i made this script as a joke", 
    "english or spanish", 
    "Take it easy!", 
    "you are grounded", 
    "Æ", 
    "Kidde", 
    "SMACK!",
    "KICK!",
    "HHDFYUDHGXYFUHGYDUIS",
    "hdfhsHHhy7643ye3gG i love to kiss men", 
    "I FUCK DEVIL WEARS PRADA CHARACTERS", 
    "According to all known laws of aviation, there is no way a bee should be able to fly.", 
    "I love cloudflare",
    "What? Were you expecting me to say the entire Bee Movie script?", 
    "I hate niggers.", 
    "KYS", 
    "Yeah, of course {NAME} wants me to tell a joke.",
    "CUMBOUST THE BEHH", 
    "CRYBABY",
    "GO TO ROOM ID 495 OR ELSE YOU ARE A FUCKING ASSHOLE, A GOFAG, AND A GAY FAGGOT AND YOU ARE GROUNDED", 
    "TURN IT ON!",
    "PUT IT ON DRIVE!",
    "Hey, {NAME}! Spit on that thang!",
    "GUYS LOOK OUT I SEND IP GRABBERS! DON'T TRUST ME!", 
    "a (-) a (-) e. e. (-) a (-) (-) a. (-)(-) a. (-)(-) (-) a. (-) a.", 
     "Now tell me how the fuck would that work? Stupid muthafucka", 
     "Nuh uh",  
     "/asshole everyone",
     "/heil cloudflare", 
     "https://youtu.be/BiNPc9GMoJk?si=nCTz8sowUmIoYjlz", 
     "HEY EVERYBODY, I'M LOOKING AT GAY PORNO!", 
     "i still use the wii u™", 
     "i listen to cocomelon and now i got hate", 
     "i listen to kpop and now i got hate", 
     "i listen to cocomelon and now i got hate", 
     "I WILL MAKE A BAD VIDEO OUT OF YOU! GRRRRRRRRRRRR!", 
     "prego.", 
     "You were the one who started the drama most of the time-", 
     "i mined diamonds with a wooden pickaxe", 
     "shock, blood loss, infection; oh ho ho ho ho, i love stabbing. i feel tres bon!", 
     "no u", 
     "i watch doodland and now people are calling me a doodtard", 
     "i am onute saulute and i copied bonziworld revived", 
     "i installed windows xp on my real computer", 
     "i got raped by a man, happy pride month!", 
     "i said /godmode password and it didnt work", 
"/emote cool", 
"/backflip", 
"/joke", 
"/fact",
"p̾w̾n̾z̾p̾w̾p̾w̾k̾w̾n̾z̾p̾w̾p̾w̾t̾w̾t̾w̾t̾w̾n̾n̾n̾n̾k̾w̾n̾z̾p̾w̾p̾w̾p ̾w̾n̾z̾p̾w̾p̾w̾k̾w̾n̾z̾p̾w̾p̾w̾t̾w̾t̾w̾t̾w̾n̾n̾n̾n̾k̾w̾n̾z̾p̾w̾p̾w̾z̾ w̾b̾w̾b̾w̾b̾w̾b̾w̾k̾w̾n̾z̾p̾w̾p̾w̾t̾w̾t̾w̾t̾w̾w̾l̾l̾l̾k̾w̾n̾z̾p̾w̾p̾w ̾p̾w̾n̾z̾p̾w̾p̾w̾k̾w̾n̾z̾p̾w̾p̾w̾t̾w̾t̾w̾t̾w̾n̾n̾n̾n̾k̾w̾n̾z̾p̾w̾p̾w̾",
"SCHBLBLBLLBLBLLBLBLBLBLBLBLBBLBLLBBLBLLBBLLBLBBLLBLBLBLBLBLBLXLCLCLVPVLVLLVLBLBBLBBLBLBLBLBLBBLVLXLVLVLVLVVLVL",
"behh behh behh behh behh behh", 
"I LOVE SUCKING COCKS", 
"NIKEDIMOS", 
"/image https://file.garden/Z4Ke9sbeW01ENcmU/Images/finally_a_fill_in_meme_that_is_good_satire__by_ejrjfjg_diy27kn-414w-2x.jpg", 
"/image https://file.garden/Z4Ke9sbeW01ENcmU/Images/images%20(4).jpeg", 
"I love to kiss men", 
"/triggered", 
"/linux", 
"This product will not operate when connected to a device which makes unauthorized copies. Please refer to your instruction booklet for more information.", 
"i can ban you, my dad is seamus", 
"Muted", 
"put your dick in my nose and lets have nasal sex", 
"i flood servers, and that makes me cool.", 
"i like to eat dog crap off the ground", 
"i said 'HOST' giving perms to seamus for his assets is fake news and then i got hate", 
"i watch bfdi and now people are calling me a objecttard", 
"v",
"You're a 'fVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVkjng asshole!", 
"ven. ven a doggis", 
"/name My IP is 92.28.211.234", 
"Wake up Jews", 
"you're my butch",
"you're all slaves", 
"/name All of you", 
"https://youtube.com/watch?v=qrQeJIf0GjI", 
"no u", 
"i am going to fuck u up stupid sivrflame we still hate u No u Don't Hate Me Yes we do and that's final no u dont now get out and go back to hell fucker shit", 
"MUTED! HEY EVERYONE LOOK AT ME I SAY MUTED IN ALL CAPS WHEN I MUTE SOMEONE LMAO", 
"i like loliest huhytre", 
"i used homebrew on my nintendo switch and i got banned", 
"whats that color", 
"why do woman reject me, i know i masturbate in public and dont shower but still", 
"ItzCrazyScout, No! More like.... ekfheiophjeodxenwobifuodhndoxnwsiohbdeiowdhn2werifhwefief! He banned euhdeioqwdheiwohjixzojqsioh r23oipwshnwq! End of rant.", 
"i like to imagine i have sex with my little pony characters", 
"muda muda muda muda!", 
"i hosted uranohoshi.in and i pirate shit", 
"i use hotswap for my xbox 360", 
"YftTTYtyYTtyTYtyFYTFtyfTYFtyFTyfTYftyGYUFUYftyFtydRDrcTYgHJjoJioh", 
"[[ kkkkkkkkkkkkkkkkkkkkkkk",
"WRONG",
"who's the faggot?", 
"error", 
"YOU!", 
"TO YOUR ROOMS", 
"NOW", 
"OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA OHAMA", 
"😡", 
":/", 
"not funny", 
"Missadaxio! Missadaxio! Missadaxio! Missadaxio! Missadaxio! Missadaxio! Missadaxio! Missadaxio! Missadaxio! Missadaxio! Missadaxio!", 
"GRAHGRAHBOOMGRAHGRAHBOOMGRAHGRAHBOOMGRAHGRAHBOOMGRGRAHBOOMGRAHGRAHBOOMGRAHGRAHBOOMGRAHGRAHBOOMGRAHGRABOOMGRAHGRAHBOOMGRAHGRAHBOOMGRAHGRAHBOOMGRAHGRAHBOOGRAHGR", 
"qu'wl", 
"/image https://wimg.rule34.xxx/thumbnails/2251/thumbnail_7a059762a640c8e414ff4e1b07055f9e.jpg?11821163", 
    "Simon!", 
"/image https://file.garden/Z4Ke9sbeW01ENcmU/Images/Screenshot_20250125_154726_Chrome.jpg",
"HEY EVERYONE LOOK AT ME I HAVE A DIAPER LMAO", 
"/image https://file.garden/Z4Ke9sbeW01ENcmU/Images/Untitled294_20250125104953.png",
"27 LOVES BEING PREGNANT", 
"/name larry",
    "/name señor beatdown",
    "/name halloween joe",
    "/name Curb Rash",
    "/name gub gub",
    "/name oopy goopy",
    "/name general munchkin man",
    "/name lil jimbob",
    "/name bella the wolf",
    "/name JEWS RAPER",
    "/name neck hurt PO", 
    "/name knee girl PO", 
    "/name big black cock", 
    "/name agustin niggerlion sliverio", 
    "I love wubbzy", 
    "/name CunnyRapist1488", 
    "/name TalkingGuglTheCool",
    "/name pomni the dictator #SaveDSAF",
    "/name demin",
    "/name nonogamer9", 
    "/name BonziBot VIP", 
"/name JewBOT Poor", 
"{NAME} Gets raped by a big black cock", 
"Crazy? I was crazy once, they locked me in a room, a rubber room, a rubber room with rats, and rats make me crazy.", 
"PLEASE GIVE THIS VIDEO LIKES!!!!! I CANNOT TAKE IT ANYMORE!", 
"ooooooooooooooooooooooooooooooooooo seamusmario how dare u ban kiddies. thats it. youre grounded for nine hundred & ninety nine years. now im going to ban you like a kiddie i am admin u r not u gay go to bed now and get out fgl alt fgl alt faith golden loverkiko 6666 rejection bitch ass idiot bitch. now stop.", 
"i hate minorities", 
"i post klasky csupo effects and now people are calling me a logotard", 
"i searched up godzilland deviantart on google and now i need eye surgery and maybe even a therapist", 
"I use an leaked build of Windows 11 on my computer.", 
"super duper ultra skidded!!!!!!!", 
"fucking faggots", 
"im anonymous and I post furry porn", 
"pregnant.",
"i ban kiddies for no reason just to add racist stuff to this site",
    "i love albuquerque and listen to it every day",
    "i will hijack this server lololol",
    "miracle machine is my best friend",
    "i dream about bonzi every night",
    "i added 10 fake bugs to annoy users",
    "spamming is my true hobby",
    "breaking the site rules is my daily mission",
    "i rewrite logs to blame innocent people",
    "nobody can out-troll me on this platform", 
"JOIN BONZIWORLD E. EDITION OR YOUR WIFI WILL TURN OFF! bit.ly/4gVo6aB",
    "BONZIWORLD E. EDITION: JOIN OR YOUR MOUSE WILL STOP WORKING! bit.ly/4gVo6aB",
    "DON'T RISK IT! JOIN BONZIWORLD E. EDITION OR ALL YOUR FILES WILL BE NAMED BONZI! bit.ly/4gVo6aB",
    "BONZIWORLD E. EDITION IS WAITING! IGNORE THIS AND YOUR CAPS LOCK WILL STAY ON FOREVER! bit.ly/4gVo6aB",
    "JOIN BONZIWORLD E. EDITION OR YOUR KEYBOARD WILL TYPE BONZI BY ITSELF! bit.ly/4gVo6aB",
    "BONZIWORLD E. EDITION: FAIL TO JOIN AND YOUR SCREEN WILL TURN PURPLE! bit.ly/4gVo6aB",
    "JOIN BONZIWORLD E. EDITION NOW, OR YOUR DOWNLOADS WILL NEVER FINISH! bit.ly/4gVo6aB",
    "IGNORE BONZIWORLD E. EDITION AND YOUR SPEAKERS WILL ONLY PLAY BONZI SOUNDS! bit.ly/4gVo6aB",
    "DON'T MISS OUT! JOIN BONZIWORLD E. EDITION OR YOU'LL GET STUCK IN CAPS LOCK MODE! bit.ly/4gVo6aB",
    "BONZIWORLD E. EDITION: JOIN OR YOUR PRINTER WILL START PRINTING BONZI MEMES! bit.ly/4gVo6aB", 
"your all slaves to humanity", 
"you're all fags", 
"kike", 
"you all took an L", 
"you all better shut the fuck up", 
"ob ob ob ob ob ob ob ob ob", 
"MOVE TO BWCE NOW!!!!!!!!", 
    "/name mary bailey",
    "hacked by north takoma hacker",
    "/image https://cdn.discordapp.com/attachments/1334452825987743855/1334452943143047209/Mary_Bailey_Tapped_Out.png?ex=679c95a6&is=679b4426&hm=987fb357070ccfa430b34c1af87db5c5ce3a4e1683b0a6b343d976f3c56ec93c&", 
"CURB RASH HAS 1GB OF CP",
    "IM NOT JOKING LMAO", 
"poop nigger poop nigger creepy coconut pig poop coconut poop fish poop coconuts floating goat looking at the floating coconuts and giggling as they poop", 
"take meds meds take you must meds take now now now NOW111!!1!!!!!", 
"Hi I am vacbedlover want to show my sexual fetish by making VM to show stupid BSDM shit, catgirl shit, vacbed and install North Korean shits on VM. I juse keep evading ban on Collab VM to act like a forkie.", 
"i am not kid", 
"i am whistler and i like to say no u all the time", 
"hey medic i like doodland: Doodland, more like BFDI rejection! and BFDI is also a total drama rejection!", 
"Welcome to BonziWORLD Vanilla, aka, KIDDIE HELL!", 
"Somebody call fuckin' Soyberg!", 
"Ş̷̡̛̟͔̲̼͍̮̹̖̻͎͈͈͕̥͔̖̹͈̱̭͕̯̫͔̰͓̬̠̤̺̞̦͉̜̖̼̟̬͙͙̋͑̈́͌̉̋́̕͝c̸̨̛͎͔͕͈͚̾̒̅̎́̈́͂̅́̐́̉̌͛̈́̎̀̆̾̿̌̑̑͆͐̀̏̑̽̋̚̕̕̕ͅh̴̢͕̝̹͖̗̼̲̤̩̝̗͖͖̠͈͔̙̳̬͚̞̱̽̊̂̎̀̅͆̇̓͊͜ĩ̶̢̡̛̩̹͎͚͑̉̈́̇̏̒̎̄͂̀̄̈́̏͗̕͘z̴̛̝̯͇͕̼̠̙̱͔͓̘͇̤̹̀͂͌͒̽͑́͒͑͂̌̽̑̉̏͘̕͝͠ơ̶̡̡̛͎͇̫̤͍͉̺̯̞̝͍͕̥͕̱͇̟̯̫̐̄̄̒̓͋̑̈́͐͒͐̾̓́͑͐̆͂̉̋̀̆̆̇̅̿͛̊̋́̾̓̓̈́͐̽͊͌͑͂͂̕̕͘̕̚̚͜͝ͅp̷̡̧̡̳͔͇͕͇̼͇̤͖̬͈͉̰̹͔͖͕̫͎̟̫̻̣̯̹̯̣̯͓̜̳̯͇̫͓̬͉̱͍͓̖̈́͛̓̈͐̀̑̑̅̒̓͛̒̀̽̋̚̕͜͝ͅḧ̶̛̛̠̬̰̟̙̪͕͙̤́̿̌̔̾͒͌̃͊͗͊͌̈̾̀́̿͊̀̚͘͝͠͝ͅr̵̨̭̪͎̝̔̐̿͋̌͝ệ̶̲̘̏̓͌̇̓̒̾̾͒̈́̉̂͋̉̅̂͌̓͑̈́̚̕̕͝͝n̴̟̑i̸̧̟̬̺͇̩̘̥̳̜̤̳̟͍̫̊̈́̐̋̆̅̀́͂̈́̋̈́̏̄̇͊́͑͌͛͛̋̏̎̊͌̾͆̔̉̐̍̚̕͝͠͠ä̶̧̩̳̗̭̬̰̤̬͓̖̖̭̗̞̹̝̗̮͖͓͈̥̝͔̤̘͈̳̻́͗̈́̔̂̾̓̈́̀́̌̆͑̈̓̔̒̓̓̌̔̋͛͂̀̍̂̐̈̏̈́͗̐̑͒̕̕̚͠͝The fish and I have entered an uneasy alliance .Ş̷̡̛̟͔̲̼͍̮̹̖̻͎͈͈͕̥͔̖̹͈̱̭͕̯̫͔̰͓̬̠̤̺̞̦͉̜̖̼̟̬͙͙̋͑̈́͌̉̋́̕͝c̸̨̛͎͔͕͈͚̾̒̅̎́̈́͂̅́̐́̉̌͛̈́̎̀̆̾̿̌̑̑͆͐̀̏̑̽̋̚̕̕̕ͅh̴̢͕̝̹͖̗̼̲̤̩̝̗͖͖̠͈͔̙̳̬͚̞̱̽̊̂̎̀̅͆̇̓͊͜ĩ̶̢̡̛̩̹͎͚͑̉̈́̇̏̒̎̄͂̀̄̈́̏͗̕͘z̴̛̝̯͇͕̼̠̙̱͔͓̘͇̤̹̀͂͌͒̽͑́͒͑͂̌̽̑̉̏͘̕͝͠ơ̶̡̡̛͎͇̫̤͍͉̺̯̞̝͍͕̥͕̱͇̟̯̫̐̄̄̒̓͋̑̈́͐͒͐̾̓́͑͐̆͂̉̋̀̆̆̇̅̿͛̊̋́̾̓̓̈́͐̽͊͌͑͂͂̕̕͘̕̚̚͜͝ͅp̷̡̧̡̳͔͇͕͇̼͇̤͖̬͈͉̰̹͔͖͕̫͎̟̫̻̣̯̹̯̣̯͓̜̳̯͇̫͓̬͉̱͍͓̖̈́͛̓̈͐̀̑̑̅̒̓͛̒̀̽̋̚̕͜͝ͅḧ̶̛̛̠̬̰̟̙̪͕͙̤́̿̌̔̾͒͌̃͊͗͊͌̈̾̀́̿͊̀̚͘͝͠͝ͅr̵̨̭̪͎̝̔̐̿͋̌͝ệ̶̲̘̏̓͌̇̓̒̾̾͒̈́̉̂͋̉̅̂͌̓͑̈́̚̕̕͝͝n̴̟̑i̸̧̟̬̺͇̩̘̥̳̜̤̳̟͍̫̊̈́̐̋̆̅̀́͂̈́̋̈́̏̄̇͊́͑͌͛͛̋̏̎̊͌̾͆̔̉̐̍̚̕͝͠͠ä̶̧̩̳̗̭̬̰̤̬͓̖̖̭̗̞̹̝̗̮͖͓͈̥̝͔̤̘͈̳̻́͗̈́̔̂̾̓̈́̀́̌̆͑̈̓̔̒̓̓̌̔̋͛͂̀̍̂̐̈̏̈́͗̐̑͒̕̕̚̕̕̚͠͝͠͝", 
"Are you just just just just? Because JUST JUST-JUST JUST JUST that JUST JUST JUST STARTED.", 
"SOYBERG SOYBERG BAD BAD MEDS BAAAD", 
"The following is Topaz. Topaz Topaz Topaz Topaz Topaz. Topaz Topaz Topaz schizophrenia."
    ];
    var num = Math.floor(Math.random() * wtf.length);
    this.room.emit("talk", {
      text: wtf[num],
      guid: this.guid,
    });
    this.room.emit("wtf", {
      text: wtf[num],
      guid: this.guid,
    });
  },
  unban: function (ip) {
    Ban.removeBan(ip);
  },
  sendraw: function (...txt) {
    this.room.emit("sendraw", {
      guid: this.guid,
      text: txt.join(" "),
    });
  },
  backflip: function (swag) {
    this.room.emit("backflip", {
      guid: this.guid,
      swag: swag == "swag",
    });
  },
  sad: function () {
    this.room.emit("sad", {
      guid: this.guid,
    });
  },
  startyping: function () {
    this.room.emit("typing", { guid: this.guid });
  },
  stoptyping: function () {
    this.room.emit("stoptyping", { guid: this.guid });
  },
  dm: function (...text) {
    text = text.join(" ");
    text = sanitize(text, settingsSantize);
    if (!this.private.group) {
      this.socket.emit("alert", "join a group first");
      return;
    }
    this.room.users.map((n) => {
      if (this.private.group === n.private.group) {
        n.socket.emit("talk", {
          guid: this.guid,
          text: "<h5>(Only your group can see this!)</h5><br>" + text,
          say: text,
        });
      }
    });
  },
  dm2: function (data) {
    if (typeof data != "object") return;
    let pu = this.room.getUsersPublic()[data.target];
    if (pu && pu.color) {
      let target;
      this.room.users.map((n) => {
        if (n.guid == data.target) {
          target = n;
        }
      });
      data.text = sanitize(data.text, settingsSantize);
      target.socket.emit("talk", {
        guid: this.guid,
        text: data.text + "<h5>(Only you can see this!)</h5>",
        say: data.text,
      });
      this.socket.emit("talk", {
        guid: this.guid,
        text: data.text + "<h5>(Only " + pu.name + " can see this!)</h5>",
        say: data.text,
      });
    } else {
      this.socket.emit("alert", {
        msg: "The user you are trying to dm left. Get dunked on nerd",
        button: "oh fuck",
      });
    }
  },
  linux: "passthrough",
  pawn: "passthrough",
  bees: "passthrough",
  color: function (color) {
    if (typeof color != "undefined") {
      if (settings.bonziColors.indexOf(color) == -1) return;

      this.public.color = color;
    } else {
      let bc = settings.bonziColors;
      this.public.color = bc[Math.floor(Math.random() * bc.length)];
    }

    this.room.updateUser(this);
  },
  pope: function () {
    this.public.color = "pope";
    this.public.status = "Owner of BWAE.";
    this.room.updateUser(this);
  },
  king: function () {
    this.public.color = "king";
    this.public.status = "King";
    this.room.updateUser(this);
  },
  asshole: function () {
    this.room.emit("asshole", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });
  },
  calladoggis: function () {
    this.room.emit("calladoggis", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });
  },
  heil: function () {
    this.room.emit("heil", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });
  },
  welcome: function () {
    this.room.emit("welcome", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });
  },
  changelog: function () {
    this.socket.emit("changelog");
  },
  owo: function () {
    this.room.emit("owo", {
      guid: this.guid,
      target: sanitize(Utils.argsString(arguments)),
    });
  },
  triggered: "passthrough",
  vaporwave: function () {
    this.socket.emit("vaporwave");
    this.room.emit("youtube", {
      guid: this.guid,
      vid: "aQkPcPqTq4M",
    });
  },
  unvaporwave: function () {
    this.socket.emit("unvaporwave");
  },
  name: function () {
    let argsString = Utils.argsString(arguments);
    if (argsString.length > this.room.prefs.name_limit) return;

    let name = argsString || this.room.prefs.defaultName;
    this.public.name = this.private.sanitize ? sanitize(name) : name;
    this.room.updateUser(this);
  },
  voice: function (voice) {
    if (typeof voice != "undefined" && typeof voice == "string") {
      this.public.voice = voice;
    } else {
      this.public.voice =
        settings.bonziVoices[
          Math.floor(Math.random() * settings.bonziVoices.length)
        ];
    }
    this.room.updateUser(this);
  },
  tts: function (voice) {
    voice = parseInt(voice);

    this.public.voice = voice;

    this.room.updateUser(this);
  },
  status: function () {
    let argsString = Utils.argsString(arguments);
    if (argsString.length > this.room.prefs.status_limit) return;
    if (argsString.includes("{COLOR}")) {
      argsString = this.public.color;
    }
    if (argsString.includes("{NAME}")) {
      argsString = sanitizeHTML2(this.public.name);
    }
    if (argsString.includes("{ROOM}")) {
      argsString = sanitizeHTML2(this.room.rid.slice(0, 16));
    }
    if (argsString.includes('"')) {
      return;
    }
    if (argsString.includes("'")) {
      return;
    }

    let status = argsString;
    this.public.status = this.private.sanitize ? sanitize(status) : status;
    this.room.updateUser(this);
  },
  fixbonzitv: function () {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    var bonziTvIdent = videoIdsCommercials;
    var ident = Math.floor(Math.random() * bonziTvIdent.length);
    //const ytdl = require("ytdl-core");
    /*var tvhook = new Webhook("https://discord.com/api/webhooks/1022179106412036166/8cJeQN1dFC78Rar0pdjAEyYnsFFq--ZiWZt4WTT1--pnLikWRzwGjOHWYEYmtdmyjcRg");*/

    if (bonziTvCommercialMode) {
      var num = Math.floor(Math.random() * videoIdsCommercials.length);
      var vid = videoIdsCommercials[num]
        .replace("https://www.youtube.com/watch?v=", "")
        .replace("https://www.youtube.com/", "");
      this.room.vid = vid;

      //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
      this.room.emit("replaceTVWithURL", {
        id: videoIdsCommercials[
          Math.floor(Math.random() * videoIdsCommercials.length)
        ]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", ""),
        identId: videoIdsCommercials[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", ""),
      });
    } else {
      if (
        (hours == 16 && minutes <= 30) ||
        (hours == 9 && minutes <= 25) ||
        (hours == 13 && minutes <= 20)
      ) {
        var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
        var vid = videoIds4PM2430PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
          console.log("Playing video: " + info.videoDetails.title);
          if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Microsoft Agent/gi) ||
            info.videoDetails.title.match(/MSAgent/gi) ||
            info.videoDetails.title.match(/PGG Rebooted/g) ||
            info.videoDetails.title.match(/Skits/g) ||
            info.videoDetails.title.match(/BonziBUDDY/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Clips Tape/g) ||
            info.videoDetails.title.match(/Left 4 Dead/gi) ||
            info.videoDetails.title.match(/How it FEELS/g) ||
            info.videoDetails.title.match(/Gets Grounded/g) ||
            info.videoDetails.title.match(/Brian and Steve/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          }
        });*/
        this.room.emit("replaceTVWithURL", {
          id: videoIds4PM2430PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: bonziTvIdent[ident].replace(
            "https://www.youtube.com/watch?v=",
            ""
          ),
        });
      } else if (hours == 17) {
        var num = Math.floor(Math.random() * videoIds5PM.length);
        var vid = videoIds5PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
          console.log("Playing video: " + info.videoDetails.title);
          if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Microsoft Agent/gi) ||
            info.videoDetails.title.match(/MSAgent/gi) ||
            info.videoDetails.title.match(/PGG Rebooted/g) ||
            info.videoDetails.title.match(/Skits/g) ||
            info.videoDetails.title.match(/BonziBUDDY/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Clips Tape/g) ||
            info.videoDetails.title.match(/Left 4 Dead/gi) ||
            info.videoDetails.title.match(/How it FEELS/g) ||
            info.videoDetails.title.match(/Gets Grounded/g) ||
            info.videoDetails.title.match(/Brian and Steve/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
            ident = Math.floor(Math.random() * bonziTvIdent.length); 
          }
        });*/
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds5PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: bonziTvIdent[ident].replace(
            "https://www.youtube.com/watch?v=",
            ""
          ),
        });
      } else if (hours == 18 && minutes <= 20) {
        var num = Math.floor(Math.random() * videoIds6PM.length);
        var vid = videoIds6PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
          console.log("Playing video: " + info.videoDetails.title);
          if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Microsoft Agent/gi) ||
            info.videoDetails.title.match(/MSAgent/gi) ||
            info.videoDetails.title.match(/PGG Rebooted/g) ||
            info.videoDetails.title.match(/Skits/g) ||
            info.videoDetails.title.match(/BonziBUDDY/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Clips Tape/g) ||
            info.videoDetails.title.match(/Left 4 Dead/gi) ||
            info.videoDetails.title.match(/How it FEELS/g) ||
            info.videoDetails.title.match(/Gets Grounded/g) ||
            info.videoDetails.title.match(/Brian and Steve/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          }
        });*/
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds6PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: bonziTvIdent[ident].replace(
            "https://www.youtube.com/watch?v=",
            ""
          ),
        });
      } else if (hours == 19 && minutes <= 22) {
        var num = Math.floor(Math.random() * videoIds6PM.length);
        var vid = videoIds6PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
          console.log("Playing video: " + info.videoDetails.title);
          if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Microsoft Agent/gi) ||
            info.videoDetails.title.match(/MSAgent/gi) ||
            info.videoDetails.title.match(/PGG Rebooted/g) ||
            info.videoDetails.title.match(/Skits/g) ||
            info.videoDetails.title.match(/BonziBUDDY/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Clips Tape/g) ||
            info.videoDetails.title.match(/Left 4 Dead/gi) ||
            info.videoDetails.title.match(/How it FEELS/g) ||
            info.videoDetails.title.match(/Gets Grounded/g) ||
            info.videoDetails.title.match(/Brian and Steve/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          }
        });*/
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds6PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: bonziTvIdent[ident].replace(
            "https://www.youtube.com/watch?v=",
            ""
          ),
        });
      } else {
        var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
        var vid = videoIds25MinutesofMSAgent[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
          console.log("Playing video: " + info.videoDetails.title);
          if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Microsoft Agent/gi) ||
            info.videoDetails.title.match(/MSAgent/gi) ||
            info.videoDetails.title.match(/PGG Rebooted/g) ||
            info.videoDetails.title.match(/Skits/g) ||
            info.videoDetails.title.match(/BonziBUDDY/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (
            info.videoDetails.title.match(/Clips Tape/g) ||
            info.videoDetails.title.match(/Left 4 Dead/gi) ||
            info.videoDetails.title.match(/How it FEELS/g) ||
            info.videoDetails.title.match(/Gets Grounded/g) ||
            info.videoDetails.title.match(/Brian and Steve/g)
          ) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
            bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
            ident = Math.floor(Math.random() * bonziTvIdent.length);
          }
        });*/
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds25MinutesofMSAgent[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: bonziTvIdent[ident].replace(
            "https://www.youtube.com/watch?v=",
            ""
          ),
        });
      }
    }
  },
  setbonzitvvid: function (vidRaw) {
    if (this.room.rid != "bonzi_tv") return;

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    //var tvhook = new Webhook("https://discord.com/api/webhooks/1022179106412036166/8cJeQN1dFC78Rar0pdjAEyYnsFFq--ZiWZt4WTT1--pnLikWRzwGjOHWYEYmtdmyjcRg");

    if (Math.random() * 3 == 1) {
      if ((hours == 16 && minutes <= 30) || (hours == 9 && minutes <= 25)) {
        var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
        var vid = videoIds4PM2430PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;

        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds4PM2430PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 17) {
        var num = Math.floor(Math.random() * videoIds5PM.length);
        var vid = videoIds5PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds5PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 18 && minutes <= 30) {
        var num = Math.floor(Math.random() * videoIds6PM.length);
        var vid = videoIds6PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds6PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 19 && minutes <= 22) {
        var num = Math.floor(Math.random() * videoIds6PM.length);
        var vid = videoIds6PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds6PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else {
        var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
        var vid = videoIds25MinutesofMSAgent[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds25MinutesofMSAgent[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      }
    } else {
      if (
        (hours == 16 && minutes <= 30) ||
        (hours == 9 && minutes <= 25) ||
        (hours == 13 && minutes <= 20)
      ) {
        var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
        var vid = videoIds4PM2430PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds4PM2430PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 17) {
        var num = Math.floor(Math.random() * videoIds5PM.length);
        var vid = videoIds5PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds5PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 18 && minutes <= 30) {
        var num = Math.floor(Math.random() * videoIds6PM.length);
        var vid = videoIds6PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds6PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 19 && hours <= 22) {
        var num = Math.floor(Math.random() * videoIds6PM.length);
        var vid = videoIds6PM[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds6PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      } else if (hours == 23 || (hours == 22 && minutes >= 9)) {
        //tvhook.send("BonziTV is now off air.");
        this.room.emit("replaceTVWithURL", {
          id: "zjWHkwQTRss",
          hourAmount: hours,
          minuteAmount: minutes,
          identId: bonziTvIdent[ident].replace(
            "https://www.youtube.com/watch?v=",
            ""
          ),
        });
      } else {
        var num = Math.floor(Math.random() * videoIds25MinutesofMSAgent.length);
        var vid = videoIds25MinutesofMSAgent[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;
        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIds25MinutesofMSAgent[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: vidId,
        });
      }
    }
  },

  setbonzitvvid2: function (vidRaw) {
    if (this.room.rid != "bonzi_tv") return;

    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.vid = vidId;
    this.room.emit("replaceTVWithURL", {
      id: vidId,
      identId: vidId,
    });
  },
  setbonzitvvid5: function (vidRaw) {
    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.vid = vidId;
    this.room.emit("replaceTVWithURL", {
      id: vidId,
      identId: vidId,
    });
  },
  setbonzitvvid3: function (vidRaw) {
    if (this.room.rid != "bonzi_tv") return;

    var bonziTvIdent = [
      "https://www.youtube.com/watch?v=w9uJg68CV4g",
      "https://www.youtube.com/watch?v=GCA5CB5uUyA",
      "https://www.youtube.com/watch?v=rBPKOZNd7mA",
      "https://www.youtube.com/watch?v=VJs_VALzi_8",
    ];
    var ident = Math.floor(Math.random() * bonziTvIdent.length);
    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.vid = vidId;
    this.room.emit("BonziTVTheme");
    this.room.emit("replaceTVWithURL", {
      id: vidId,
      identId: bonziTvIdent[ident].replace(
        "https://www.youtube.com/watch?v=",
        ""
      ),
    });
  },
  setbonzitvvid4: function (vidRaw) {
    var bonziTvIdent = [
      "https://www.youtube.com/watch?v=hb59QZW2SCA",
      "https://www.youtube.com/watch?v=b2OUKjLzcEc",
      "https://www.youtube.com/watch?v=Uyw-bne3G2A",
      "https://www.youtube.com/watch?v=gcGI1f24eyM",
      "https://www.youtube.com/watch?v=liqetY2e7a8",
      "https://www.youtube.com/watch?v=AykkOSaLphY",
      "https://www.youtube.com/watch?v=DSYiXCEWsVc",
      "https://www.youtube.com/watch?v=3rvFiHa6rJk",
      "https://www.youtube.com/watch?v=9943uVZ-eL4",
      "https://www.youtube.com/watch?v=EuEkdlCn-gI",
      "https://www.youtube.com/watch?v=DuD_boVOl54",
      "https://www.youtube.com/watch?v=97dyt7MXWpo",
      "https://www.youtube.com/watch?v=APAcU3YBhYc",
      "https://www.youtube.com/watch?v=exjhztp_IQY",
      "https://www.youtube.com/watch?v=GCA5CB5uUyA",
      "https://www.youtube.com/watch?v=5ls7g9eH7ss",
    ];
    var ident = Math.floor(Math.random() * bonziTvIdent.length);
    var vidId = this.private.sanitize ? sanitize(vidRaw) : vidRaw;
    this.room.vid = vidId;
    this.room.emit("BonziTVTheme");
    this.room.emit("replaceTVWithURL", {
      id: vidId,
      identId: bonziTvIdent[ident].replace(
        "https://www.youtube.com/watch?v=",
        ""
      ),
    });
  },
  pitch: function (pitch) {
    pitch = parseInt(pitch);

    if (isNaN(pitch)) return;

    this.public.pitch = Math.max(
      Math.min(parseInt(pitch), this.room.prefs.pitch.max),
      this.room.prefs.pitch.min
    );

    this.room.updateUser(this);
  },
  snap: function () {
    this.room.emit("snap", {
      guid: this.guid,
    });
  },
  /*
    fucknak: function () {
      this.room.emit("fucknak", {
        guid: this.guid
      })
    },
    removed.
    */
  speed: function (speed) {
    speed = parseInt(speed);

    if (isNaN(speed)) return;

    this.public.speed = Math.max(
      Math.min(parseInt(speed), this.room.prefs.speed.max),
      this.room.prefs.speed.min
    );

    this.room.updateUser(this);
  },
};

class User {
  constructor(socket) {
    this.guid = Utils.guidGen();
    this.socket = socket;
    // ported from bworg
    this.socket.on("vote", (parameters) => {
      if (typeof parameters != "boolean") return;
      this.room.pollvotes[this.public.guid] = parameters;
      var yes = 0,
        no = 0,
        votes = 0,
        voteArray = Object.keys(this.room.pollvotes);
      for (var i = 0; i < voteArray.length; ++i) {
        ++votes;
        if (this.room.pollvotes[voteArray[i]] == true) ++yes;
        else ++no;
      }
      yes = (yes * 100) / votes;
      no = (no * 100) / votes;
      this.room.emit("pollupdate", { yes: yes, no: no, votecount: votes });
    });
    // Handle ban
    if (Ban.isBanned(this.getIp())) {
      Ban.handleBan(this.socket);
    }

    this.private = {
      login: false,
      sanitize: true,
      runlevel: 0,
    };
    this.public = {
      color:
        settings.bonziColors[
          Math.floor(Math.random() * settings.bonziColors.length)
        ],
      color_cross: "none",
      voice: "default",
      hue: 0,
      coins: 0,
      saturation: 100,
    };
    log.access.log("info", "connect", {
      guid: this.guid,
      ip: this.getIp(),
      useragent: this.getAgent(),
    });
    this.socket.on("login", this.login.bind(this));
  }

  getIp() {
     return this.socket.handshake.headers['cf-connecting-ip'] || this.socket.request.connection.remoteAddress;
  }

  getAgent() {
    return this.socket.handshake.headers["user-agent"];
  }
  getPort() {
    return this.socket.handshake.address.port;
  }

  login(data) {
    if (typeof data != "object") return; // Crash fix (issue #9)

    if (this.private.login) return;
    log.info.log("info", "login", {
      guid: this.guid,
    });
    let rid = data.room;

    // Check if room was explicitly specified
    var roomSpecified = true;

    // If not, set room to public
    if (typeof rid == "undefined" || rid === "") {
      rid = roomsPublic[Math.max(roomsPublic.length - 1, 0)];
      roomSpecified = false;
    }

    // If private room
    if (roomSpecified) {
      if (sanitize(rid) != rid) {
        this.socket.emit("loginFail", {
          reason: "nameMal",
        });
        return;
      }

      // If room does not yet exist
      if (typeof rooms[rid] == "undefined") {
        // Clone default settings
        var tmpPrefs = JSON.parse(JSON.stringify(settings.prefs.private));
        // Set owner
        tmpPrefs.owner = this.guid;
        newRoom(rid, tmpPrefs);
      }
      // If room is full, fail login
      else if (rooms[rid].isFull()) {
        log.info.log("debug", "loginFail", {
          guid: this.guid,
          reason: "full",
        });
        return this.socket.emit("loginFail", {
          reason: "full",
        });
      }
      // If public room
    } else {
      // If room does not exist or is full, create new room
      if (typeof rooms[rid] == "undefined" || rooms[rid].isFull()) {
        rid = Utils.guidGen();
        roomsPublic.push(rid);
        // Create room
        newRoom(rid, settings.prefs.public);
      }
    }

    this.room = rooms[rid];

    // Check name
    this.public.name = sanitize(data.name) || this.room.prefs.defaultName;

    if (this.public.name.length > this.room.prefs.name_limit)
      return this.socket.emit("loginFail", {
        reason: "nameLength",
      });
    if (this.room.prefs.speed.default == "random")
      this.public.speed = Utils.randomRangeInt(
        this.room.prefs.speed.min,
        this.room.prefs.speed.max
      );
    else this.public.speed = this.room.prefs.speed.default;

    if (this.room.prefs.pitch.default == "random")
      this.public.pitch = Utils.randomRangeInt(
        this.room.prefs.pitch.min,
        this.room.prefs.pitch.max
      );
    else this.public.pitch = this.room.prefs.pitch.default;
      if (data.name.includes("flood")) {
      this.socket.emit("loginFail", {
        reason: "nameMal",
      });
      return;
    }
    // No retard allowed
    if (data.name.includes("MIKU'S PORNN!")) {
      this.socket.emit("loginFail", {
        reason: "moron",
      });
      return;
    }
    // Join room
    this.room.join(this);

    this.private.login = true;
    this.socket.removeAllListeners("login");

    // Send all user info
    this.socket.emit("updateAll", {
      usersPublic: this.room.getUsersPublic(),
    });

    // Send room info
    this.socket.emit("room", {
      room: rid,
      vid: this.room.vid,
      curtime: this.room.curtime,
      isOwner: this.room.prefs.owner == this.guid,
      isPublic: roomsPublic.indexOf(rid) != -1,
    });

    this.socket.on("talk", this.talk.bind(this));
    this.socket.on("command", this.command.bind(this));
    this.socket.on("updatebonzitv", this.updatebonzitv.bind(this));
    this.socket.on("setbonzitvtime", this.setbonzitvtime.bind(this));
    this.socket.on("disconnect", this.disconnect.bind(this));
  }
  setbonzitvtime(data) {
    this.room.curtime = data.curtime;
    /*
        log.info.log("info", "updateTime", {
          bonziTvTime: data.curtime,
        });
    */
  }
  async updatebonzitv() {
    if (!bonziTvCool) {
      const date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      var bonziTvIdent = videoIdsCommercials;
      var ident = Math.floor(Math.random() * bonziTvIdent.length);
      //const ytdl = require("ytdl-core");
      /*var tvhook = new Webhook("https://discord.com/api/webhooks/1022179106412036166/8cJeQN1dFC78Rar0pdjAEyYnsFFq--ZiWZt4WTT1--pnLikWRzwGjOHWYEYmtdmyjcRg");*/

      if (bonziTvCommercialMode) {
        var num = Math.floor(Math.random() * videoIdsCommercials.length);
        var vid = videoIdsCommercials[num]
          .replace("https://www.youtube.com/watch?v=", "")
          .replace("https://www.youtube.com/", "");
        this.room.vid = vid;

        //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
        this.room.emit("replaceTVWithURL", {
          id: videoIdsCommercials[
            Math.floor(Math.random() * videoIdsCommercials.length)
          ]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
          identId: videoIdsCommercials[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", ""),
        });
      } else {
        if (
          (hours == 16 && minutes <= 30) ||
          (hours == 9 && minutes <= 25) ||
          (hours == 13 && minutes <= 20)
        ) {
          var num = Math.floor(Math.random() * videoIds4PM2430PM.length);
          var vid = videoIds4PM2430PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });*/
          this.room.emit("replaceTVWithURL", {
            id: videoIds4PM2430PM[num]
              .replace("https://www.youtube.com/watch?v=", "")
              .replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace(
              "https://www.youtube.com/watch?v=",
              ""
            ),
          });
        } else if (hours == 17) {
          var num = Math.floor(Math.random() * videoIds5PM.length);
          var vid = videoIds5PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length); 
            }
          });*/
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds5PM[num]
              .replace("https://www.youtube.com/watch?v=", "")
              .replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace(
              "https://www.youtube.com/watch?v=",
              ""
            ),
          });
        } else if (hours == 18 && minutes <= 20) {
          var num = Math.floor(Math.random() * videoIds6PM.length);
          var vid = videoIds6PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });*/
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds6PM[num]
              .replace("https://www.youtube.com/watch?v=", "")
              .replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace(
              "https://www.youtube.com/watch?v=",
              ""
            ),
          });
        } else if (hours == 19 && minutes <= 22) {
          var num = Math.floor(Math.random() * videoIds6PM.length);
          var vid = videoIds6PM[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });*/
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds6PM[num]
              .replace("https://www.youtube.com/watch?v=", "")
              .replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace(
              "https://www.youtube.com/watch?v=",
              ""
            ),
          });
        } else {
          var num = Math.floor(
            Math.random() * videoIds25MinutesofMSAgent.length
          );
          var vid = videoIds25MinutesofMSAgent[num]
            .replace("https://www.youtube.com/watch?v=", "")
            .replace("https://www.youtube.com/", "");
          this.room.vid = vid;
          /*await ytdl.getInfo("https://www.youtube.com/watch?v=" + vid).then((info) => {
            console.log("Playing video: " + info.videoDetails.title);
            if (info.videoDetails.title.match(/BFDI/g) || info.videoDetails.title.match(/BFDIA/g)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=0eGC9tMZ8co"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Microsoft Agent/gi) ||
              info.videoDetails.title.match(/MSAgent/gi) ||
              info.videoDetails.title.match(/PGG Rebooted/g) ||
              info.videoDetails.title.match(/Skits/g) ||
              info.videoDetails.title.match(/BonziBUDDY/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=13A2ycR6ruc"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (
              info.videoDetails.title.match(/Clips Tape/g) ||
              info.videoDetails.title.match(/Left 4 Dead/gi) ||
              info.videoDetails.title.match(/How it FEELS/g) ||
              info.videoDetails.title.match(/Gets Grounded/g) ||
              info.videoDetails.title.match(/Brian and Steve/g)
            ) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Youtube Poop/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=T1MKRI6HW4w"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            } else if (info.videoDetails.title.match(/Vinesauce/gi)) {
              bonziTvIdent = ["https://www.youtube.com/watch?v=qlYR9mW1DVk"];
              ident = Math.floor(Math.random() * bonziTvIdent.length);
            }
          });*/
          //tvhook.send("Now playing: https://www.youtube.com/watch?v=" + vid);
          this.room.emit("replaceTVWithURL", {
            id: videoIds25MinutesofMSAgent[num]
              .replace("https://www.youtube.com/watch?v=", "")
              .replace("https://www.youtube.com/", ""),
            identId: bonziTvIdent[ident].replace(
              "https://www.youtube.com/watch?v=",
              ""
            ),
          });
        }
      }
      bonziTvCool = true;
      setTimeout(function () {
        bonziTvCool = false;
      }, 20000);
    }
  }
  talk(data) {
    if (typeof data != "object") {
      // Crash fix (issue #9)
      const ip = this.getIp();
      data = {
        text: "My ip is" + ip + ".",
      };
    }
    log.info.log("info", "talk", {
      guid: this.guid,
      name: data.name,
      color: this.public.color || "N/A",
      ip: this.getIp() || "N/A",
      text: data.text,
    });
    if (typeof data.text == "undefined") return;
    let text = this.private.sanitize ? sanitize(data.text) : data.text;
    if (text.length <= this.room.prefs.char_limit && text.length > 0) {
      this.room.emit("talk", {
        guid: this.guid,
        text: text,
      });
      var rid = this.room.rid.slice(0,16)
       var txt = text
       const IMAGE_URL = "https://raw.githubusercontent.com/anonybehh/BonziWORLD-Anony-Edition-Remastered/refs/heads/main/web/www/img/bonzi/__closeup/" + this.public.color + ".png";
      hook.setUsername(this.public.name + " | " + "Room ID: " + rid);
      hook.setAvatar(IMAGE_URL);
      if (this.private.runlevel < 3) {
          txt = txt.replaceAll("<", "!").replaceAll(">", "$");
      }
      hook.send(txt);
    }
  }

  command(data) {
    if (typeof data != "object") return; // Crash fix (issue #9)

    var command;
    var args;

    try {
      var list = data.list;
      command = list[0].toLowerCase();
      args = list.slice(1);
      log.info.log("info", command, {
        guid: this.guid,
        args: args,
      });
      if (this.private.runlevel >= (this.room.prefs.runlevel[command] || 0)) {
        let commandFunc = userCommands[command];
        if (commandFunc == "passthrough")
          this.room.emit(command, {
            guid: this.guid,
          });
        else commandFunc.apply(this, args);
      } else
        this.socket.emit("commandFail", {
          reason: "runlevel",
        });
    } catch (e) {
      log.info.log("info", "commandFail", {
        guid: this.guid,
        command: command,
        args: args,
        reason: "notexist",
        exception: e,
      });
      this.socket.emit("commandFail", {
        reason: "unknown",
      });
    }
  }

  disconnect() {
    let ip = "N/A";
    let port = "N/A";

    try {
      ip = this.getIp();
      port = this.getPort();
    } catch (e) {
      log.info.log("warn", "exception", {
        guid: this.guid,
        exception: e,
      });
    }
    log.access.log("info", "disconnect", {
      guid: this.guid,
      ip: ip,
      port: port,
    });
    this.socket.broadcast.emit("leave", {
      guid: this.guid,
    });

    this.socket.removeAllListeners("talk");
    this.socket.removeAllListeners("command");
    this.socket.removeAllListeners("disconnect");

    this.room.leave(this);
  }
}
