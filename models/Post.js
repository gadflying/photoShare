//who post this post and what post it is
//this is backend

var mongoose = require('mongoose')

var PostSchema = new mongoose.Schema({
	// profile: {type:mongoose.Schema.Types.Mixed, default:{}},
  profile: {type:mongoose.Schema.Types.Mixed, default:{}},
	image: {type:String, default:''},
	caption: {type:String, default:''},
	timestamp: {type:Date, default: Date.now}
})


//for profile not want password to send back 
PostSchema.methods.summary = function(){
	var summary = {
		profile: this.profile,
		image: this.image,
		caption: this.caption,
		timestamp: this.timestamp,
		id: this._id.toString()//here change _id to id
	}

	return summary
}


module.exports = mongoose.model('PostSchema', PostSchema)
