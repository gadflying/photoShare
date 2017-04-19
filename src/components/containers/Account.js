import React,{Component}from 'react'
import {Register} from '../view'
//after creat container s I gonnna crat a view for this one
import { connect } from 'react-redux'
import actions from '../../actions'

//1. get registration infor from view
//2 . connect with redux. by creating a reducer for account CURRENT_USER_RECEIVED
//3.  call a signup function and register a sigup action  for API work
//4. not want sign up to show when current user so decide whether to show register componnet or not
//  <Register onRegister={this.register.bind(this)}/>
//{(this.props.account.user==null)?null:<Register onRegister ={this.register.bind(this)}/>}
//when wirte the password and user we get user name instead of empty
class Account extends Component{
//container is the one who do all api stuff
//connect redux
  register(registration){
    console.log('registration_in_Container',registration)
		this.props.signup(registration)//signup IN BELOW

	}

  render(){
    const currentUser = this.props.account.user

    return (
      <div>Account Container here
      {(currentUser!=null)?
        <h2>{currentUser.username}</h2> :
        <Register onRegister ={this.register.bind(this)}/>}

      </div>
    )
  }
}

const stateToProps = (state) => {
	return {
		account: state.account
	}
}

const dispatchToProps = (dispatch) => {
	return {
		signup: (params) => dispatch(actions.signup(params)),
		login: (params) => dispatch(actions.login(params)),
		checkCurrentUser: () => dispatch(actions.checkCurrentUser())
	}
}

export default connect(stateToProps, dispatchToProps)(Account)
