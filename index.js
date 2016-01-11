// util
require('dotenv').load();

function getRandomInt(min, max) {
  return Math.floor( Math.random() * (max - min + 1) ) + min;
}

// Youtube
var ytapi = require('node-youtubeapi-simplifier');
ytapi.setup(process.env.GOOGLE_API_KEY);

function getRandomPerfumeMV(cb) {
  ytapi.playlistFunctions.getPlaylistsForUser('Perfume').then(function (data) {
    data.forEach(function(playlist) {
      //console.log(playlist.title)
      if(playlist.title === '［Perfume］ MUSIC VIDEOS') {
        //console.log(playlist.playlistId)
        //console.log(playlist.videoCount)
        var num = getRandomInt(0, playlist.videoCount);
        ytapi.playlistFunctions.getVideosForPlaylist(playlist.playlistId).then(function (videos) {
          var str = videos[num].title + '  https://www.youtube.com/watch?v=' + videos[num].videoId;
          console.log(str);
          cb(null, str);
        });
      }
    });
  });
}

// Twitter
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
});

// main
exports.handler = function(event, context) {
  getRandomPerfumeMV(function(err, data) {
    if (err) context.fail(err);
    else {
      var params = {status: data};
      client.post('statuses/update', params, function(error, result, response){
        if (err) context.fail(err);
        else context.succeed(result);
      });
    }
  });
}
