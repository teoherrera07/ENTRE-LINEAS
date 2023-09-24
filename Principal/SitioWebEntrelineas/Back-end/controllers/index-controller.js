//const { cloneDeep, isColString } = require('sequelize/types/utils');
const db = require('../database/models');
const sequelize = db.sequelize;

const Products = db.Product;
const Categories = db.Category;
const controller = {
  index: (req, res) => {
    Categories.findAll({
      include: [{association:'products'}]
    })
    .then((categories) => {
    return res.render('index', {categories})
    })
  }
}
module.exports = controller;

