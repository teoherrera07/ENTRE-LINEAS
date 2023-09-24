module.exports = (sequelize, dataTypes) => {
    let alias = 'Topic';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: dataTypes.STRING,
    };
    let config = {
        tableName: 'topics',
        timestamps: false,
    };

    const Topic = sequelize.define(alias, cols, config);

    Topic.associate = function(models) {
        Topic.belongsToMany(models.User, {
            as: 'users',
            through: 'user_topic',
            foreignKey: 'topic_id',
            otherKey: 'user_id',
            timestamps: false,
        }),
        Topic.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_topic',
            foreignKey: 'topic_id',
            otherKey: 'product_id',
            timestamps: false,
        })
    };
    return Topic;
};