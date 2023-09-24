module.exports = (sequelize, dataTypes) => {
        let alias = 'ProductCategory';
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
            category_id: {
                type: dataTypes.INTEGER,
                foreignKey: true
            }
        };
        let config = {
            tableName: 'product_category',
            timestamps: false,
        };
    
        const ProductCategory = sequelize.define(alias, cols, config);
    
        ProductCategory.associate = function (models){
            ProductCategory.belongsTo(models.Product, {
                as: 'productsCategories',
                foreignKey: 'product_id',
            }),
            ProductCategory.belongsTo(models.Category,{
                as: 'categoriesProducts',
                foreignKey: 'category_id',
            })
        };
        return ProductCategory;
    };
  