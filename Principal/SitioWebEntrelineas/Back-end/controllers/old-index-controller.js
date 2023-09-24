const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productsDataBase.json");
const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const usersFilePath = path.join(__dirname, "../data/usersDataBase.json");
const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const controller = {
    index: (req, res)=> {
        const products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
        const users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));
        let usersData = []
        // users.forEach(user => {usersData.push(join(user.first_name,' ',user.second_name))});
        let productsNovedades = products.filter(p => p.novedades == true)
		let productsMasVendidos = products.filter(p => p.masVendidos == true)
        let productsSagas = products.filter(p => p.sagas == true)
		let productsPacks = products.filter(p => p.packs == true)
        res.render('index', {novedades: productsNovedades, masVendidos: productsMasVendidos, sagas: productsSagas, packs: productsPacks, users: usersData, user: req.session.userLogged })
    // le paso a la vista del index la propiedad user con los datos del usuario logueado
    }
}
module.exports = controller;