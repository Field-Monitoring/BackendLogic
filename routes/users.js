var express = require('express');
var passport = require('passport');
require('../controllers/loginController')(passport);
var router = express.Router();
var Job = require('../models/job');

router.post('/', passport.authenticate('local-login'), 
    function(req, res){
        if (req.user) { 
        	console.log("ahedfkshg");
        	res.send(req.user); }
        else { res.send(401); }
    });

router.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/success', // redirect to the secure profile section
		failureRedirect : '/failure', // redirect back to the signup page if there is an error
}));



router.post('/job',function(req, res, next){
	console.log("coming");
	Job.create(req.body,function(err, job){
		if(err) throw err;
		res.json({"message":"job added"});
	});
});

router.get('/getbylocation/:location',function(req, res, next){
	Job.find({"location":req.params.location}).exec(function(err, job){
		res.json(job);
	});
});


module.exports = router;
