var model = require('../model');

exports.view = function(req, res) {
    //var data = {data: []};
    //res.render("index", data);

    var msgSchema = model.msgSchema;
    msgSchema.find({}, function(err, docs) {
    	if(error) {
    		console.log(error);
    	}
    	else {
    		var data = {"data": docs};
    		res.render("index", data);
    	}
    })
}
