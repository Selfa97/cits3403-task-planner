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
};

module.exports.getTasksByUsername = function(username, callback) {
    var query = {'uname': username};
    Task.find(query, callback);
};

module.exports.taskComplete = function(title, callback) {
    var query = {'title': title};
    var update = {'complete': true}
    Task.findOneAndUpdate(query, update, callback);
};