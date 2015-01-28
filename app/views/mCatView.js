// Marionette ItemView for Cat Models
'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var Marionette = require('backbone.marionette');

// Define the Marionette Item View
var MCatView = Marionette.ItemView.extend ({
	
	// Create a new <tr> tag instead of <div>
	tagName: 'tr',

	// Load in the Underscore template for each table row
	template: '#row-template',

	initialize: function () {
		// bind this model change to re-render the view	
		this.listenTo(this.model, 'change', this.render);
		console.log('Item View initialized');
	}

	// Letting the default Marionette Render function handle the rest
});

module.exports = MCatView;