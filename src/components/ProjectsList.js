var React = require('react');
var ProjectActions = require('../actions/projectActions.js');
var ProjectListingOwner = require('./ProjectListingOwner.js')
var ProjectListingAdmin = require('./ProjectListingAdmin.js')
var ProjectListingCollaborator = require('./ProjectListingCollaborator.js')

var ProjectsList = React.createClass({
	render: function () {
		var ownerList = [];
		var adminList = [];
		var collaboratorList = [];
		
		this.props.projectsList.owner.forEach(function(project){
			ownerList.push(
				<ProjectListingOwner title={project.title} description={project.description} id={project.id} />
			)
		});
		
		this.props.projectsList.admin.forEach(function(project){
			adminList.push(
				<ProjectListingAdmin title={project.title} description={project.description} id={project.id} />
			)
		});
		
		this.props.projectsList.collaborator.forEach(function(project){
			collaboratorList.push(
				<ProjectListingCollaborator title={project.title} description={project.description} id={project.id} />
			)
		});
		
		return (
			<section className ="projects-list-view">
				<div className="projects-list-group">
					<h1>PROJECTS YOU OWN</h1>
					{ownerList}
				</div>
				<div className="projects-list-group">
					<h1>PROJECTS YOU CAN CONTRIBUTE TO</h1>
					{adminList}
				</div>
				<div className="projects-list-group">
					<h1>PROJECTS YOU CAN VIEW</h1>
					{collaboratorList}
				</div>
			</section>
		)
	}
})

module.exports = ProjectsList
