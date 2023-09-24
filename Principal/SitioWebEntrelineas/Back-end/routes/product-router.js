const express = require('express');
const router = express.Router();


const multer = require("multer");
const validationProductEdit = require('../middlewares/productEdit-validation');
const validationProductCreate = require('../middlewares/productCreate-validation');
const path = require('path');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/products");
  },
  filename: function (req, file, cb) {
    console.log({ file });
    cb(null, Date.now() + "" + file.originalname);
  },
});


const upload = multer({ storage });

const productController = require('../controllers/product-controller');



router.get('/', productController.list);


router.get('/create', productController.create);
router.post('/create', upload.single('imagenProducto'), validationProductCreate, productController.store);

router.get('/detail/:id', productController.detail);

router.get('/edit/:id', productController.edit);
router.put('/edit/:id', upload.single('imagenProducto'), validationProductEdit, productController.update);

// router.get('/cart', productController.cart);


// router.post('/cart', productController.cartAdd);
 router.delete('/delete/:id', productController.destroy);





module.exports = router;