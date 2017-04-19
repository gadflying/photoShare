import constants from '../constants'
//fetchPosts was used in Posts.js
//here we run api call
import{APIManager} from '../utils'

export default{
//user: response.user here dispatch is in action so it is in user,  actions.user post 并且发送 action 改变reducer
  signup: (params) => {
  return (dispatch) => {
    APIManager
    .post('/account/register', params)
    .then(response => {
      console.log('account/register__action',JSON.stringify(response))
      dispatch({
        type: constants.CURRENT_USER_RECEIVED,
        user: response.user
      })
    })
    .catch((err) => {
      console.log('ERROR: '+err)
    })
  }
},

  updateCurrentLocation:(location)=>{
    return {
      type:constants.CURRENT_LOCATION_CHANGED,
      location:location
    }
  },
  //this is post not get
  createPost:(params)=>{
    return (dispatch)=>{
      APIManager
      .post('/api/post',params)
      .then(response=>{
        console.log('response'+JSON.stringify(response))
        // dispatch({
        //   type:constants.POSTS_RECEIVED,
        //   posts:response.results
        // })
      })
      .catch((err)=>{
        console.log('ERROR: '+err)
      })
    }
  },
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
