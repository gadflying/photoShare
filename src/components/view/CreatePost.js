import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
//
class CreatePost extends Component {
	constructor(){
	super()
	this.state = {
		post: {
			image: '',
			caption: ''
		}
	}
}

updatePost(event){
	event.preventDefault()
	let updated = Object.assign({}, this.state.post)//get inital value
	console.log('event.target.value',event.target.value);
	console.log('updated',updated)//here target id is on input caption
	updated[event.target.id] = event.target.value//here is input value updated is empty or
	this.setState({
		post: updated
	})
}

submitPost1(event){
	event.preventDefault()
	console.log('subimtPost: '+JSON.stringify(this.state.post))
	let updated = Object.assign({}, this.state.post)
	this.props.onCreate(updated)//this onCreat not exist in so we need to pass this onCreat function
	//from containers to view
	//updated == post give it to posts container as post 
}

	render(){
		return (
			<div >
			CreatePost Layout
			<Dropzone style={{border:'none'}}>
			   <button>Upload Image</button>
			</Dropzone>
				<input id="caption" onChange={this.updatePost.bind(this)} type="text" placeholder="Caption" />
				<button onClick={this.submitPost1.bind(this)}>Submit</button>

			</div>
		)
	}
}

export default CreatePost
