import React, { Component } from 'react';

class Powers extends Component {
	
  render() {
		console.log('here', props);
  	<div className="powers">
    	<div className="powers-top">{this.props.up}</div>
      <br/>
			<div className="powers-middle">
				<div>{this.props.left}</div>
				<div>{this.props.right}</div>
			</div>
			<div className="powers-bottom">{this.props.down}</div>
		</div>
  }
}