var Winners = Backbone.Model.extend({})

var WinnerCollection = Backbone.Collection.extend({
	model: Winners,

	url: 'http://developer.echonest.com/api/v4/genre/artists?api_key=RMUWZHZJZCSLALMHF&format=jsonp&results=15&bucket=hotttnesss&bucket=discovery&bucket=genre&bucket=artist_location&bucket=images&bucket=years_active&bucket=familiarity&callback=MyFunc&name=jazz',

	parse: function(response){
		return response.artists;
	}
})
