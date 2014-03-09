var Winners = Backbone.Model.extend({});

var WinnerCollection = Backbone.Collection.extend({
	model: Winners,


// WORKING WITH ONLY 12 ARTISTS for the practice but will move to 50ish once we put into production
	// API call by genre
	url: 'http://developer.echonest.com/api/v4/artist/search?api_key=RMUWZHZJZCSLALMHF&format=jsonp&results=12&start=20&bucket=hotttnesss&bucket=discovery&bucket=genre&bucket=artist_location&bucket=images&bucket=familiarity&callback=?',
	// Swiching api to artist search with my own public key
	// url: 'http://developer.echonest.com/api/v4/artist/search?api_key=MDDCRMKPKYI3LCHYF&format=json&description=heavy&mood=sad&style=jazz&results=1',
	// Not able to get the data into the collection
	parse: function(data){
		return data.response.artists;
	}
});
