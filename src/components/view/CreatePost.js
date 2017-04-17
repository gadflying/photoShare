import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class CreatePost extends Component {
	render(){
		return (
			<div >
			CreatePost Layout
			<Dropzone style={{border:'none'}}>
			   <button>Upload Image</button>
			</Dropzone>
			</div>
		)
	}
}

export default CreatePost
