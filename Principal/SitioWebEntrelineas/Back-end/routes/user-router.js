const express = require('express');
const router = express.Router();
const multer = require('multer');
const validationRegister = require('../middlewares/user-validation');
const userController = require('../controllers/user-controller');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');
const userNoLoggedMiddleware = require('../middlewares/userNoLoggedMiddleware');
const { validationResult } = require('express-validator');
const path = require('path');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/users");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  function fileFilter (req, file, cb) {

    // La función debe llamar a `cb` usando una variable del tipo boolean
    // para indicar si el archivo debería ser aceptado o no
  
    // Para rechazar el archivo es necesario pasar `false`, de la siguiente forma:
   // cb(null, false)
  
    // Para aceptar el archivo es necesario pasar `true`, de la siguiente forma:
    cb(null, true)
  
    // Siempre puedes pasar un error en caso de que algo salga mal:
    //cb(new Error('No tengo la menor idea!'))
  
  }
  const upload = multer({ storage, fileFilter});


//No pueden acceder los usuarios logueados al formulario de registro
router.get('/register', userLoggedMiddleware, userController.register);

router.post('/register', upload.single('avatar'), validationRegister, userController.registerProcess);

//No pueden acceder los usuarios logueados al formulario login
router.get('/login', userLoggedMiddleware, userController.login);
router.post('/login',userController.logVerification);
//No pueden acceder los usuarios no logueados a la vista de perfil
router.get('/profile', userNoLoggedMiddleware,userController.profile);
//desloguearse
router.get('/logout', userController.logout);


module.exports = router;