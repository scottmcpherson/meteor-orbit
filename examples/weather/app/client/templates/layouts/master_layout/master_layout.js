Session.setDefault('weather');

Template.MasterLayout.helpers({
  city: function () {
    var weather = Session.get('weather');
    if (!_.isEmpty(weather))
      return weather.city + ', ' + weather.region;
  },
  weatherImage: function () {
    var weather = Session.get('weather');
    if (!_.isEmpty(weather) && _.has(CODE_IMAGES, weather.code))
      return CODE_IMAGES[weather.code];
  },
});

Template.MasterLayout.events({
  'click .notify': function (e) {
    Orbit.notify('dynamic', {
      title: 'Sweet!',
      content: 'My Notification Content',
      autoclose: 3000
    });
  },
});

Template.MasterLayout.onRendered( function(){
  var geooptions = {
    enableHighAccuracy: true,
    timeout: 60000,
    maximumAge: 0
  };

  function success(pos) {
    var lat = pos.coords.latitude;
    var lng = pos.coords.longitude;
    var options = {
      location: lat + ',' + lng,
      unit: 'f',
      success: function(weather) {
        console.log(weather);

        Session.set('weather', weather);
      },
      error: function(error) {
        console.log(error);
      }
    };

    Weather.options = options;
    Weather.load();

  };

  function error(err) {
    console.warn('ERROR(' + err.code + '): ' + err.message);
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error, geooptions);
  };

});