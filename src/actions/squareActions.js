var AppDispatcher = require('../dispatcher/AppDispatcher.js')
var Q             = require('q');
var request       = require('superagent')

console.log(document.cookie)
SquareActions = {
	getProjectSquares: function (projectId) {
		request
			.get('http://localhost:3000/projects/' + projectId + '/squares')
			.set('Authorization', 'Bearer ' + localStorage.getItem('qwilt_token'))
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
			.put('http://localhost:3000/projects/' + projectId + '/squares/' + squareId)
			.set('Authorization', 'Bearer ' + localStorage.getItem('qwilt_token'))
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
