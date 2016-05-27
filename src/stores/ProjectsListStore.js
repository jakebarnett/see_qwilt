var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');


var projectsListStore = assign({}, EventEmitter.prototype, {
  
  projectList: [],
  
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
  if (action.type == "fetch-projects") {
    projectsListStore.projects = action.payload
    projectsListStore.emitChange("DATA_FROM_SERVER");
  }
  
  if (action.type == "add-new-project") {
    projectsListStore.projects.push(action.payload)
    projectsListStore.emitChange("DATA_FROM_SERVER");
  }
  
  if (action.type == "remove-project") {
    projectsListStore.projects = projectsListStore.projects.filter(function(project){
      return project.id !== action.payload.id
    })
    projectsListStore.emitChange("DATA_FROM_SERVER");
  }
    
  if (action.type == "update-project") {
    var index = projectsListStore.projects.findIndex(function(project){
      return project.id == action.payload.id
    })
    projectsListStore.projects[index] = action.payload
    projectsListStore.emitChange("DATA_FROM_SERVER");
  }
});

module.exports = projectsListStore;
