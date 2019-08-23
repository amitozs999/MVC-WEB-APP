var express=require('express');

var router=express.Router();

var userController=require('../controller/user_controller')

router.get('/profile', userController.profile);

router.get('/sign-up', userController.signUp);
router.get('/sign-in', userController.signIn);


router.post('/create', userController.create);
router.post('/create-session', userController.createSession);




module.exports=router;
