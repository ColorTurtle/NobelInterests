var MainView = Backbone.View.extend({

	initialize: function(){
		window.winner = new WinnerCollection();
		console.log('It made it to Collection')

		$.when(winner.fetch()).then(function() {
		  _.each(winner.models, function(data){
		  new GallerWinnerView({model: data});
		  })
		});

		this.render();
	},	

	render: function(){
		new AboutView();
	}
})