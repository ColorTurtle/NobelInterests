var AboutView = Backbone.View.extend({

	className: 'container',

	aboutTemplate: _.template($('#about-template').text()),

	initialize: function(){
		$('.main-area').html( this.el );
		this.render();

	},

	render: function(){
		this.$el.html(this.aboutTemplate({model: this.model}))
	}



})