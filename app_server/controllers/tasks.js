var User = require('../models/user');
var Task = require('../models/task');

/* GET Creat Task */
module.exports.createTask = function(req, res, next) {
    User.getUserByUsername(req.session.user, function(err, user) {
        if (err) throw err;
        Task.getTasksByUsername(req.session.user, function(err, tasks) {
            if(err) throw err;
            res.render('createTask', { 
                user: user,
                tasks: tasks 
            });
        });
    });
};

/* GET View Tasks */
module.exports.viewTasks = function(req, res, next) {
    User.getUserByUsername(req.session.user, function (err, user) {
        if(err) throw err;
        Task.getTasksByUsername(req.session.user, function(err, tasks) {
            if(err) throw err;
            res.render('viewTasks', {
                user: user,
                tasks: tasks
            });
        });
    });
};

