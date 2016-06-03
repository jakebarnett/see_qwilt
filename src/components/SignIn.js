var React = require('react');
var sessionActions = require('../actions/sessionActions.js');
var SessionStore = require('../stores/SessionStore.js')

var signIn = React.createClass({
	render: function() {
		return (
			<form id="login">
				<input id="login-username" placeholder="username" />
				<input id="login-password" type="password" />
				<input id="login-submit" type="submit" value="Login" onClick={this._signIn}/>
			</form>
		)
	},
	
	_signIn: function(e) {
		e.preventDefault;
		creds = {
			username: document.getElementById('login-username').value,
			password: document.getElementById('login-password').value
		}
		sessionActions.signIn(creds)
	}
})

module.exports = signIn
