var isMobileApp = false;
var isApp = false;
var isDesktop =
  navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) ==
  null;

var isChromeBrowser =
  /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var urlChrome =
  "https://chrome.google.com/webstore/detail/bonziworld/mbmkblgjegkiaggajjiheicbmfjaldcf";

var isiOS = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) != null;
var urlGPlay =
  "https://play.google.com/store/apps/details?id=com.jojudge.bonziworld";
var urlSteamGroup = "https://steamcommunity.com/groups/SEAMSERVER";
var urlAmazonStore = "https://www.amazon.com/dp/B0C38B8J8G/";

// Get the voice select element.
var voiceSelect = document.getElementById("voice");
$(function () {
  var support = {
    AudioContext: {
      supported:
        typeof (window.AudioContext || window.webkitAudioContext) !=
        "undefined",
      message: "Your browser does not support the Web Audio API.",
    },
  };

  var supported = true;
  var supportKeys = Object.keys(support);
  for (var i = 0; i < supportKeys.length; i++) {
    var key = supportKeys[i];
    var obj = support[key];
    supported = supported && obj.supported;
    if (!obj.supported)
      $("#unsupp_reasons").append("<li>" + obj.message + "</li>");
  }
});
// moving these into the script.min.js declutter...