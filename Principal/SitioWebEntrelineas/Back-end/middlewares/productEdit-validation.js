const path = require('path');
const { body } =  require('express-validator');

const validateProductEdit = [
    body('titulo').notEmpty().withMessage('¡Hey, el libro debe tener un nombre!').bail()
    .isLength({min: 2}).withMessage('¡Debe tener al menos dos caracteres!'),
    body('autor').notEmpty().withMessage('¡Hey, el libro debe tener un autor!').bail()
    .isLength({min: 2}).withMessage('¡Debe tener al menos dos caracteres!'),
    body('sinopsis').notEmpty().withMessage('¡Hey, el libro debe tener una sinopsis!').bail()
    .isLength({min: 5}).withMessage('¡Debe tener al menos cinco caracteres!'),
    body('precio').notEmpty().withMessage('¡Hey, el libro debe tener un precio!').bail()
    .isInt().withMessage('¡Solo números, eh!'),
    body('edicion').notEmpty().withMessage('¡Hey, el libro debe tener un año de edición!').bail()
    .isInt().withMessage('¡Solo números, eh!'),
    body('paginas').notEmpty().withMessage('¡Hey, no olvides el número de páginas!').bail()
    .isInt().withMessage('¡Solo números, eh!'),
    body('idioma').notEmpty().withMessage('¡Hey, el libro debe tener un idioma!'),
    body('presentacion').notEmpty().withMessage('¡Hey, el libro debe tener una presentación!'),
    body('topics').notEmpty().withMessage('¡Debes seleccionar un género!').bail()
    .isIn(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']),
];

module.exports = validateProductEdit