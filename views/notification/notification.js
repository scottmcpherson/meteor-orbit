var VALID_KEYS = ['static', 'dynamic'];

// For now, store blaze notification
// views in this dictionary
var notifications = {};

Orbit.notify = function(type, options) {
  var type = type;
  var options = options || {};

  // Default to dynamic
  var containerClass = 'notification-container';
  var position = options.position || 'top-right';


  if (!_.isString(type) || !_.contains(VALID_KEYS, type)) {
    console.error('Please specify a notification type of ' + VALID_KEYS.join('or '));
    return;
  };

  if (type === 'static') {
    containerClass = 'static-notification';
  }

  var notificationId = Random.id();

  var data = _.extend(options, {
    type: type,
    position: position,
    notificationId: notificationId,
    containerClass: containerClass
  });

  var _blazeView = Blaze.renderWithData(Template._notification, data, document.body);
  notifications[notificationId] = _blazeView;

};

Template._notification.events({
  'click .close-button': function (e, template) {
    var self = this;
    if (_.has(notifications, this.notificationId)) {
      template.$('.notification').removeClass('fadeIn');
      Meteor.setTimeout(function () {
        Blaze.remove(notifications[self.notificationId]);
        delete notifications[self.notificationId];
      }, 400);
    }
  },
})

Template._notification.onRendered(function () {
  var self = this;
  // For now, just fade it in. Would be nice
  // to tap into foundation's animations.
  this.$('.notification').addClass('fadeIn');

  if (this.data.autoclose) {
    Meteor.setTimeout(function () {
      if (self.data && _.has(notifications, self.data.notificationId)) {
        self.$('.notification').removeClass('fadeIn');

        Meteor.setTimeout(function () {
          Blaze.remove(notifications[self.data.notificationId]);
        }, 400);
      }
    }, this.data.autoclose);
  }
});