// Store module
define([
  // Application.
  'app',
  'modules/record'
], function(app, Record) {

  // Create a new module.
  var Store = app.module();

  // Default Model.
  Store.Model = Backbone.Model.extend({
  });

  // Default Collection.
  Store.Collection = Backbone.Collection.extend({
    model: Store.Model,

    url: 'http://svcs.ebay.com/services/search/FindingService/v1?'
      + 'OPERATION-NAME=findItemsIneBayStores'
      + '&SERVICE-VERSION=1.0.0'
      + '&SECURITY-APPNAME=NA25313c5-6e13-4495-bcc0-72f3eb7c29f'
      + '&RESPONSE-DATA-FORMAT=JSON'
      + '&REST-PAYLOAD'
      + '&storeName=Mentallymad\'s Hip Hop Record Shop'
      + '&callback=?',

    parse: function(data){
      return data.findItemsIneBayStoresResponse[0].searchResult[0].item;
    }
  });

  // Default View.
  Store.Views.Search = Backbone.Layout.extend({
    template: "store",

    events: {
      'click .search-store': 'getCrate'
    },

    initialize: function(){

      this.store = this.options.collections.store;
      this.crate = this.options.collections.crate;

      this.listenTo(this.store, {
	'reset': this.render
      });

    },

    getCrate: function(e){
      e.preventDefault();
      this.store.name = this.$el.find('.ebay-store').val();
      this.store.fetch();
    },

    beforeRender: function(){
      this.store.each(function(record, index){
	this.insertView('ul', new Record.Views.Item({
	  model: record,
	  store: this.store
	}));
      }, this );

    }
  });

  // Return the module for AMD compliance.
  return Store;

});
