// Marionette JS file that puts it al together
// Alternative to main.js

'use strict';

// Default requires for Backbone 
var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

// Require my Cats Collection, inherently requires the model
var CatsCollection = require('collections/catsCollection');

// Require my sample Cat data
var data = require('../cats.json');

// Put that data into a new collection
var catsCollection = new CatsCollection(data);

// Require the Marionette Cat Item View
var MCatView = require('views/mCatView');

// Directly instantiate new Marionette application
var CatMVC = new Backbone.Marionette.Application();

// Create Marionette Region object for CatMVC
CatMVC.addRegions ({
	container: '#container'
});

// After initializers called
CatMVC.on('start', function () {
	
	// Test the app started
	console.log('CatMVC started...');

	// Create new MCatView and add it to the CatMVC's region
	var mCatView = new MCatView ({
		model: catsCollection.get(2)
	});

	// Show the Region
	// Not calling the render function on views anymore because Marionette Regions take care of that
	CatMVC.container.show(mCatView);

});

// Start the Cat MVC app
CatMVC.start();

module.exports = CatMVC;