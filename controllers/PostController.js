var Post = require('../models/Post')
var Promise = require('bluebird')

module.exports = {
	get: function(params, isRaw){
		return new Promise(function(resolve, reject){
			Post.find(params, function(err, post){
				if (err){
					reject(err)
					return
				}

				// if (isRaw == true)
				// 	resolve(profiles)
				// else {
				// 	var list = []
				// 	profiles.forEach(function(profile, i){
				// 		list.push(profile.summary())
				// 	})

					resolve(post)
				// }
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){
			Post.findById(id, function(err, post){
				if (err){
					reject(err)
					return
				}
       resolve(post)
				// if (isRaw == true)
				// 	resolve(profile)
				// else
				// 	resolve(profile.summary())
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){
			Post.create(params, function(err, post){
				if (err){
					reject(err)
					return
				}
        resolve(post)
				// if (isRaw == true)
				// 	resolve(profile)
				// else
				// 	resolve(profile.summary())
			})
		})
	}
}
