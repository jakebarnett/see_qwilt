var React = require('react');
var ProjectsList = require('./ProjectsList.js');
var CreateProject = require('./CreateProject.js');
var projectsListStore = require('../stores/projectsListStore.js');
var request = require('superagent');


function fetchProjectsListState () {
  var projectsList = projectsListStore.getAll()
	console.log("1", projectsList)
	return {
		projectsList: projectsList
	}
}

var QwiltApp = React.createClass({
	getInitialState: function() {
		return {
			data: [{title: "Loading...", description: "(be patient)"}],
		}
	},
	
	componentDidMount: function() {
		projectsListStore.addChangeListener("DATA_FROM_SERVER", this._onChange);
		this.serverRequest = request("http://localhost:3000/projects", function (err, result) {
			var result = JSON.parse(result.text)
			this.setState({
				data: result
			});
		}.bind(this));
	},
	
	componentWillUnmount: function() {
		projectsListStore.removeChangeListener(this._onChange);
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
			data: data
		})
	},
  

  
  
	
})

module.exports = QwiltApp
