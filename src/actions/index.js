import constants from '../constants'
//fetchPosts was used in Posts.js
//here we run api call
import{APIManager} from '../utils'

export default{
  //where post actually received constants.POSTS_RECEIVED: this
  //this dispatch so that reducers know that , first container ---> actions--->reducers

  //tell action to go get post the action name is fetchPosts
  // const dispatchToProps = (dispatch)=>{
  //   return {
  //     fetchPosts:(params)=>dispatch(actions.fetchPosts(params))
  //   }
  // } hi action you go and get post
  //response.resultsfrom containers
//in action we send get response // and get response result
  fetchPosts:(params)=>{
      return (dispatch)=>{
        APIManager
        .get('/api/post',null)
        .then(response=>{
          console.log('response'+JSON.stringify(response))
          dispatch({
            type:constants.POSTS_RECEIVED,
            posts:response.results
          })
        })
        .catch((err)=>{
          console.log('ERROR: '+err)
        })
      }
  },//here is comma
  postsRecieved:(posts)=>{
    return{
      type:constants.POSTS_RECEIVED,
      posts:posts
    }
  }
}
