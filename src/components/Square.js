var React = require ('react');
var squareActions = require('../actions/squareActions.js');


var Square = React.createClass({
	getInitialState: function() {
		return { editing: false, }
	},
	
	getDefaultProps: function() {
		return { data: {
			title: "",
			usable: false,
			used: false,
			position: 0,
		} }
	},
	
	render: function () {
		var data = this.props.data;
		var button;
		
		if (data.usable && !data.used) {
			button = <button onClick={this._edit}>Create</button>
		}
		
		if (data.used) {
			status = "in-use"
		} else if (data.usable) {
			status = "usable"
		} else {
			status = "unusable"
		}
		
		var template = 	<div className={status}>
											<h1>{data.title}</h1>
												{button}
											<p>{data.position}</p>
										</div>

		if (this.state.editing) {
				template = 	<div className={status}>
											<input id="squareTitle" defaultValue={this.props.data.title}></input>
												<button onClick={this._update}>Save</button>
											<p>{data.position}</p>
										</div>
		}
		
		return(
			<div>
				{template}
			</div>
		)
	},
	
	_edit: function (e) {
		if ( this.state.editing == true ) {
			this.setState({ editing: false })
		} else {
			this.setState({ editing: true })
		}
	},
	
	_update: function(id) {
		title = document.getElementById("squareTitle").value
		squareActions.update(this.props.data.project_id, this.props.data.id, title)
		this.setState({ editing: false })
	}
})

module.exports = Square
