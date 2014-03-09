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
	className: 'artist-small-container js-artist-small-container col-md-3 col-sm-3',

	aboutTemplate: _.template($('#artist-small-template').text()),

	events: {
		"click .js-artist-small-click": "expandedView"
	},

	initialize: function(){
		$('.js-main-selection-area').append( this.el );
		this.render()
	},

	render: function(){
		this.$el.append(this.aboutTemplate({model: this.model}))
	},

	expandedView: function () {
		console.log('clicked')
		new ExpandedView({model: this.model})
	}

});

var ExpandedView = Backbone.View.extend({
	className: 'artist-expanded-container  col-lg-12 col-md-12 col-sm-12',

	aboutTemplate: _.template($('#artist-expanded-template').text()),

	events: {
		"click .js-close": "remove"
	},

	initialize: function(){
		$('.js-expanded-container').append( this.el );
		this.render()
	},

	render: function(){
		this.$el.append(this.aboutTemplate({model: this.model}))
	}
})
