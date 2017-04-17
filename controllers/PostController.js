var Post = require('../models/Post')
var Promise = require('bluebird')

module.exports = {
	get: function(params, isRaw){
		return new Promise(function(resolve, reject){
			Post.find(params, function(err, posts){
				if (err){
					reject(err)
					return
				}
//if true it is raw means it is mongoose obj
//else we iterate each profile , this obj contains raw and not raw in model
//http://localhost:3000/api/post
				if (isRaw)
					resolve(posts)
				else {
					var list = []
					posts.forEach(function(post, i){
						list.push(post.summary())
					})

					resolve(list)
				}
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
				if (isRaw)
					resolve(post)
				else
					resolve(post.summary())
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
				if (isRaw == true)
					resolve(post)
				else
					resolve(post.summary())
			})
		})
	}
}
