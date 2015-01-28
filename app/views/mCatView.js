// Marionette ItemView for Cat Models
'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var Marionette = require('backbone.marionette');

// Define the Marionette Item View
var MCatView = Marionette.ItemView.extend ({
	
	// Bind the view to the container div
	// Testing if ItemView's work without an 'el' defined
	//el: 'body',
	
	// Load in the Underscore template for each table row
	template: '#cat-view-template',
	
	initialize: function () {
		// bind this model change to re-render the view	
		this.listenTo(this.model, 'change', this.render);
	}

	// Letting the default Marionette Render function handle the rest
});

module.exports = MCatView;