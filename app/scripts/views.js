var AboutView = Backbone.View.extend({

	// className: 'container',

	aboutTemplate: _.template($('#about-template').text()),

	initialize: function(){
		$('.js-main-area').html( this.el );
		this.render();

	},

	render: function(){
		this.$el.html(this.aboutTemplate({model: this.model}))
	}

});

var GalleryWinnerView = Backbone.View.extend({
	className: 'artist-small col-md-3',

	aboutTemplate: _.template($('#artist-small-template').text()),

	initialize: function(){
		$('.js-main-selection-area').append( this.el );
		this.render()
	},

	render: function(){
		this.$el.append(this.aboutTemplate({model: this.model}))
	}

});