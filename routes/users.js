var express = require('express');
var passport = require('passport');
require('../controllers/loginController')(passport);
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


// router.post('/', passport.authenticate('local-login', {
// 		successRedirect : '/failurejson', // redirect to the secure profile section
//     	failureRedirect : '/', // redirect back to the signup page if there is an error
//     	failureFlash : true // allow flash messages/ redirect back to the signup page if there is an error
// 	}));

// app.post('/signup', passport.authenticate('local-signup', {
//     successRedirect : '/successjson', // redirect to the secure profile section
//     failureRedirect : '/failurejson', // redirect back to the signup page if there is an error
//     failureFlash : true // allow flash messages
// }));
router.post('/', passport.authenticate('local-login'), 
    function(req, res){
        if (req.user) { 
        	console.log("ahedfkshg");
        	res.send(req.user); }
        else { res.send(401); }
    });



router.get('/success',function(req ,res ,next){
	console.log("harish");
	res.json({"message":"success"});
});


router.get('/failurebro',function(req, res ,next){
	console.log("harish");
	res.json({"message":"failure"});
});

router.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/success', // redirect to the secure profile section
		failureRedirect : '/failurebro', // redirect back to the signup page if there is an error
}));


module.exports = router;
