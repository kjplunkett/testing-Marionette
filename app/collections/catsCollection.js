// Cats Collection - Backbone Collection
'use strict';

var Backbone = require('backbone');
var CatModel = require('models/catModel');

// Define Collection
var CatsCollection = Backbone.Collection.extend ({
	// Set the model to CatModel
	model: CatModel
	
});

module.exports = CatsCollection;