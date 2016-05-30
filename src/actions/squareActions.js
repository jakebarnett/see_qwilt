var AppDispatcher = require('../dispatcher/AppDispatcher.js')
var Q             = require('q');
var request       = require('superagent')

SquareActions = {
	getProjectSquares: function (projectId) {
		request("http://localhost:3000/projects/" + projectId + "/squares")
		.end(function(err, res) {
			if (err || !res.ok) {
				console.log(err);
			} else {
				AppDispatcher.dispatch({
					type: 'fetch-project-squares',
					payload: res.body,
					projectId: projectId
				})
			}
		})
	},
	
	update: function(projectId, squareId, title) {
		request
			.put("http://localhost:3000/projects/" + projectId + "/squares/" + squareId)
			.send({ used: true, title: title })
			.set('Accept', 'application/json')
			.end(function(err, res) {
				if (err || !res.ok) {
					console.log(err);
				} else {
					AppDispatcher.dispatch({
						type:'square-saved',
						payload: res.body
					})
				}
			})
	}
	
	
	
	
}

module.exports = SquareActions
