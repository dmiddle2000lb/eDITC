// Record module
define([
  // Application.
  'app',
  'modules/sample'
], function(app, Sample) {

  // Create a new module.
  var Record = app.module();

  // Default Model.


  // Default View.
  Record.Views.Item = Backbone.View.extend({
    template: "record",
    tagName: 'li',
    className: 'media well-small',
    initialize: function(){
      this.sample = new Sample.Model();
      this.sample.term = this.sample.cleanUpQuery( this.model.get('title') );
      this.sample.fetch();
      window.model = this.model;
    },

    serialize: function() {
      return {
	model: this.model
      };
    },

    beforeRender: function(){
      this.insertView('.sample', new Sample.Views.Item({
	model: this.sample
      }), this);
    }

  });

  // Return the module for AMD compliance.
  return Record;

});
