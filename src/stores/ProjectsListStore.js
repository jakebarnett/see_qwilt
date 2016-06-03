var AppDispatcher = require('../dispatcher/AppDispatcher.js');
var EventEmitter  = require('events').EventEmitter;
var assign        = require('object-assign');

var ProjectListStore = assign({}, EventEmitter.prototype, {
  
  projectList: [],
  
  projects: {},
  
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
    ProjectListStore.projects = action.payload
    ProjectListStore.emitChange("DATA_FROM_SERVER");
  }
  
  if (action.type == "add-new-project") {
    ProjectListStore.projects.push(action.payload)
    ProjectListStore.emitChange("DATA_FROM_SERVER");
  }
  
  if (action.type == "remove-project") {
    ProjectListStore.projects = ProjectListStore.projects.filter(function(project){
      return project.id !== action.payload.id
    })
    ProjectListStore.emitChange("DATA_FROM_SERVER");
  }
    
  if (action.type == "update-project") {
    var index = ProjectListStore.projects.findIndex(function(project){
      return project.id == action.payload.id
    })
    ProjectListStore.projects[index] = action.payload
    ProjectListStore.emitChange("DATA_FROM_SERVER");
  }
  
  if (action.type == 'fetch-project-squares') {
    ProjectListStore.projects[action.projectId] = action.payload
    ProjectListStore.emitChange("project_squares_fetched");
  }
  
  if (action.type == 'square-saved') {
    updateAdjacent(action.payload);
    ProjectListStore.emitChange("square-saved");
  }
});

function updateAdjacent(payload) {
  var project = payload.project_id
  var used_square = payload.position
  var top = payload.position - 10
  var bottom = payload.position + 10
  var left = payload.position - 1
  var right = payload.position + 1
  var second_digit = Number(String(payload.position)[1])
  
  ProjectListStore.projects[project][used_square] = payload
  if (payload.position > 10) {
    ProjectListStore.projects[project][top].usable = true
  }
  if (payload.position < 90) {
    ProjectListStore.projects[project][bottom].usable = true
  }
  if (payload.position != 0 && second_digit != 0) {
    ProjectListStore.projects[project][left].usable = true
  }
  if(payload.position != 9 && second_digit != 9)
  ProjectListStore.projects[project][right].usable = true
}

module.exports = ProjectListStore;
