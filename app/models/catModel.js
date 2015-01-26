// Basic Backbone Model for Cat
'use strict';

var Backbone = require('backbone');

// Setup Backbone Cat Model
var CatModel = Backbone.Model.extend({
		
	defaults: {
		name: '',
		color: '',
		age: ''
	}

});

module.exports = CatModel;