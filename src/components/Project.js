var React = require('react');
var Square = require('./Square.js');
var squareActions = require('../actions/squareActions.js');
var ProjectsListStore = require('../stores/ProjectsListStore.js')

var Project = React.createClass({

	getInitialState: function() {
		return {
			data: [ {title: "Loading..."} ]
		}
	},
	
	componentDidMount: function() {
		squareActions.getProjectSquares(this.props.params.projectId)
		ProjectsListStore.addChangeListener("project_squares_fetched", this._projectData);
		ProjectsListStore.addChangeListener("square-saved", this._projectData);
	},
	
	// render: function() {
	// 	var compnentArray = [];
	// 	var tableRow = [];
	// 	var squares = Array.from(this.state.data);
	// 	var row = [];
	//
	//
	// 	// if (this.state) {
	//
	// 		// squares.forEach(function(square, index) {
	// 			// tableRow.push(<Square data={square} />)
	// 			// if (index != 0 && index % 9 == 0) {
	// 			// 	var tr = document.createElement("TR")
	// 			// 	tableRow.push(tr)
	// 				// var qwilt = document.getElementById('qwilt')
	//
	// 				// qwilt.appendChild(tr);
	// 				// console.log(tableRow)
	// 				// qwilt.lastChild.appendChild(tableRow);
	// 				// tableRow = [];
	// 			// }
	// 		// })
	// 	// }
	//
	//
	// 	return(
	// 		<table id="qwilt">
	// 			<tbody>
	// 				<tr>
	// 				{this.state.data.forEach(function(square, index) {
	// 					row.push(<Square data={square} />)
	// 					return row
	// 				})}
	// 				</tr>
	// 			</tbody>
	// 		</table>
	// 	)
	// },
	
	render: function() {
		return(
			<table>
				<tbody>
					<tr>
						<td><Square data={this.state.data[0]}/></td>
						<td><Square data={this.state.data[1]}/></td>
						<td><Square data={this.state.data[2]}/></td>
						<td><Square data={this.state.data[3]}/></td>
						<td><Square data={this.state.data[4]}/></td>
						<td><Square data={this.state.data[5]}/></td>
						<td><Square data={this.state.data[6]}/></td>
						<td><Square data={this.state.data[7]}/></td>
						<td><Square data={this.state.data[8]}/></td>
						<td><Square data={this.state.data[9]}/></td>
					</tr>
					<tr>
						<td><Square data={this.state.data[10]}/></td>
						<td><Square data={this.state.data[11]}/></td>
						<td><Square data={this.state.data[12]}/></td>
						<td><Square data={this.state.data[13]}/></td>
						<td><Square data={this.state.data[14]}/></td>
						<td><Square data={this.state.data[15]}/></td>
						<td><Square data={this.state.data[16]}/></td>
						<td><Square data={this.state.data[17]}/></td>
						<td><Square data={this.state.data[18]}/></td>
						<td><Square data={this.state.data[19]}/></td>
					</tr>
					<tr>
						<td><Square data={this.state.data[20]}/></td>
						<td><Square data={this.state.data[21]}/></td>
						<td><Square data={this.state.data[22]}/></td>
						<td><Square data={this.state.data[23]}/></td>
						<td><Square data={this.state.data[24]}/></td>
						<td><Square data={this.state.data[25]}/></td>
						<td><Square data={this.state.data[26]}/></td>
						<td><Square data={this.state.data[27]}/></td>
						<td><Square data={this.state.data[28]}/></td>
						<td><Square data={this.state.data[29]}/></td>
					</tr>
					<tr>
						<td><Square data={this.state.data[30]}/></td>
						<td><Square data={this.state.data[31]}/></td>
						<td><Square data={this.state.data[32]}/></td>
						<td><Square data={this.state.data[33]}/></td>
						<td><Square data={this.state.data[34]}/></td>
						<td><Square data={this.state.data[35]}/></td>
						<td><Square data={this.state.data[36]}/></td>
						<td><Square data={this.state.data[37]}/></td>
						<td><Square data={this.state.data[38]}/></td>
						<td><Square data={this.state.data[39]}/></td>
					</tr>
					<tr>
						<td><Square data={this.state.data[40]}/></td>
						<td><Square data={this.state.data[41]}/></td>
						<td><Square data={this.state.data[42]}/></td>
						<td><Square data={this.state.data[43]}/></td>
						<td><Square data={this.state.data[44]}/></td>
						<td><Square data={this.state.data[45]}/></td>
						<td><Square data={this.state.data[46]}/></td>
						<td><Square data={this.state.data[47]}/></td>
						<td><Square data={this.state.data[48]}/></td>
						<td><Square data={this.state.data[49]}/></td>
					</tr>
					<tr>
						<td><Square data={this.state.data[50]}/></td>
						<td><Square data={this.state.data[51]}/></td>
						<td><Square data={this.state.data[52]}/></td>
						<td><Square data={this.state.data[53]}/></td>
						<td><Square data={this.state.data[54]}/></td>
						<td><Square data={this.state.data[55]}/></td>
						<td><Square data={this.state.data[56]}/></td>
						<td><Square data={this.state.data[57]}/></td>
						<td><Square data={this.state.data[58]}/></td>
						<td><Square data={this.state.data[59]}/></td>
					</tr>
					<tr>
						<td><Square data={this.state.data[60]}/></td>
						<td><Square data={this.state.data[61]}/></td>
						<td><Square data={this.state.data[62]}/></td>
						<td><Square data={this.state.data[63]}/></td>
						<td><Square data={this.state.data[64]}/></td>
						<td><Square data={this.state.data[65]}/></td>
						<td><Square data={this.state.data[66]}/></td>
						<td><Square data={this.state.data[67]}/></td>
						<td><Square data={this.state.data[68]}/></td>
						<td><Square data={this.state.data[69]}/></td>
					</tr>
					<tr>
						<td><Square data={this.state.data[70]}/></td>
						<td><Square data={this.state.data[71]}/></td>
						<td><Square data={this.state.data[72]}/></td>
						<td><Square data={this.state.data[73]}/></td>
						<td><Square data={this.state.data[74]}/></td>
						<td><Square data={this.state.data[75]}/></td>
						<td><Square data={this.state.data[76]}/></td>
						<td><Square data={this.state.data[77]}/></td>
						<td><Square data={this.state.data[78]}/></td>
						<td><Square data={this.state.data[79]}/></td>
					</tr>
					<tr>
						<td><Square data={this.state.data[80]}/></td>
						<td><Square data={this.state.data[81]}/></td>
						<td><Square data={this.state.data[82]}/></td>
						<td><Square data={this.state.data[83]}/></td>
						<td><Square data={this.state.data[84]}/></td>
						<td><Square data={this.state.data[85]}/></td>
						<td><Square data={this.state.data[86]}/></td>
						<td><Square data={this.state.data[87]}/></td>
						<td><Square data={this.state.data[88]}/></td>
						<td><Square data={this.state.data[89]}/></td>
					</tr>
					<tr>
						<td><Square data={this.state.data[90]}/></td>
						<td><Square data={this.state.data[91]}/></td>
						<td><Square data={this.state.data[92]}/></td>
						<td><Square data={this.state.data[93]}/></td>
						<td><Square data={this.state.data[94]}/></td>
						<td><Square data={this.state.data[95]}/></td>
						<td><Square data={this.state.data[96]}/></td>
						<td><Square data={this.state.data[97]}/></td>
						<td><Square data={this.state.data[98]}/></td>
						<td><Square data={this.state.data[99]}/></td>
					</tr>
				</tbody>
			</table>
		)
	},
		
	_projectData: function() {
		this.setState({
			data: ProjectsListStore.projects[this.props.params.projectId]
		})
	}

})

module.exports = Project;
