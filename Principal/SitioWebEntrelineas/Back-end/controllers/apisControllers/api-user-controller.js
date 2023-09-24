const db = require('../../database/models');
const sequelize = db.sequelize;
const Users = db.User;
let img= "";



const apiUserController = {
    list: (req, res)=> {
        Users.findAll({attributes:{exclude:['password']}})
        .then(user => {
            return res.status(200).json({
                total: user.length,
                data: user,
                status: 200
            })
        })
    },

    detail: (req, res)=> {
        Users.findByPk(req.params.id,{
            include:{association: "countries"},
            include:{association: "topics"},
            include:{association: "products"},
            attributes: {exclude:['password']}})
        .then((users)=>{
            console.log(users)
           return res.status(200).json({
                data: users,
                status: 200,
            })
        })
    },

    last: (req, res)=> {

        Users.findAll()
        .then((Users)=>{
            ultimoUser = Users.pop();
            ultimoUser.image = 'http://localhost:3001/images/Users/' + ultimoUser.image
           return res.json({
            data: ultimoUser,
            status: 200,
        })
        })
    }
}

module.exports = apiUserController