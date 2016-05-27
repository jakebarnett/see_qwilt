var AppDispatcher = require('../dispatcher/AppDispatcher');
var asyncRequest  = require('../actions/asyncActions.js')
var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');
var request       = require('superagent')
var Q             = require('q');


var projectsListStore = assign({}, EventEmitter.prototype, {
  // async fetch, returns a promise that is resolved in updateState
  fetchDataFromServer: function () {
    var result = Q( request("http://localhost:3000/projects") );
    this.updateState(result);
  },
  
  // updateState resolves the a promise and fires an action
  updateState: function(result) {
    result.then(function(res){
      AppDispatcher.dispatch({
        type: "DATA_FROM_SERVER",
        payload: res.body
      })
    })
  },
  
  createNew: function (data) {
    request
      .post('http://localhost:3000/projects')
      .send({ title: data.title, description: data.description })
      .set('Accept', 'application/json')
      .end(function(err, res){
        if (err || !res.ok) {
          console.log('Oh no! error', err);
        } else {
          projectsListStore.fetchDataFromServer()
        }
      });
  },
  
  delete: function(id) {
    request
      .delete('http://localhost:3000/projects/' + id)
      .end(function(err, res){
        if (err || !res.ok) {
          console.log('Oh no! error', err);
        } else {
          projectsListStore.fetchDataFromServer()
        }
      });
  },

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
  if (action.type == "DATA_FROM_SERVER") {
    projectsListStore.emitChange("DATA_FROM_SERVER", action.payload);
  }
  
  if (action.type == "UPDATE_STATE") {
    projectsListStore.emitChange("UPDATE_STATE", action.payload);
  }
});

module.exports = projectsListStore;
