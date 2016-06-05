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
									<button id="viewProject" onClick={this._viewProject}>View</button>
								</div>
		return(
			<div class="project-list">
				{ info }
			</div>
		)
	},
	
	_viewProject: function() {
		location='http://localhost:8080/#/project/' + this.props.id
	},
})

module.exports = ProjectListing;
