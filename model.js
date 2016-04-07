var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mySchema = new Schmea({
	email: String,
	content: String,
	created: Date
});

var User = mongoose.model('User', mySchema);

module.exports = User;