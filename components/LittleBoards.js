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
        );
    }
};

module.exports = LittleBoards;
