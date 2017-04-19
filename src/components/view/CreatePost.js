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
	//submit to sever
	event.preventDefault()
	if(this.state.post.image.length==0){
		//if did not post any image and click submit post
		alert('please post image')
		return
	}
	if (this.state.post.caption.length == 0){
			alert('Please add a caption.')
			return
		}

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
			let updated = Object.assign({}, this.state.post)//after load we get secureurl for each image
			updated['image'] = uploaded['secure_url']//image: {type:String, default:''}, this from schema
			this.setState({
				post: updated
			})//拿到状态中的post 进行改变然后更新 状态的post

			// Cloudinary returns this: {"public_id":"me1zmklzjgmynxbyo9gf","version":1492545528,
			//"signature":"4c0e62697d554f768c77da31f7b74dbd28067745",
			//"width":2398,"height":382,"format":"png","resource_type":"image","created_at":"2017-04-18T19:58:48Z","tags":[],"bytes":127960,"type":"upload","etag":"db6325baf1b5b5c5e6d3deabb5b5e8cc","url":"http://res.cloudinary.com/duq8c0cnt/image/upload/v1492545528/me1zmklzjgmynxbyo9gf.png","secure_url":"https://res.cloudinary.com/duq8c0cnt/image/upload/v1492545528/me1zmklzjgmynxbyo9gf.png","original_filename":"Screen Shot 2017-02-27 at 1.50.48 PM"}

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
