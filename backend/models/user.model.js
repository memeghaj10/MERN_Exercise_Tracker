//This is the user schema

const mongoose = require('mongoose');


const Scheme = mongoose.Schema;


const userSchema = new Schema({
	username:{   //adding validations to user field
		type: String,
		required: true,
		unique: true,
		trim: true,
		minlength: 3
	},

},	{
	timestamps:true,
});


const User = mongoose.model('User',userSchema);


module.exports = User;