import React,{Component}from 'react'
import { APIManager } from '../../utils'
import {connect} from 'react-redux'
import actions from '../../actions'

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

  render(){
    return(
      <div> here is post entry point
      </div>
    )
  }
}

const stateToProps=(state)=>{
  return {
    posts:state.post
  }
}
//tell action to go get post the action name is fetchPosts

const dispatchToProps = (dispatch) => {
	return {
		fetchPosts: (params) => dispatch(actions.fetchPosts(params))

	}
}

export default connect(stateToProps, dispatchToProps)(Posts)

// ReactDOM.render(<App/>,getElementById('root'));

// export default Posts

//export default connect(stateToProps)(Posts)
