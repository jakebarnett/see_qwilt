var React 						= require('react');
var ProjectsList 			= require('./ProjectsList.js');
var CreateProject 		= require('./CreateProject.js');
var ProjectsListStore = require('../stores/projectsListStore.js');
var ProjectActions 		= require('../actions/projectActions.js');
var request 					= require('superagent');


var QwiltApp = React.createClass({
	getInitialState: function() {
		return {
			data: {
				owner: [{title: "Loading...", description: ""}],
				admin: [{title: "Loading...", description: ""}],
				collaborator: [{title: "Loading...", description: ""}],
			}
		}
	},
	
	componentDidMount: function() {
    ProjectActions.getAll()
		ProjectsListStore.addChangeListener("DATA_FROM_SERVER", this._onChange);
	},
	
	componentWillUnmount: function() {
		// ProjectActions.getAll().abort();
		// ProjectsListStore.removeChangeListener(this._onChange);
	},

	render: function() {
		return (
			<div>
				<ProjectsList projectsList={this.state.data} editing={this.state.editing} />
				<CreateProject />
			</div>
		)
	},
	
	_onChange: function(data){
		this.setState({
			data: ProjectsListStore.projects
		})
	},
})

module.exports = QwiltApp
