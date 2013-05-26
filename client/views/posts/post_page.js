Template.postPage.helpers({
  currentPost: function() {
    return Posts.findOne(Session.get('currentPostId')); // id as an argument is a shorthand for {_id: id} если в качестве селектора передаётся только одна строка, считается, что от _id. Если хочешь селектировать по _id, просто передай строку
  }
});