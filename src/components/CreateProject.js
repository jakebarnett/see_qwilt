var React = require('react');
var projectsListStore = require('../stores/projectsListStore.js');
var ProjectActions = require('../actions/projectActions.js');


var CreateProject = React.createClass({
	render: function() {
		return(
				<form id="createProject" onSubmit={this._handleSubmit}>
					<label for="projectTitle">Title</label>
					<input type="text" name="projectTitle" id="projectTitle"></input><br></br>
					<label for="projectDescription">description</label>
					<input type="text" name="projectDescription" id="projectDescription"></input><br></br>
					<input type="submit" id="newProjectSubmit" value="Submit"></input>
				</form>
		)
	},
	
	_handleSubmit: function (e) {
		e.preventDefault();
		data = {
			title: document.getElementById("projectTitle").value,
			description: document.getElementById("projectDescription").value
		}
		ProjectActions.createNew(data)
		document.getElementById("projectTitle").value = ""
		document.getElementById("projectDescription").value = ""
	}
})



module.exports = CreateProject;
