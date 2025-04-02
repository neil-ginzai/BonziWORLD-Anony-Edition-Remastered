// ========================================================================
// Server init
// ========================================================================

// Filesystem reading functions
const fs = require("fs-extra");

// Load settings
try {
  stats = fs.lstatSync("settings.json");
} catch (e) {
  // If settings do not yet exist
  if (e.code == "ENOENT") {
    try {
      fs.copySync("settings.example.json", "settings.json");
      console.log("Created new settings file.");
    } catch (e) {
      console.log(e);
      throw "Could not create new settings file.";
    }
    // Else, there was a misc error (permissions?)
  } else {
    console.log(e);
    throw "Could not read 'settings.json'.";
  }
}

// Load settings into memory
const settings = require("./settings.json");
// Setup basic express server
var express = require("express");
var app = express();
if (settings.express.serveStatic) app.use(express.static("./build/www"));
app.get('/readme.html', function(req, res) {
  res.sendFile(__dirname + '/build/www/readme/index.html');
});
app.get('/rules.html', function(req, res) {
  res.sendFile(__dirname + '/build/www/rules/index.html');
});
var server = require("http").createServer(app);

// Init socket.io
var io = require("socket.io")(server);
var port = process.env.PORT || settings.port;

exports.io = io;

// Init sanitize-html
var sanitize = require("sanitize-html");

// Load ban list
const Ban = require("./ban.js");
Ban.init();

// Start actually listening
server.listen(port, function () {
  console.log(
    " Welcome to BonziWORLD Anony Edition Remastered!\n",
    "---------<[{ Ports }]>---------\n",
    "This server is listening at the port " + port + ". Have fun!"
  );
});
app.use(express.static(__dirname + "/public"));

// ========================================================================
// Banning functions
// ========================================================================

// ========================================================================
// Helper functions
// ========================================================================

const Utils = require("./utils.js");

// ========================================================================
// The Beef(TM)
// ========================================================================

const Meat = require("./meat.js");
Meat.beat();

// Console commands
const Console = require("./console.js");
Console.listen();

const bot = require("./bot.js");


const markup = require("./markup.js");