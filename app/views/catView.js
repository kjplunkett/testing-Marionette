// Backbone View for each cat
'use strict';

var $ = require('jquery');
var Backbone = require('backbone');

// Define Cat View
var CatView = Backbone.View.extend ({
	
	// Bind this view to the catView id
	el: '#catView',

	initialize: function () {
		// Render when anything changes
		this.listenTo(this.model, 'change', this.render);
	},

	// Render function
	render: function () {
		this.$el.html(this.model.get('name'));
		return this;
	}
});

module.exports = CatView;