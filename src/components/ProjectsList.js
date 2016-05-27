var React = require('react');
var projectsListStore = require('../stores/projectsListStore.js');
var ProjectActions = require('../actions/projectActions.js');
var Project = require('./Project.js')

var ProjectsList = React.createClass({
	render: function () {
		var projectsList = [];
		
		this.props.projectsList.forEach(function(project){
			projectsList.push(
				<Project title={project.title} description={project.description} id={project.id} />
			)
		});
		
		return (
			<div>
				{projectsList}
			</div>
		)
	}
})

module.exports = ProjectsList
