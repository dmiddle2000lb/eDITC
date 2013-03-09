define([
  // Application.
  'app',
  'modules/store',
  'modules/crate',
  'modules/record'
], function(app, Store, Crate, Record) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    initialize: function(){
      var collections = {
	store: new Store.Collection(),
	crate: new Crate.Collection()
      };
      _.extend(this, collections);

      app.useLayout('main').setViews({
	'.search': new Store.Views.Search({
	  collections: collections
	}),
	'.crate': new Crate.Views.Playlist({
	  collections: collections
	})
      }).render();

    },
    routes: {
      "": "index"
    },

    index: function() {

    }
  });

  return Router;

});
