const express = require('express');
const router = express.Router();

const{
validateLogin,
validateRegister,
userValidate,
    
}=require('../middleware/validator/AuthValidate')
 const{
 registerController,
 loginController

} = require('../controllers/AuthController')
router.post("/login", validateLogin, userValidate,loginController);
router.post("/register", validateRegister, userValidate, registerController);

module.exports = router