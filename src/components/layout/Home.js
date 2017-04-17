import React, { Component } from 'react'
import { Posts, MapNavigation} from '../containers'

//this is real component instead of containers.
import {Map,Header} from '../view'
//mpa here is not good need container to passdown the props
// import {Map} from '../view' will remove away will replace by container
//must in container not out side of contianer
class Home extends Component {
	render(){
		return (

			<div className="container">
			  <Header />
				Home Layout
				<div className="row">
					<div className="col-md-3">

								<MapNavigation/>
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
