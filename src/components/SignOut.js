var React = require('react');
var sessionActions = require('../actions/sessionActions.js');
var SessionStore = require('../stores/SessionStore.js')

var signOut = React.createClass({
	render: function() {
		return (
			<button onClick={this._signOut}>Sign Out</button>
		)
	},
	
	_signOut: function(e) {
		e.preventDefault;
		localStorage.setItem("qwilt_token", "")
		window.location.assign("http://localhost:8080/#/signin")
	}
})

module.exports = signOut
