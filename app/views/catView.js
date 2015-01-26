// Backbone View for each cat
'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');

// Define Cat View
var CatView = Backbone.View.extend ({
	
	// Bind this view to the catView id
	el: '#catView',

	// Use the Underscore template we put in the index html page
	template: $('#cat-view-template').html(),

	initialize: function () {
		// Render when anything changes
		this.listenTo(this.model, 'change', this.render);
	},

	// Render function
	render: function ()	{
		// Compile Underscore template
		var compiledTemplate = _.template(this.template);

		// Render the template with the model data
		var modelData = _.clone(this.model.attributes);
		var html = compiledTemplate(modelData);

		// Populate the view with the rendered html
		this.$el.html(html);
		
		return this;
	}
});

module.exports = CatView;