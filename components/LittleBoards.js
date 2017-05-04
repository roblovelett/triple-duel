// Include React
var React = require("react");
var axios = require('axios');

class LittleBoards extends React.Component {
    
    constructor(props) {
        super(props);
				this.state = {
					records: []
				};
    }

    getData() {
        axios.get('leaderboard')
					.then((res) => {
						this.setState({records: res.data})
					}).catch(function(error) {
						console.log(error);
					})
    }

    componentWillMount() {
      this.getData();
    }

		renderRecords() {
			return this.state.records.map((record) => {
				console.log(record.id);
				return(
					<tr
						key={record.id}
						className='record'>
						<td>{record.User.name}</td>
						<td>{record.wins}</td>
						<td>{record.losses}</td>
						{/*<td>{record.disconnects}</td>*/}
					</tr>
				)
			});
		}

    render() {
<<<<<<< HEAD
        console.log('frm here', this.state.records);
        return (
            <div className='wrapper'>
				<div className='littleboard container center-align'>
					<div className='row littleboard-header'>
						<div className='col s12 m6 l3'>Name</div>
						<div className='col s12 m6 l3'>Wins</div>
						<div className='col s12 m6 l3'>Losses</div>
						<div className='col s12 m6 l3'>Disconnects</div>
					</div>
					<div key='record-id-01' className='row littleboard-user'>
						<div className='col s12 m6 l3'>John Doe</div>
						<div className='col s12 m6 l3'>999</div>
						<div className='col s12 m6 l3'>0</div>
						<div className='col s12 m6 l3'>0</div>
					</div>
					<div key='record-id-02' className='row littleboard-user'>
						<div className='col s12 m6 l3'>Jane Doe</div>
						<div className='col s12 m6 l3'>500</div>
						<div className='col s12 m6 l3'>10</div>
						<div className='col s12 m6 l3'>5</div>
					</div>
					<div key='record-id-03' className='row littleboard-user'>
						<div className='col s12 m6 l3'>Foobar</div>
						<div className='col s12 m6 l3'>0</div>
						<div className='col s12 m6 l3'>999</div>
						<div className='col s12 m6 l3'>25</div>
					</div>
				</div>
			</div>
=======
      console.log('frm here', this.state.records);
      return (
        <div className='leaderboards'>
					<table className='leaderboards-table'>
						<th>User Name</th>
						<th>Wins</th>
						<th>Losses</th>
						{/*<th>disconnects</th>*/}
						{this.renderRecords()}
					</table>
				</div>
>>>>>>> 031167b6789b900c705eb680700cf26eb3b84ad6
        );
    }
};

module.exports = LittleBoards;
