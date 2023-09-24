module.exports = (sequelize, dataTypes) => {
    let alias = 'UserTopic';
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
        topic_id: {
            type: dataTypes.INTEGER,
            foreignKey: true
        }
    };
    let config = {
        tableName: 'user_topic',
        timestamps: false,
    };

    const UserTopic = sequelize.define(alias, cols, config);

    UserTopic.associate = function (models){
        UserTopic.belongsTo(models.User, {
            as: 'usersTopics',
            foreignKey: 'user_id',
        }),
        UserTopic.belongsTo(models.Topic,{
            as: 'topicsUsers',
            foreignKey: 'topic_id',
        })
    };
    return UserTopic;
};
