module.exports = function (sequelize, DataTypes) {
    var purchases = sequelize.define('purchases', {

        
        productName: {
            type: DataTypes.STRING(50),
            field: 'name'

        },
        
        supplier: {
            type: DataTypes.STRING(50),
            field: 'supplier'

        },
        unitPrice: {
            type: DataTypes.STRING(50),
            field: 'unitprice'

        },
        costPrice: {
            type: DataTypes.STRING(50),
            field: 'costprice'

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
            tableName: 'purchases',
            timestamps: false,

        });
    return purchases;

}