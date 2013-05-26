Meteor.Router.add({
  '/': 'postsList',
  '/posts/:_id': {
    to: 'postPage', 
    and: function(id) { Session.set('currentPostId', id); }
  },
  '/submit': 'postSubmit',
  '/posts/:_id/edit': {
    to: 'postEdit',
    and: function(id) {Session.set('currentPostId', id);}
  },
  '*': '404'
});

Meteor.Router.filters({
	'requireLogin': function(page) {
		if (Meteor.user()) {
      return page;
    } else if (Meteor.loggingIn()) {
      return 'loading';
    } else return 'accessDenied';
	},
  'clearErrors': function(page) {
    clearErrors();
    return page;
  }
});

Meteor.Router.filter('requireLogin', {only: 'postSubmit'});

Meteor.Router.filter('clearErrors');