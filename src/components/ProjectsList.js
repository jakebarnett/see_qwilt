var React = require('react');
var projectsListStore = require('../stores/projectsListStore.js');
var projectActions = require('../actions/projectActions.js');



var Project = React.createClass({
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
								</div>
		if (this.state.editing == true) {
			info =	<div>
								<h2>{this.props.title}</h2>
								<p> Title </p>
								<input id="projectTitle" defaultValue={this.props.title}></input>
								<p> Description </p>
								<input id="projectDescription" defaultValue={this.props.description}></input>
								<p>{this.state.editing}</p>
								<button id="saveProject" 		onClick={this._save}>		Save 		</button>
							</div>
		}
		return(
			<div class="project-listing">
				{ info }
				<button id="deleteProject" 	onClick={this._delete}>	DELETE	</button>
				<button id="editProject" 		onClick={this._edit}>		EDIT 		</button>
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
	
	_delete: function (e) {
		e.preventDefault();
		projectsListStore.delete(this.props.id)
	},
	
	_save: function () {
		var data = {}
		data[this.props.id] = {
			title: 				document.getElementById("projectTitle").value,
			description: 	document.getElementById("projectDescription").value
		}
		console.log(data)
	}
})



var ProjectsList = React.createClass({
	render: function () {
		var projectsList = [];
		this.props.projectsList.forEach(function(project){
			projectsList.push(
				<Project
					title={project.title}
					description={project.description}
					id={project.id}
				/>
			)
		})
			
		return (
			<div>
				{projectsList}
			</div>
		)
	}
})

module.exports = ProjectsList
