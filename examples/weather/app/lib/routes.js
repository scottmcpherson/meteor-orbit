Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'weather',
  controller: 'WeatherController',
  action: 'action',
  where: 'client'
});

Router.route('like', {
  name: 'like',
  controller: 'LikeController',
  action: 'action',
  where: 'client'
});


Router.route('forecast', {
  name: 'forecast',
  controller: 'ForecastController',
  action: 'action',
  where: 'client'
});