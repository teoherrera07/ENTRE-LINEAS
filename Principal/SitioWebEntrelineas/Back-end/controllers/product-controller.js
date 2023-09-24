const db = require('../database/models');
const sequelize = db.sequelize;
const { validationResult } = require('express-validator');

const Topics = db.Topic;
const Categories = db.Category;
const Products = db.Product;
const ProductsCategories = db.ProductCategory;
const ProductsTopics = db.ProductTopic;
let img= "";


const productController = {
    list: (req, res)=> {
        
        Products.findAll()
        .then(product => {
            res.render("products/products", {product})
        })
    },
    create:(req, res)=>{

        Topics.findAll()
        .then((topics)=> {
            
            res.render("products/product-create-form", {topics})
        }) 
    },
    store: async function (req, res) {

        try{
        const errores = validationResult(req)
        if(errores.errors.length > 0){
            return res.render('products/product-create-form', {errors: errores.mapped(), oldData: req.body})

        }

        if (req.file){
             img = req.file.filename;
        }
        else{
             img = "default-image.jpg"
        }
        await Products.create({
            title: req.body.titulo,
            author: req.body.autor,
            synopsis: req.body.sinopsis,
            price: req.body.precio,
            edition: req.body.edicion,
            pages: req.body.paginas,
            image: img,
            language: req.body.idioma,
            presentation: req.body.presentacion,
            
        })
        //Busco el id del ultimo producto creado
        let products = await Products.findAll()
        let ultimoId = await products[(products.length - 1)].id
            
            //ingreso en la tabla product_category los registros del producto con las categorias asociadas
            
                for (let i=0; i < req.body.categories.length; i++){

                    ProductsCategories.create({
                        product_id : ultimoId, 
                        category_id: req.body.categories[i]
                    })
                }
                for (let j=0; j < req.body.topics.length; j++){
                    ProductsTopics.create({
                        product_id : ultimoId, 
                        topic_id: req.body.topics[j]
                    })     
                }
            
        }catch (error) {
            console.log(error);
            }   
             
        
        return res.redirect("/products")
    },
    detail: (req, res) =>{
        Products.findByPk(req.params.id, {
            include: {association: "categories" }
        })
        .then((libro)=>{
           
            res.render("products/product-detail", {
             libro:libro
            })
        })
    },

    destroy:  async function (req, res)  {
        try{
            await Products.findByPk((req.params.id)) 

            await ProductsCategories.destroy({
                    where: {product_id: req.params.id}
                })
            
            await ProductsTopics.destroy({
                    where: {product_id: req.params.id}
                })     

            await Products.destroy({
                where: {id: req.params.id}
            })
        }catch (error) {
        console.log(error);
        }
        res.redirect("/products")
    },
    edit: (req, res)=>{
        Products.findByPk(req.params.id, {
            include: [
                {association: "categories" },
                {association: "topics"}
            ]
        })
        .then((product)=>{
            res.render("products/product-edition", {product})
        })
    },
    update: async function (req, res) {

        try {
            const errores = validationResult(req)
            if(errores.errors.length > 0){
            return res.render('products/product-create-form', {errors: errores.mapped(), oldData: req.body})

        }
          const oldCategories = await ProductsCategories.destroy({
            where: {product_id : req.params.id}
          })
          const oldTopics = await ProductsTopics.destroy({
            where: {product_id: req.params.id}
          })  
          const newProducts = await Products.update(
            {
              title: req.body.titulo,
              author: req.body.autor,
              sinopsis: req.body.sinopsis,
              price: req.body.precio,
              edition: req.body.edicion,
              pages: req.body.paginas,
              language: req.body.idioma,
              presentation: req.body.presentacion,
            //   image: req.file.filename
            },
            {
              where: {
                id: req.params.id,
              },
            }
            
            );
           
          for (let i=0; i < req.body.categories.length; i++){

            await ProductsCategories.create({
                product_id : req.params.id,
                category_id: req.body.categories[i]
            })
        }
          for (let j=0; j < req.body.topics.length; j++){
            await ProductsTopics.create({
                product_id : req.params.id,
                topic_id: req.body.topics[j]
            })     
        }
          res.redirect("/products");
        } catch (error) {
          console.log(error);
        }
      },
}


module.exports = productController
