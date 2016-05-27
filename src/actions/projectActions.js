AppDispatcher = require('../dispatcher/AppDispatcher.js')

var ProjectActions = {
	
	getAll: function() {
		AppDispatcher.dispatch({
			type:'fetch-projects'
		})
	},
	
	save: function(data) {
		
	},
	
	updateState: function(state) {
		AppDispatcher.dispatch({
			type:'UPDATE_STATE',
			payload: state
		})
	}
}

module.exports = ProjectActions;
