var jam = {
    "packages": [
	{
	    "name": "backbone",
	    "location": "../vendor/jam/backbone",
	    "main": "backbone.js"
	},
	{
	    "name": "backbone.layoutmanager",
	    "location": "../vendor/jam/backbone.layoutmanager",
	    "main": "backbone.layoutmanager.js"
	},
	{
	    "name": "jquery",
	    "location": "../vendor/jam/jquery",
	    "main": "jquery.js"
	},
	{
	    "name": "lodash",
	    "location": "../vendor/jam/lodash",
	    "main": "./lodash.js"
	},
	{
	    "name": "underscore",
	    "location": "../vendor/jam/underscore",
	    "main": "underscore.js"
	}
    ],
    "version": "0.2.15",
    "shim": {
	"backbone": {
	    "deps": [
		"jquery",
		"underscore"
	    ],
	    "exports": "Backbone"
	},
	"backbone.layoutmanager": {
	    "deps": [
		"jquery",
		"backbone",
		"lodash"
	    ],
	    "exports": "Backbone.LayoutManager"
	},
	"underscore": {
	    "exports": "_"
	}
    }
};

if (typeof require !== "undefined" && require.config) {
    require.config({
    "packages": [
	{
	    "name": "backbone",
	    "location": "../vendor/jam/backbone",
	    "main": "backbone.js"
	},
	{
	    "name": "backbone.layoutmanager",
	    "location": "../vendor/jam/backbone.layoutmanager",
	    "main": "backbone.layoutmanager.js"
	},
	{
	    "name": "jquery",
	    "location": "../vendor/jam/jquery",
	    "main": "jquery.js"
	},
	{
	    "name": "lodash",
	    "location": "../vendor/jam/lodash",
	    "main": "./lodash.js"
	},
	{
	    "name": "underscore",
	    "location": "../vendor/jam/underscore",
	    "main": "underscore.js"
	}
    ],
    "shim": {
	"backbone": {
	    "deps": [
		"jquery",
		"underscore"
	    ],
	    "exports": "Backbone"
	},
	"backbone.layoutmanager": {
	    "deps": [
		"jquery",
		"backbone",
		"lodash"
	    ],
	    "exports": "Backbone.LayoutManager"
	},
	"underscore": {
	    "exports": "_"
	}
    }
});
}
else {
    var require = {
    "packages": [
	{
	    "name": "backbone",
	    "location": "../vendor/jam/backbone",
	    "main": "backbone.js"
	},
	{
	    "name": "backbone.layoutmanager",
	    "location": "../vendor/jam/backbone.layoutmanager",
	    "main": "backbone.layoutmanager.js"
	},
	{
	    "name": "jquery",
	    "location": "../vendor/jam/jquery",
	    "main": "jquery.js"
	},
	{
	    "name": "lodash",
	    "location": "../vendor/jam/lodash",
	    "main": "./lodash.js"
	},
	{
	    "name": "underscore",
	    "location": "../vendor/jam/underscore",
	    "main": "underscore.js"
	}
    ],
    "shim": {
	"backbone": {
	    "deps": [
		"jquery",
		"underscore"
	    ],
	    "exports": "Backbone"
	},
	"backbone.layoutmanager": {
	    "deps": [
		"jquery",
		"backbone",
		"lodash"
	    ],
	    "exports": "Backbone.LayoutManager"
	},
	"underscore": {
	    "exports": "_"
	}
    }
};
}

if (typeof exports !== "undefined" && typeof module !== "undefined") {
    module.exports = jam;
}