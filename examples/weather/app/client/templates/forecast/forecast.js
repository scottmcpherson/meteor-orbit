/*****************************************************************************/
/* Forecast: Event Handlers */
/*****************************************************************************/
Template.Forecast.events({
});

/*****************************************************************************/
/* Forecast: Helpers */
/*****************************************************************************/
Template.Forecast.helpers({
  weather: function () {
    return Session.get('weather');
  },
  weatherIcon: function () {
    if(_.contains(CLOUDY, this.code))
      return 'ion-ios-cloudy-outline';
    else if(_.contains(PARTLY_CLOUDY, this.code))
      return 'ion-ios-partlysunny-outline';
    else if(_.contains(SUNSHINE, this.code))
      return 'ion-ios-sunny-outline';
    else if(_.contains(RAIN, this.code))
      return 'ion-ios-rainy-outline';
    else if(_.contains(THUNDER_STORMS, this.code))
      return 'ion-ios-thunderstorm-outline';
    else if(_.contains(SNOW, this.code))
      return 'ion-ios-snowy;'
  },
});

/*****************************************************************************/
/* Forecast: Lifecycle Hooks */
/*****************************************************************************/
Template.Forecast.onCreated(function () {
});

Template.Forecast.onRendered(function () {
});

Template.Forecast.onDestroyed(function () {
});
