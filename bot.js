var Twit = require('twit');
var request = require('request');

// https://dev.twitter.com/oauth/overview
var T = new Twit({
    consumer_key:         'consumer_key'
  , consumer_secret:      'consumer_secret'
  , access_token:         'access_token'
  , access_token_secret:  'access_token_secret'
});

// Chose your sentences
// see http://api.openweathermap.org/data/2.5/weather?q=London 
var dictionnary = new Array();
dictionnary['rain'] = 'it rains';
dictionnary['clouds'] = 'cloudy';
dictionnary['clear'] = 'clear sky';


/*
 * Lis les derniers tweets qui font mention à @SlooTony
 */
var readMentions = function(id) {
	T.get('statuses/mentions_timeline', {
		since_id: id
	}, function(err, data, response) {
		if(err) return console.log(err);

		var dataTab = [];

		for(i = 0; i < data.length; i++) {
			var username = data[i].user.screen_name;
			var statusId = data[i].id;
			var text = data[i].text;
			var place = getPlace(text);

			// Asking service "weather"
			if(isAskService(text)) {
				if(null !== data[i].place) { // Geoloc
					answerWeather(data[i]); 
				} else if(null !== place) { // City
					data[i]['place'] = {'name': place};
					answerWeather(data[i]);
				} else {
					T.post('statuses/update', { 
						in_reply_to_status_id: statusId, 
						status: '@' + username + ' J\'ai aucune ville, ni geoloc, ni spécifiée dans le tweet, comment je fais yo ?' 
					}, 
						function(err, data, response) {
							if(err) return console.log(err);
						}
					);
				}
			} else {
				console.log('Message : ' + data[i].text + ' - n\'est pas une demande de service');
			}
		}

		if(data.length > 0) {
			setTimeout(readMentions, 60000, data[0].id);
		} else {
			setTimeout(readMentions, 60000, id);
		}
	});
}

/*
 * Post un tweet en réponse à une demande de service
 */
function answerWeather(data) {
	var username = data.user.screen_name;
	var statusId = data.id;
	var text = data.text;

	var uri = "http://api.openweathermap.org/data/2.5/weather?q=" + data.place.name;
	request({
		uri: uri,
		json: true
	}, function(err, resp, body) {
		if(!err && resp.body.cod == 200) {
			var globalWeather = dictionnary[body.weather[0].main.toLowerCase()];
			var temp = body.main.temp;

			var message = '@' + username; // Here your twit

			T.post('statuses/update', { 
				in_reply_to_status_id: statusId, 
				status: message
			}, 
				function(err, data, response) {
					if(err) console.log(err);
				}
			);
		} else if(resp.body.cod == 404) {
			T.post('statuses/update', { 
				in_reply_to_status_id: statusId, 
				status: '@' + username // City not found message
			}, 
				function(err, data, response) {
					if(err) console.log(err);
				}
			);
		}
	});
}

/*
 * Conversion from Kelvin to Celsius
 */
function convertK(temp) {
	return Math.floor(temp - 273.15);
}

function isAskService(text) {
	var patt = /weather/i;

	return patt.test(text);
}

function getPlace(text) {
	var patt = /weather\/[a-z]+[^ ]*/i;
	var askPlace = patt.exec(text);
	
	if(null !== askPlace) {
		var splt = askPlace[0].split("/");
		return splt[1];
	}

	return null;
}

readMentions(1);
