var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlRegister = require('../controllers/register');
var ctrlTasks = require('../controllers/tasks');

/* GET home page. */
router.get('/', ctrlMain.index);

/* GET Login Page */
router.get('/login', ctrlMain.login);

/* GET Register Page */
router.get('/register', ctrlRegister.register);

/* GET Skills Page */
router.get('/skills', ctrlRegister.skills);

/* GET Create Tasks Page */
router.get('/create-task', ctrlTasks.createTask);

/* GET References Page */
router.get('/references', ctrlMain.references);

module.exports = router;
