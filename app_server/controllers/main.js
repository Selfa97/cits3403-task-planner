/*GET HOME Page*/
module.exports.index = function(req, res) {
    res.render('index');
};

/*GET LOGIN Page*/
module.exports.login = function(req, res) {
    res.render('login');
};

/*GET REFERENCES Page*/
module.exports.references = function(req, res) {
    res.render('references');
};
