/*****************************************************************************/
/* Weather: Event Handlers */
/*****************************************************************************/
Template.Weather.events({
});

/*****************************************************************************/
/* Weather: Helpers */
/*****************************************************************************/
Template.Weather.helpers({
  weather: function () {
    return Session.get('weather');
  },
});

/*****************************************************************************/
/* Weather: Lifecycle Hooks */
/*****************************************************************************/
Template.Weather.onCreated(function () {
});

Template.Weather.onRendered(function () {
});

Template.Weather.onDestroyed(function () {
});
