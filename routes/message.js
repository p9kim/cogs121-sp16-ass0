var models = require('../models');

exports.send = function(req, res) {
    console.log(req.body); // help you see what is inside of req.body
    // your solution here

    var currDate = new Date();

    var post = new models.messageSchema({
    	email: req.body.email,
    	content: req.body.content,
    	created: currDate
    });

    post.save(function(error) {
    	if(error){
    		return error;
    	}
    	else{
    		console.log("Success");
    		res.redirect('/');
    	}
    });
};