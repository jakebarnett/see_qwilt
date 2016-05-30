var React = require('react');
var ProjectActions = require('../actions/projectActions.js');
var ProjectListing = require('./ProjectListing.js')

var ProjectsList = React.createClass({
	render: function () {
		var projectsList = [];
		
		this.props.projectsList.forEach(function(project){
			projectsList.push(
				<ProjectListing title={project.title} description={project.description} id={project.id} />
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
