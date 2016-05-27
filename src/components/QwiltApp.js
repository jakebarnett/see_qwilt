var React = require('react');
var ProjectsList = require('./ProjectsList.js');
var CreateProject = require('./CreateProject.js');
var ProjectsListStore = require('../stores/projectsListStore.js');
var ProjectActions = require('../actions/projectActions.js');
var request = require('superagent');


var QwiltApp = React.createClass({
	getInitialState: function() {
		return {
			data: [{title: "Loading...", description: "(be patient)"}],
		}
	},
	
	componentDidMount: function() {
    ProjectActions.getAll()
		ProjectsListStore.addChangeListener("DATA_FROM_SERVER", this._onChange);
	},
	
	componentWillUnmount: function() {
		ProjectsListStore.removeChangeListener(this._onChange);
		this.serverRequest.abort();
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
