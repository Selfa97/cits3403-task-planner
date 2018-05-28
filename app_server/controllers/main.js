var User = require('../models/user');

/*GET HOME Page*/
module.exports.index = function(req, res) {
    User.getUserByUsername(req.session.user, function(err, user) {
        if (err) throw err;
        res.render('index', { user: user });
    });
};

/*GET LOGIN Page*/
module.exports.login = function(req, res) {
    User.getUserByUsername(req.session.user, function(err, user) {
        if (err) throw err;
        res.render('login', { user: user });
    });
};

/*GET REFERENCES Page*/
module.exports.references = function(req, res) {
    User.getUserByUsername(req.session.user, function(err, user) {
        if (err) throw err;
        res.render('references', { user: user });
    });
};
