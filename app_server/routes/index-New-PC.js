var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlRegister = require('../controllers/register');
var ctrlTasks = require('../controllers/tasks');

var User = require('../models/user');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
/* GET home page. */
router.get('/', ctrlMain.index);

passport.use(new LocalStrategy(
	function (uname, password, done) {
        console.log(uname+password);
		User.getUserByUsername(uname, function (err, user) {
			if (err) throw err;
			if (!user) {
                console.log('no such user');
				return done(null, false, { message: 'Unknown User' });
			}
            console.log('correct uname');
			User.comparePassword(password, user.password, function (err, isMatch) {
				if (err) throw err;
				if (isMatch) {
                    console.log('correct password');
					return done(null, user);
				} else {
                    console.log('wrong password');
					return done(null, false, { message: 'Invalid password' });
				}
			});
		});
	}));

passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.getUserById(id, function (err, user) {
		done(err, user);
	});
});
/* GET Login Page */
router.get('/login', ctrlMain.login);
router.post('/login',
    passport.authenticate('local', {successsRedirect:'/skills',failureRedirect:'/login', failureFlash: false}),
    function(req,res){
        res.redirect('/skills');
    });

/* GET Register Page */
router.get('/register', ctrlRegister.register);
router.post('/register',function(req,res){
    var fname = req.body.fname;
    var lname = req.body.lname;
    var uname = req.body.uname;
    var email = req.body.email;
    var password = req.body.password;
    var confirmPassword = req.body.confirmPassword;
    var contactNum = req.body.contactNum;
    var projectManager = req.body.projectManager;

    var newUser = new User({
        fname: fname,
        lname: lname,
        uname: uname,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        contactNum: contactNum,
        projectManager: projectManager
    });

    User.createUser(newUser, function(err,user){
        if (err) throw err;
        console.log(user);
    });
    console.log('registered');
    res.redirect('/login');
});
/* GET Skills Page */
router.get('/skills', ctrlRegister.skills);

/* GET Create Tasks Page */
router.get('/create-task', ctrlTasks.createTask);

/* GET References Page */
router.get('/references', ctrlMain.references);

/* GET View Tasks Page */
router.get('/view-tasks', ctrlTasks.viewTasks);

module.exports = router;
