// Marionette JS file that puts it all together
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

// Directly instantiate new Marionette application CatMVC
var CatMVC = new Backbone.Marionette.Application();

// Create Marionette Region object for CatMVC
CatMVC.addRegions ({
	container: '#container'
});

CatMVC.on('start', function () {
	
	// Test the app started
	console.log('CatMVC started...');
	
	// Initialize new Item view
	var mCatView = new MCatView({
		model: catsCollection.get(2)
	});
	
	// Show the Item View in the container Region
	CatMVC.container.show(mCatView);
	
});

// Start the Cat MVC app
CatMVC.start();

module.exports = CatMVC;