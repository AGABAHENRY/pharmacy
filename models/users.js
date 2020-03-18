module.exports = function (sequelize, DataTypes) {
    var users = sequelize.define('users', {

        
        contact: {
            type: DataTypes.STRING(50),
            field: 'contact'

        },
        
        address: {
            type: DataTypes.STRING(50),
            field: 'address'

        },
        userName: {
            type: DataTypes.STRING(50),
            field: 'username'

        },
        userId: {
            type: DataTypes.INTEGER,
            field: 'userid',
            primaryKey: true,
            //autoIncrement: true,
            allowNull: false,
        },
       
        email: {
            type: DataTypes.STRING(50),
            field: 'email'

        },
        
        
    },
        {
            tableName: 'users',
            timestamps: false,

        });
    return users;

}