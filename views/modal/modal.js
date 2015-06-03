var _modalView;

Orbit.modal = {
  create: function (data, parentData) {
    var data = data || {};

    if (parentData)
      data = _.extend(data, { parentData: parentData });

    // We might loose reactivity here.
    blazeView = Blaze.renderWithData(Template._modal, data, document.body);

    // If Orbit.ModalView has been created
    if (_.isObject(_modalView))
      _modalView._blazeView = blazeView;
  },
};


Orbit.ModalView = function (options) {
  options = options || {};
  this._blazeView = options._blazeViewiew || null;
  this.selector = options.selector || '.modal-view';
  this.transitionClass = options.transitionClass || 'slide-up';
};

Orbit.ModalView.prototype = new Orbit.View();

_.extend(Orbit.ModalView.prototype, {
  slideUp: function () {
    console.log('transition up:', this);
  }
});

Template._modal.events({
  'click .modal': function (e) {
    e.stopPropagation();
  },
  'click .modal-overlay': function (e) {
    var self = this;

    // if ()
    var modal = Template.closestInstance.call(self, 'Template._modal');

    if (! _.isUndefined(modal))
      modal._modalView.dismissModal();
    else
      console.error("Problem finding the Modal");
  },
});

Template._modal.helpers({
  getParentData: function () {
    if (this.parentData)
      return this.parentData;
  },
});

Template._modal.onCreated(function () {
  _modalView = new Orbit.ModalView();

  if (this.data && this.data.handle)
    Orbit[this.data.handle] = _modalView;

  this._modalView = _modalView;
});

Template.renderModal.events({
  'click .reveal-modal': function (e) {
    var self = this;

    if (this.modal && ! Orbit._modal)
      Orbit.modal.create(self, Template.parentData());
  },
});

Template.removeModal.events({
  'click .dismiss-modal': function (e) {
    var self = this;
    var modal = Template.closestInstance.call(self, 'Template._modal');

    if (! _.isUndefined(modal))
      modal._modalView.dismissModal();
    else
      console.error("Could not find the Modal");
  },
});


Template._modal.onRendered(function () {
  var self = this;
  $(self.find('.modal-overlay')).removeClass('hidden');
});