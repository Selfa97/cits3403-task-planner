var User = require('../models/user');

/* GET Registration Page */
module.exports.register = function(req, res) {
    User.getUserByUsername(req.session.user, function(err, user) {
        if (err) throw err;
        res.render('register', { user: user });
    });
};

/* GET Skills Page */
module.exports.skills = function(req, res) {
    User.getUserByUsername(req.session.user, function(err, user) {
        if (err) throw err;
        res.render('skills', { user: user});
    });
};