// Cat MVC Marionette Layout View
'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var MCatView = require('mCatView');

// Define the Cat Layout View
var CatLayoutView = Backbone.LayoutView.extend ({
	template: '#layout-view-template',

	regions: {
		tableRow: '#tableRow'
	}
});	

module.exports = CatLayoutView;