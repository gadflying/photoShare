var express = require('express')
var router = express.Router()
//at start we only need express and router
 var controllers = require('../controllers')
// var bcrypt = require('bcryptjs')

// http://localhost:3000/account/test

// {
// confirmation: "success",
// message: "test"
// }

//1. solve reload issue we need ot check current user in get relate to session install
//npm i-S client-session

router.get('/:action', function(req, res, next) {
	var action = req.params.action

  // res.json({
  //     	confirmation: 'success',
  //     	message: action
  //     })
  // res.send(res);

	if (action == 'currentuser'){
		if (req.session == null){
			res.json({
				confirmation:'success',
				user: null
			})
			return
		}
		if (req.session.user == null){
			res.json({
				confirmation:'success',
				user: null
			})
			return
		}
//when sing up at http://localhost:3000/account/currentuser get what we want
//http://localhost:3000/api/profile/58f7a27f345ea23449f403df
      // res.json({
    	// 		confirmation:'success',
    	// 		user: req.session.user
    	// 	})
      // }
  // this one in ProfileController getById req.session.user id from session
//here user is profile
//http://localhost:3000/account/currentuser see all details about password id and username
    controllers.profile
		.getById(req.session.user, false)
		.then(function(user){
			res.json({
				confirmation:'success',
				user: user
			})
      console.log('IN ACCOUNT GET SESSION',res)
		})
		.catch(function(err){
			res.json({
				confirmation:'fail',
				message: err
			})
		})
	}

	if (action == 'logout'){
		req.session.reset()
		res.json({
			confirmation:'success'
		})
	}
})

router.post('/:action', function(req, res, next) {
	var action = req.params.action
  // res.json({
  //       confirmation: 'success',
  //       message: action
  //     })
  // res.send(res);
//如果是注册的行为的话
	if (action == 'register'){
		controllers.profile
		.post(req.body, false)
		.then(function(profile){
//当signup 的时候应该设置session
//set session
// here pass need to be signature instead of only id all taoken
     req.session.user = profile.id // set the session

      res.json({
				confirmation: 'success',
				user: profile
			})
		})
		.catch(function(err){
			res.json({
				confirmation: 'fail',
				message: err
			})
		})
	}

	// if (action == 'login'){
	// 	controllers.profile
	// 	.get({username: req.body.username}, true)
	// 	.then(function(profiles){
	// 		if (profiles.length == 0){
	// 			res.json({
	// 				confirmation: 'fail',
	// 				message: 'Profile not found'
	// 			})
  //
	// 			return
	// 		}
  //
	// 		var profile = profiles[0]
  //
	// 		// check password:
	// 		var isPasswordCorrect = bcrypt.compareSync(req.body.password, profile.password)
	// 		if (isPasswordCorrect == false){
	// 			res.json({
	// 				confirmation: 'fail',
	// 				message: 'Wrong Password!'
	// 			})
  //
	// 			return
	// 		}
  //
	// 		req.session.user = profile._id
	// 		res.json({
	// 			confirmation: 'success',
	// 			user: profile.summary()
	// 		})
	// 	})
	// 	.catch(function(err){
	// 		res.json({
	// 			confirmation: 'fail',
	// 			message: err
	// 		})
	// 	})
	// }
})


module.exports = router
