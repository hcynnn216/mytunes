// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  tagName: 'tr',
  template: _.template('<td><%= count %></td>  <td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.play();
      this.model.dequeue();
    }
  },

  // initialize: function() {
  //   this.render();
  // },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});

// this.model.attributes {artist: 'Aaliyah'}