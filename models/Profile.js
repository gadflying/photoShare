//which user
var mongoose = require('mongoose')

console.log(mongoose.Types.ObjectId.isValid('123'));

var ProfileSchema = new mongoose.Schema({
	username: {type:String, default:''},
	password: {type:String, default:''},
	timestamp: {type:Date, default: Date.now}
})
// this way password will not return
// var summary = {
// 	profile: this.profile,
// 	image: this.image,
// 	caption: this.caption,
// 	timestamp: this.timestamp,
// 	id: this._id.toString()//here change _id to id
// }
//you can determin what to return back from backend 

ProfileSchema.methods.summary = function(){
	var summary = {
		username: this.username,
		timestamp: this.timestamp,
		id: this._id.toString()
	}

	return summary
}

module.exports = mongoose.model('ProfileSchema', ProfileSchema)
