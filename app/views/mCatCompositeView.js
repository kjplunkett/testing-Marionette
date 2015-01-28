// Marionette Composite View for rendering Cat Collection
'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var Marionette = require('backbone.marionette');
var MCatView = require('views/mCatView');

// Define a new Composite View, MCatCompositeView
var MCatCompositeView = Backbone.Marionette.CompositeView.extend ({

	// Set the chield view to MCatView
	childView: MCatView,

	// Specify jQuery selector to put the 'childView' instances into
	childViewContainer: 'tbody',

	template: '#table-template'

	/*
	initialize: function () {
		console.log("Composite View initialized");
	}
	*/
});

module.exports = MCatCompositeView;