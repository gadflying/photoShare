import React,{Component}from 'react'
import { APIManager } from '../../utils'
import {connect} from 'react-redux'
import actions from '../../actions'
import {CreatePost} from '../view'

class Posts extends Component{
// APIManager.get('/api/comment') 这里会调用存在api comment 中的数据
//here we get then the data //here we send to reducer.
  componentDidMount(){
		// APIManager.get('/api/comment',null)
    // .then(response=>{
    //   console.log('response'+JSON.stringify(response))
    // })
    // .catch((err)=>{
    //   console.log('ERROR: '+err)
    // }) when you get post you need to make
    this.props.fetchPosts(null)
	}
  //here this props posts the name of posts is determined by
  // const stateToProps = (state) => {
  // 	return {
  // 		posts: state.post
  // 	}
  // }这里为什么和reducer 联系在一起因为
  componentDidUpdate(){
    console.log('componentDidUpdate: ')
    // if (this.props.posts.list == null)
    //   this.props.fetchPosts(null)
  }
  submitPost(post){
    //postReducer  又名 post
    // {"image":"","caption":"gogo","geo":[37.63549,-122.4157069],"tempt":"tempt123"}
		const currentLocation = this.props.posts.currentLocation
		post['geo'] = [
			currentLocation.lat,
			currentLocation.lng,
		]
    post['tempt'] = 'tempt123'

		 console.log('SUBMITPOST: '+JSON.stringify(post))
		// this.props.createPost(post)
    //the post include image and caption
    this.props.createPost(post);
	}

  render(){
    // const list = _id since data from response is
    // const list = this.props.posts.list.map((post, i) => {
    //   return (
    //     <li key={post.id}>{post.caption}</li>
    //   )
    // })
    const list = this.props.posts.list // can be null
    return(
      <div>
      <CreatePost onCreate={this.submitPost.bind(this)}/>
        <ol>
          {/*list*/}
          {
              (list == null) ? null :
            list.map((post, i) => {
              return (
                <li key={post.id}>{post.caption}</li>
              )
            })
         }
        </ol>
      </div>
    )
  }
}
// container 总有一句话链接state到Props reducer 中state 降格为props 右边是reduer 又名
const stateToProps=(state)=>{
  return {
    posts:state.post
  }
}
//tell action to go get post the action name is fetchPosts

const dispatchToProps = (dispatch) => {
	return {
		createPost: (params) => dispatch(actions.createPost(params)),
    fetchPosts: (params) => dispatch(actions.fetchPosts(params))

	}
}

export default connect(stateToProps, dispatchToProps)(Posts)

// ReactDOM.render(<App/>,getElementById('root'));

// export default Posts

//export default connect(stateToProps)(Posts)
