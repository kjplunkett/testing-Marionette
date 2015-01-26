// Our Main JS file that puts it all together
'use strict';

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
// Require the Marionette Cat View
var MCatView = require('views/mCatView');

module.exports = {	catsCollection: catsCollection,
				 	MCatView: MCatView };

/* Run these commands from Chrome terminal (one at a time)
app = require('app');
cat = app.catsCollection.get(1);
view = new app.MCatView({model: cat});
document.body.appendChild(view.render().el);
*/