// Our Main JS file that puts it all together
'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
// Require my Cats Collection, inherently requires the model
var CatsCollection = require('collections/catsCollection');
// Require my sample Cat data
var data = require('../cats.json');
// Put that data into a new collection
var catsCollection = new CatsCollection(data);
// Require the Cat View
var CatView = require('views/catView');

module.exports = {	catsCollection: catsCollection,
				 	CatView: CatView };