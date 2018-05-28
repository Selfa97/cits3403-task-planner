var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
    title:{
        type: String,
        index:true
    },
	due: {
		type: String
    },
    priority: {
		type: String
    },
    skillReq: [{
        type: String
    }],
    description: {
		type: String
    },
    dependencies: [{
        type: String
    }],
    complete: {
        type: Boolean
    },
    uname:{
        type:String
    }
});

var Task = module.exports = mongoose.model('Task', TaskSchema);

module.exports.createNewTask = function(newTask, callback){  
    newTask.save(callback);
}

module.exports.getTasksByUsername = function(username, callback) {
    var query = {'uname': username};
    console.log(query);
    Task.find(query, callback);
}