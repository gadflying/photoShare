import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
//
import sha1 from 'sha1'
import {APIManager} from '../../utils'

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

imageSelected(files){
	console.log('imageSelected')
	const image=files[0]
	// here end to send sever
	const cloudName = 'duq8c0cnt'
	const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
	const timestamp = Date.now()/1000
		const uploadPreset = 'spqww0et'

		const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'InLYTCAwPNLQIuCs0Lq4YlaMqsM'
// hashing messages with the SHA-1 algorithm
//var sha1 = require('sha1');
// sha1("message");
// This will return the string:
// "6f9b9af3cd6e8b8a73c2cdced37fe9f59226e27d"

		const signature = sha1(paramsStr)
		const params = {
			'api_key': '967535936313619',
			'timestamp': timestamp,
			'upload_preset': uploadPreset,
			'signature': signature
		}

		APIManager.uploadFile(url, image, params)
		.then((uploaded) => {
			console.log('Upload Complete: call back from component '+JSON.stringify(uploaded))
			//uploaded return from cloudinary
			// let updated = Object.assign({}, this.state.post)//after load we
			// updated['image'] = uploaded['secure_url']
			// this.setState({
			// 	post: updated
			// })

			// Cloudinary returns this: {"public_id":"w2wah5zepcihbdvpky3v","version":1484004334,"signature":"cee9e534a282591c60fb83f8e7bdb028108ab6b3","width":360,"height":360,"format":"png","resource_type":"image","created_at":"2017-01-09T23:25:34Z","tags":[],"bytes":21776,"type":"upload","etag":"d5d83eeac7bc222569a7cef022426c9f","url":"http://res.cloudinary.com/dcxaoww0c/image/upload/v1484004334/w2wah5zepcihbdvpky3v.png","secure_url":"https://res.cloudinary.com/dcxaoww0c/image/upload/v1484004334/w2wah5zepcihbdvpky3v.png","original_filename":"apple"}

		})
		.catch((err) => {
			alert(err)
		})

}
	render(){
		return (
			<div >
			CreatePost Layout
			<Dropzone onDrop ={this.imageSelected.bind(this)} style={{border:'none'}}>
			   <button>Upload Image</button>
			</Dropzone>
				<input id="caption" onChange={this.updatePost.bind(this)} type="text" placeholder="Caption" />
				<button onClick={this.submitPost1.bind(this)}>Submit</button>

			</div>
		)
	}
}

export default CreatePost
