module.exports = (sequelize, dataTypes) => {
    let alias = 'Category';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING,
        }
    };
    let config = {
        tableName: 'categories',
        timestamps: false,
    };

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function (models){
        Category.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_category',
            foreignKey: 'category_id',
            otherKey: 'product_id',
            timestamps: false,
        })
    };
    return Category;
};