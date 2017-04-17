import React, { Component } from 'react'
import { Posts } from '../containers'
//this is real component instead of containers.
class Home extends Component {
	render(){
		return (
			<div className="container">
				Home Layout
				<div className="row">

		<div className="col-md-3">
			MAP


		</div>
		<div className="col-md-6">
			<Posts />


		</div>

		<div className="col-md-3">
			ACCOUNT

		</div>


	</div>
			</div>
		)
	}
}

export default Home
