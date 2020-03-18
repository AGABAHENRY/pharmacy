module.exports = function (sequelize, DataTypes) {
    var stock = sequelize.define('stock', {

        
        productName: {
            type: DataTypes.STRING(50),
            field: 'name'

        },
        
        productType: {
            type: DataTypes.STRING(50),
            field: 'producttype'

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
       
       
        
    },
        {
            tableName: 'stock',
            timestamps: false,

        });
    return stock;

}