module.exports = (sequelize, dataTypes) => {
    let alias = 'UserProduct';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        },
        product_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        }
    };
    let config = {
        tableName: 'user_product',
        timestamps: false,
    };

    const UserProduct = sequelize.define(alias, cols, config);

    UserProduct.associate = function (models){
        UserProduct.belongsTo(models.Product, {
            as: 'usersProducts',
            foreignKey: 'product_id',
        }),
        UserProduct.belongsTo(models.User,{
            as: 'productsUsers',
            foreignKey: 'user_id',
        })
    };
    return UserProduct;
};
