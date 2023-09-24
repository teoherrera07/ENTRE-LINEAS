const db = require('../../database/models');
const sequelize = db.sequelize;

const Categories = db.Category;
let img= "";

const apiCategoriesController = {
    
    categories: (req, res)=> {
        Categories.findAll()
        .then(categories => {
            return res.status(200).json({
                total: categories.length,
                data: categories,
                status: 200
            })
        })
    }
}

module.exports = apiCategoriesController
