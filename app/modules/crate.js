// Crate module
define([
  // Application.
  "app"
],

// Map dependencies from above array.
function(app) {

  // Create a new module.
  var Crate = app.module();

  // Default Model.
  Crate.Model = Backbone.Model.extend({

  });

  // Default Collection.
  Crate.Collection = Backbone.Collection.extend({
    model: Crate.Model
  });

  // Default View.
  Crate.Views.Playlist = Backbone.Layout.extend({
    template: "crate",
    initialize: function(){

    },
    serialize: function(){
      return {
	store_name: this.options.collections.store.name
      };
    }
  });

  // Return the module for AMD compliance.
  return Crate;

});
