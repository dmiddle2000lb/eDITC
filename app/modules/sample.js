// Sample module
define([
  // Application.
  "app",
  'underscore_string'
], function(app, _s) {

  // Create a new module.
  var Sample = app.module();

  // Default Model.

  Sample.Model = Backbone.Model.extend({
    url: function(){
      return 'http://ws.spotify.com/search/1/track.json?q=' + this.term;
      // return 'https://gdata.youtube.com/feeds/api/videos?'
      //   + 'q=' + this.term
      //   + '&alt=json-in-script'
      //   + '&orderby=relevance'
      //   + '&max-results=1'
      //   + '&callback=?';
      // return 'http://itunes.apple.com/search?term='+ this.term +'&media=music&entity=song&callback=?';
    },
    parse: function( data ){
      if (data.info.num_results > 0) return { spotify: data.tracks[0].href };
    },
    cleanUpQuery: function(query){
      var blacklist = [
	'12\"', 'sealed', 'random', 'rap', 'white', 'wax', 'italo', 'lp', '2xlp', '3xlp', 'nm', 'vg++', 'vg+', 'vg', 'vg-'
	  + 'g', 'poor', 'random', 'underground', 'rap', 'il', 'disc', '8', 'hear', 'shrink', 'italo', 'mr.', 'disc', 'qwest'
	  + 'discomagic', 'atlantic', '-', 'records', 'original', 'promo!!!', 'pressing', 'Pressing!', '1980', '1981', '1982', '1983'
	  + '1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995', '1996',
	  + '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010'
	  + 'records', 'original', 'dj', 'promo!', 'profile', 'promo', 'tommy', 'boy', 'og', 'epic', 'pressing!', 'def jam'
	  + 'recordings', 'original!', 'remix', 'pressing!!', 'vanguard', 'freestyle', 'debut', 'muggs', 'celluloid',
	  + 'pressing!!!', 'ep', 'on', 'top', 'elektra', '4th', '&', 'b\'way'
	  + 'plateau', 'pressing!!!'
      ];

      query = query.toString();
      query = query.toLowerCase();
      query = query.split(' ');
      query = _.difference(query, blacklist);
      query = query.join(' ');
      query = query.split('/')[0];
      query = encodeURIComponent(query);
      return query;
    }
  });

  // Default Collection.
  Sample.Collection = Backbone.Collection.extend({
    model: Sample.Model
  });

  // Default View.
  Sample.Views.Item = Backbone.Layout.extend({
    template: 'sample',
    serialize: function(){
      return {
	model: this.model
      };
    },

    initialize: function(){
      this.listenTo(this.model, {
	'change': this.render,
	'fetch': function() {
	  this.$el.html('fetching...');
	}
      });
    },

    events: {
      'click .add-to-playlist': 'addToPlaylist',
      'click .refine': 'refine'
    },

    parse: function(data){
      console.log('model parse',data);
    },

    addToPlaylist: function(e){
      e.preventDefault();
      var playlist = [];
      var i = $('iframe').attr('src');
      var spotify = $(e.currentTarget).data('spotify');
      playlist.push(spotify);
      playlist = playlist.join(',');
      i += ',' + playlist;
      $('iframe').attr('src', i);
    },

    refine: function(){
      this.model.term = encodeURIComponent(this.$('.refine-search').val());
      this.model.fetch();
    }

    // beforeRender: function(){
    //   console.log('i am rendering');
    // }

  });

  // Return the module for AMD compliance.
  return Sample;

});
