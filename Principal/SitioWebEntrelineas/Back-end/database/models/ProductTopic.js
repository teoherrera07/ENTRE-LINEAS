module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductTopic';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        },
        topic_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        }
    };
    let config = {
        tableName: 'product_topic',
        timestamps: false,
    };

    const ProductTopic = sequelize.define(alias, cols, config);

    ProductTopic.associate = function (models){
        ProductTopic.belongsTo(models.Product, {
            as: 'productsTopics',
            foreignKey: 'product_id',
        }),
        ProductTopic.belongsTo(models.Topic,{
            as: 'topicsProducts',
            foreignKey: 'topic_id',
        })
    };
    return ProductTopic;
};
