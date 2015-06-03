Session.setDefault('_actionSheetId', '');

Template.actionSheet.events({
  'click .action-sheet-button': function (e) {
    if (Session.equals('_actionSheetId', this._id)) {
      Session.set('_actionSheetId', '');
    } else {
      Session.set('_actionSheetId', this._id);
    }
  },
});

Template.registerHelper('isActionSheetVisible', function () {
  return Session.equals('_actionSheetId', this._id);
});

Template.actionSheet.helpers({
  getParentData: function () {
    return Template.parentData(2);
  },
  actionSheetData: function () {
    var id;
    var parent = Template.parentData(1);

    if (! this.userId)
      id = Random.id();
    else
      id = (!_.isUndefined(parent._id)) ? parent._id : Random.id();

    return _.extend(this, {
      _id: id
    });
  },
  getActionSheetData: function () {
    return _.extend(Template.parentData(2), {
      _id: this._id
    });
  },
  isActive: function () {
    return Session.equals('_actionSheetId', this._id) ? 'is-active' : '';
  },
});

Template.actionSheet.onRendered(function () {

  // If anything other than the action
  // sheet was clicked, we want to close it.
  $(document.body).on('click', function (e) {
    if (!$(e.target).hasClass('action-sheet') &&
        !$(e.target).hasClass('action-sheet-button') &&
        !$(e.target).parents('.action-sheet').length
    ) {
      Session.set('_actionSheetId', '');
    }
  });
});