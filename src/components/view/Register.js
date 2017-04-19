//then move details in view
import React,{Component}from 'react'

class Register extends Component{
  constructor(){
    super()
    this.state={
      registration:{
        user:'',
        password:''
      }
    }
  }

  updateRegistration(event){
    let updated = Object.assign({}, this.state.registration)
    updated[event.target.id] = event.target.value
    this.setState({
      registration: updated
    })
}
//阻止元素发生默认的行为（例如，当点击提交按钮时阻止对表单的提交）
//Cancels the event if it is cancelable, without stopping further propagation of the event.

  submitRegistration(event){
		event.preventDefault()

		if (this.state.registration.username.length == 0){
			alert('Please add your username.')
			return
		}

		if (this.state.registration.password.length == 0){
			alert('Please set your password.')
			return
		}
//go to container
		this.props.onRegister(this.state.registration)
	}

  // submitLoginCredentials(event){
	// 	event.preventDefault()
	// 	if (this.state.registration.username.length == 0){
	// 		alert('Please add your username.')
	// 		return
	// 	}
  //
	// 	if (this.state.registration.password.length == 0){
	// 		alert('Please set your password.')
	// 		return
	// 	}
  //
	// 	this.props.onLogin(this.state.registration)
	// }

  render(){
    return (
      <div>Account view here
         <div>
            <h2>Sign up</h2>
             <input onChange={this.updateRegistration.bind(this)}
                    id="username" type="text" placeholder="Username" /><br />
        		 <input onChange={this.updateRegistration.bind(this)}
                    id="password" type="password" placeholder="Password" /><br />
        		 <button onClick={this.submitRegistration.bind(this)}>Join</button>

         </div>
      </div>
    )
  }
}

export default Register
