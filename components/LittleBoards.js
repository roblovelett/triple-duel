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
					<li
						key={record.id}
						className='record'>
						{record.wins}
					</li>
				)
			});
		}

    render() {
        console.log('frm here', this.state.records);
        return (
            <div className='wrapper'>
							<ul className='leaderboards'>
								{this.renderRecords()}
							</ul>
						</div>
        );
    }
};

module.exports = LittleBoards;
