var mongoose = require('mongoose');

var SkillSchema = mongoose.Schema({
    uname:{
        type: String,
        index:true
    },
	skills:[{
        type: String
    }]
});

var Skills = module.exports = mongoose.model('Skills', SkillSchema);

module.exports.createUserSkills = function(newUserSkill, callback){
    newUserSkill.save(callback);
}
module.exports.getUserByUsername = function(username, callback){
    var query = {'uname': username};
    console.log('in skill db '+username);
    Skills.findOne(query, callback);
}
module.exports.getUserBySkill = function(skill, callback){
    var query = {'skills': skill};
    console.log(query);
    var user = Skills.findOne(query,callback);
}