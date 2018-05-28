var Task = require('../models/task');

/* GET Creat Task */
module.exports.createTask = function(req, res) {
    Task.getTasksByUsername(req.session.user, function(err, tasks) {
        if(err) throw err;
        res.render('createTask', { tasks: tasks });
    });
};

/* GET View Tasks */
module.exports.viewTasks = function(req, res) {
    Task.getTasksByUsername(req.session.user, function(err, tasks) {
        if(err) throw err;
        res.render('viewTasks', { tasks: tasks });
    });
};

