var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');


var SessionStore = assign({}, EventEmitter.prototype, {
  
  session: {},
  
  
  emitChange: function(CHANGE_EVENT, data) {
    this.emit(CHANGE_EVENT, data);
  },

  addChangeListener: function(CHANGE_EVENT, callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(CHANGE_EVENT, callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(action) {
  if (action.type == "token-received") {
    SessionStore.session.token = action.payload.auth_token
		SessionStore.session.current_user = action.payload.user
		console.log("token", SessionStore.session.token)
		if (action.payload.auth_token) {
      localStorage.setItem("qwilt_token", SessionStore.session.token);
			window.location.assign("http://localhost:8080")
		} else {
			console.log("error signing in")
		}
  }

});


module.exports = SessionStore;
