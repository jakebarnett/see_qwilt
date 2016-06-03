var AppDispatcher = require('../dispatcher/AppDispatcher.js')
var request       = require('superagent')

sessionActions = {
	signIn: function(creds) {
		request
			.post("http://localhost:3000/authenticate")
			.send({ username: creds.username, password: creds.password })
			.set('Accept', 'application/json')
			.end(function(err, res) {
				if (err || !res.ok) {
					console.log(err);
				} else {
					console.log("auth", res.body)
					AppDispatcher.dispatch({
						type:'token-received',
						payload: res.body
					})
				}
			})
	}
}

module.exports = sessionActions
