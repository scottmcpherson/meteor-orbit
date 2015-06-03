Template.renderOffCanvas.events({
  'click .reveal-off-canvas': function (e) {
    Session.set('isOffCanvas', !Session.get('isOffCanvas'));
  },
});

Template.removeOffCanvas.events({
  'click .dismiss-off-canvas': function (e) {
    Session.set('isOffCanvas', false);
  },
});

Template.offCanvas.helpers({
  revealOffCanvasClass: function () {
    return (Session.get('isOffCanvas')) ?  'left is-active' : '';
  }
})