// Our Main JS file that puts it all together
'use strict';

var Backbone = require('backbone');

// Require my Cats Collection, inherently requires the model
var CatsCollection = require('collections/catsCollection');

// Require my sample Cat data
var data = require('../cats.json');

// Put that data into a new collection
var catsCollection = new CatsCollection(data);

module.exports = catsCollection;