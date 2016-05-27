var AppDispatcher = require('../dispatcher/AppDispatcher.js')
var Q             = require('q');
var request       = require('superagent')


var ProjectActions = {
	fetchDataFromServer: function () {
		var result = Q(request("http://localhost:3000/projects"));
		return result
	},

	getAll: function() {
		this.fetchDataFromServer().then(function (res) {
			AppDispatcher.dispatch({
				type:'fetch-projects',
				payload: res.body
			})
		})
	},
	
	createNew: function (data) {
		request
			.post('http://localhost:3000/projects')
			.send({ title: data.title, description: data.description })
			.set('Accept', 'application/json')
			.end(function(err, res) {
				if (err || !res.ok) {
					console.log(err);
				} else {
					AppDispatcher.dispatch({
						type:'add-new-project',
						payload: res.body
					})
				}
			});
	},
	
	delete: function(id) {
		request
			.delete('http://localhost:3000/projects/' + id)
			.end(function(err, res){
				if (err || !res.ok) {
					console.log(err);
				} else {
					console.log(res.body)
					AppDispatcher.dispatch({
						type:'remove-project',
						payload: res.body
					})
				}
			});
	},
	
	update: function(data) {
		request
			.put('http://localhost:3000/projects/' + data.id)
			.send({ title: data.title, description: data.description })
			.set('Accept', 'application/json')
			.end(function(err, res) {
				if (err || !res.ok) {
					console.log(err);
				} else {
					console.log(res)
					AppDispatcher.dispatch({
						type:'update-project',
						payload: res.body
					})
				}
			});
	},
}

module.exports = ProjectActions;
