var Task = require('../models/task');

/* GET Creat Task */
module.exports.createTask = function(req, res) {
    Task.getCreatedTasks(req.user.uname, function(err, tasks) {
        if(err) throw err;
        res.render('createTask', { tasks: tasks });
    });
};

/* GET View Tasks */
module.exports.viewTasks = function(req, res) {
    Task.sortAuto(req.user.uname,function(tasks){
        console.log(" task");
        console.log(tasks);
        res.render('viewTasks', { 
            tasks: tasks,
            sortBy: 'auto'
         });
    });
};

/* GET View Task by Date */
module.exports.viewTasksDate = function(req, res) {
    Task.sortDate(req.user.uname, function(tasks){
        res.render('viewTasks', {             
            tasks: tasks,
            sortBy: 'date' 
        });
    });
};

/* GET View Tasks by Name */
module.exports.viewTasksName = function(req, res) {
    Task.sortName(req.user.uname, function(tasks){
        res.render('viewTasks', { 
            tasks: tasks,
            sortBy: 'name'
        });
    });
};

/* GET View Created Tasks */
module.exports.createdTasks = function(req, res) {
    Task.getCreatedTasks(req.user.uname, function(err, tasks) {
        if(err) throw err;
        res.render('createdTasks', { tasks: tasks });
    });
};

