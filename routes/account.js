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
router.get('/:action', function(req, res, next) {
	var action = req.params.action

  // res.json({
  //     	confirmation: 'success',
  //     	message: action
  //     })
  // res.send(res);

	// if (action == 'currentuser'){
	// 	if (req.session == null){
	// 		res.json({
	// 			confirmation:'success',
	// 			user: null
	// 		})
  //
	// 		return
	// 	}
  //
	// 	if (req.session.user == null){
	// 		res.json({
	// 			confirmation:'success',
	// 			user: null
	// 		})
  //
	// 		return
	// 	}
  //
	// 	controllers.profile
	// 	.getById(req.session.user, false)
	// 	.then(function(user){
	// 		res.json({
	// 			confirmation:'success',
	// 			user: user
	// 		})
	// 	})
	// 	.catch(function(err){
	// 		res.json({
	// 			confirmation:'fail',
	// 			message: err
	// 		})
	// 	})
	// }
  //
	// if (action == 'logout'){
	// 	req.session.reset()
	// 	res.json({
	// 		confirmation:'success'
	// 	})
	// }
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
			// req.session.user = profile.id // set the session
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
