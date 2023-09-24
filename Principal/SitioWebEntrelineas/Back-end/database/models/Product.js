module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: dataTypes.STRING,
        author: dataTypes.STRING,
        synopsis: dataTypes.TEXT,
        price: dataTypes.DECIMAL,
        edition: dataTypes.INTEGER,
        pages: dataTypes.INTEGER,
        language: dataTypes.STRING,
        presentation: dataTypes.STRING,
        image: dataTypes.TEXT
    };
    let config = {
        tableName: 'products',
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsToMany(models.User, {
            as: 'users',
            through: 'user_product',
            foreignKey: 'product_id',
            otherKey: 'user_id',
            timestamps: false,
        }),
        Product.belongsToMany(models.Topic, {
            as: 'topics',
            through: 'product_topic',
            foreignKey: 'product_id',
            otherKey: 'topic_id',
            timestamps: false,
        }),
        Product.belongsToMany(models.Category, {
            as: 'categories',
            through: 'product_category',
            foreignKey: 'product_id',
            otherKey: 'category_id',
            timestamps: false,
        })
    };
    return Product;
};