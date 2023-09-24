const db = require('../../database/models');
const Users = db.User;
const Products = db.Product;
const Topics = db.Topic;

const apiCounterController = {
    counter: async (req, res)=> {
        try {
            let allProducts = await Products.findAll();
            let allUsers = await Users.findAll();
            let allTopics = await Topics.findAll();

            return res.status(200).json({
                totalProducts: allProducts.length,
                totalUsers: allUsers.length,
                totalTopics: allTopics.length,
                status: 200
            })

        }catch (error) {
            console.log(error);
        }
    }

}
module.exports = apiCounterController;