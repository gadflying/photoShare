//this is entry point for react
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import{Posts} from './components/containers'
// import { Home } from './components/layout'
import store from './stores'
import { Provider } from 'react-redux'


const app = (
	<Provider store={ store.configureStore() }>
		<div>
			<Posts/>
		</div>
	</Provider>
)

ReactDOM.render(app, document.getElementById('root'))
// class App extends Component {
//   // render(){}
//   render(){
//     // return{
//     //
//     // }return 是圆括号
//     return (
//       <Provider store={ store.configureStore() }>
//       <div>
//       React Entry point
//         <Posts/>
//       </div>
//       </Provider>
//     )
//   }
// }

//ReactDOM.render(<App/>,document.getElementById('root'))
// const app = (
// 	<Provider store={ store.configureStore() }>
// 		<div>
// 			<Home />
// 		</div>
// 	</Provider>
// )
//
// ReactDOM.render(app, document.getElementById('root'))
