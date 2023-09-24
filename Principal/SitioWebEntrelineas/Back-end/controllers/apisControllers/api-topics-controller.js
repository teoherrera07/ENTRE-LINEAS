const db = require('../../database/models');
const sequelize = db.sequelize;

const Topics = db.Topic;
let img= "";

const apiTopicsController = {
    
    topics: (req, res)=> {
        Topics.findAll()
        .then(topics => {
            return res.status(200).json({
                total: topics.length,
                data: topics,
                status: 200
            })
        })
    }
}

module.exports = apiTopicsController;
