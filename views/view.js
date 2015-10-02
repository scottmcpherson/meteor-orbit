Template.closestInstance = function(viewName) {
  var self = this;
  var view = Template.instance().view;
  if (view.name === viewName)
    return Template.instance();

  while (view) {
    view = view.parentView;
    if (! _.isNull(view) && view.name === viewName)
      return view.templateInstance();
  }
};

Orbit.View = function (options) {
  options = options || {};
  this.selector = options.selector || '.view'
};

// Useful down the road?
Orbit.View.prototype = {
  view: function () {
    if (! this.selector)
      return console.error('No View Exist. Selector was not set');
    return $(this.selector);
  }
};