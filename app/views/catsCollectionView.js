// Marionette Collection View for catCollection
'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var Marionette = require('backbone.marionette');
var MCatView = require('views/mCatView');

// Define a new Collection View
var CatsCollectionView = Backbone.Marionette.CollectionView.extend ({
	
	// Set the childView to MCatView
	childView: MCatView
	
});

module.exports = CatsCollectionView;