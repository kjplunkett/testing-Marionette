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

// Require the Marionette Cat Collection View
//var CatsCollectionView = require('views/catsCollectionView');

// Require the Mariontee Cat Composite View
var MCatCompositeView = require('views/mCatCompositeView');

// Directly instantiate new Marionette application CatMVC
var CatMVC = new Backbone.Marionette.Application();

// Create Marionette Region object for CatMVC
CatMVC.addRegions ({
	container: '#container'
});

CatMVC.on('start', function () {
	
	// Test the app started
	console.log('CatMVC started...');

	// Use a Collection View
	//var catsCollectionView = new CatsCollectionView({ collection: catsCollection });
	//CatMVC.container.show(catsCollectionView);
	
	// Use a Composite View
	var mCatCompositeView = new MCatCompositeView ({ collection: catsCollection });
	CatMVC.container.show(mCatCompositeView);

});	

// Start the Cat MVC app
CatMVC.start();

module.exports = CatMVC;