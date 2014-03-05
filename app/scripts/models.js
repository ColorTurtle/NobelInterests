var Winners = Backbone.Model.extend({});

var WinnerCollection = Backbone.Collection.extend({
	model: Winners,

	// API call by genre
	url: 'http://developer.echonest.com/api/v4/genre/artists?api_key=RMUWZHZJZCSLALMHF&format=jsonp&results=15&bucket=hotttnesss&bucket=discovery&bucket=genre&bucket=artist_location&bucket=images&bucket=years_active&bucket=familiarity&callback=MyFunc&name=jazz',
	// Swiching api to artist search with my own public key
	// url: 'http://developer.echonest.com/api/v4/artist/search?api_key=MDDCRMKPKYI3LCHYF&format=json&description=heavy&mood=sad&style=jazz&results=1',

	parse: function(response){
		return response.artists;
	}
});
