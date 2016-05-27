var request = require('superagent')
var Q = require('q');

var asyncRequest = {
	fetch: function () {
		var promise = Q( request.get('http://localhost:3000/projects') )
		return promise
	}
}

module.exports = asyncRequest
