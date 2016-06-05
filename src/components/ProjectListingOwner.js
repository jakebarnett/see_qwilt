var React = require('react');
var projectsListStore = require('../stores/projectsListStore.js');
var ProjectActions = require('../actions/projectActions.js');

var ProjectListing = React.createClass({
	getInitialState: function() {
		return {
			editing: false
		}
	},

	render: function() {
		var info =	<div>
									<h2>{this.props.title}</h2>
									<p>{this.props.description}</p>
									<p>{this.state.editing}</p>
									<button id="deleteProject" onClick={this._delete}>DELETE</button>
									<button id="editProject" onClick={this._edit}>Edit</button>
									<button id="viewProject" onClick={this._viewProject}>View</button>
								</div>
		if (this.state.editing == true) {
				info =	<div>
									<h2>{this.props.title}</h2>
									<p> Title </p>
									<input id="projectTitle" defaultValue={this.props.title}></input>
									<p> Description </p>
									<input id="projectDescription" defaultValue={this.props.description}></input>
									<p>{this.state.editing}</p>
									<button id="saveProject" onClick={this._save}>Save</button>
									<button id="cancelEdit" onClick={this._edit}>Cancel</button>
								</div>
		}
		return(
			<div class="project-listing">
				{ info }
			</div>
		)
	},
	
	_viewProject: function() {
		location='http://localhost:8080/#/project/' + this.props.id
	},

	_edit: function (e) {
		if ( this.state.editing == true ) {
			this.setState({ editing: false })
		} else {
			this.setState({ editing: true })
		}
	},
	
	_delete: function (e) {
		e.preventDefault();
		ProjectActions.delete(this.props.id)
	},
	
	_save: function () {
		var data = {
			id:						this.props.id,
			title: 				document.getElementById("projectTitle").value,
			description: 	document.getElementById("projectDescription").value
		}
		ProjectActions.update(data)
		this.setState({ editing: false })
	}
})

module.exports = ProjectListing;
