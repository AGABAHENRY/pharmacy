module.exports = function (sequelize, DataTypes) {
    var sales = sequelize.define('sales', {

        
        productName: {
            type: DataTypes.STRING(50),
            field: 'name'

        },
        producttType: {
            type: DataTypes.STRING(50),
            field: 'producttype'

        },
        
      
        user: {
            type: DataTypes.STRING(50),
            field: 'user'

        },
       
        packagingType: {
            type: DataTypes.STRING(50),
            field: 'packagingtype'

        },
            qty: {
            type: DataTypes.STRING(50),
            field: 'qty'

        },
        productId: {
            type: DataTypes.INTEGER,
            field: 'productid',
            primaryKey: true,
            //autoIncrement: true,
            allowNull: false,
        },
        customerTypeId: {
            type: DataTypes.INTEGER,
            field: 'customertypeid',
            //primaryKey: true,
            //autoIncrement: true,
            //allowNull: false,
        },
        customerId: {
            type: DataTypes.INTEGER,
            field: 'customerid',
            //primaryKey: true,
            //autoIncrement: true,
            allowNull: false,
        },
        
        
    },
        {
            tableName: 'sales',
            timestamps: false,

        });
    return sales;

}