var Profile = require('../models/Profile')
var Promise = require('bluebird')

module.exports = {
	get: function(params, isRaw){
		return new Promise(function(resolve, reject){
			Profile.find(params, function(err, profiles){
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

					resolve(profiles)
				// }
			})
		})
	},

	getById: function(id, isRaw){
		return new Promise(function(resolve, reject){
			Profile.findById(id, function(err, profile){
				if (err){
					reject(err)
					return
				}
       resolve(profile)
				// if (isRaw == true)
				// 	resolve(profile)
				// else
				// 	resolve(profile.summary())
			})
		})
	},

	post: function(params, isRaw){
		return new Promise(function(resolve, reject){
			Profile.create(params, function(err, profile){
				if (err){
					reject(err)
					return
				}
        resolve(profile)
				// if (isRaw == true)
				// 	resolve(profile)
				// else
				// 	resolve(profile.summary())
			})
		})
	}
}
