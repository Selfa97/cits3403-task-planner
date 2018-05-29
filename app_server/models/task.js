var mongoose = require('mongoose');

var TaskSchema = mongoose.Schema({
    title:{
        type: String,
        index:true
    },
	due: {
		type: Date
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
        type: String
    },
    createdBy: {
        type: String
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

module.exports.getCreatedTasks = function(username, callback) {
    var query = {'createdBy': username};
    Task.find(query, callback);
};

module.exports.taskComplete = function(title, callback) {
    var query = {'title': title};
    var update = {'complete': true}
    Task.findOneAndUpdate(query, update, callback);
};

module.exports.removeTask = function(title, callback) {
    var query = {'title': title};
    Task.deleteOne(query, callback);
};

module.exports.sortAuto = function(user, callback) {
    var cursor = Task.find({'uname':user}).sort({
        'due':-1});
    return cursor;
};