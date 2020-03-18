module.exports = function (sequelize, DataTypes) {
    var customer = sequelize.define('customer', {

        
        
        customerType: {
            type: DataTypes.STRING(50),
            field: 'customertype'

        },
        customerTypeId:{
            type: DataTypes.INTEGER,
            field: 'customertypeid',
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        }
        
    },
        {
            tableName: 'customertypes',
            timestamps: false,

        });
    return customer;

}