module.exports = function (sequelize, DataTypes) {
    var products = sequelize.define('products', {

        
        productName: {
            type: DataTypes.STRING(50),
            field: 'productname'

        },
        productType: {
            type: DataTypes.STRING(50),
            field: 'producttype'

        },
        manufacturer: {
            type: DataTypes.STRING(50),
            field: 'manufacturer'

        },
        
        mfgDate: {
            type: DataTypes.DATE,
            field: 'mfgdate'

        },
        expiryDate: {
            type: DataTypes.DATE,
            field: 'expirydate'

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
            tableName: 'products',
            timestamps: false,

        });
    return products;

}