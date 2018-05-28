var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

// User Schema
var UserSchema = mongoose.Schema({
	fname: {
		type: String,
		index:true
    },
    lname: {
		type: String,
    },
    uname: {
		type: String,
    },
    email: {
		type: String,
    },
		password: {
		type: String
    },
	contactNum: {
		type: String
	}
});

var User = module.exports = mongoose.model('User', UserSchema);

db = mongoose.connection;
module.exports.createUser = function(newUser, callback){
	bcrypt.genSalt(10, function(err, salt) {
	    bcrypt.hash(newUser.password, salt, function(err, hash) {
	        newUser.password = hash;
	        newUser.save(callback);
	    });
	});
}

module.exports.getUserByUsername = function(username, callback){
		var query = {'uname': username};
    console.log(query);
	User.findOne(query, callback);
}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}