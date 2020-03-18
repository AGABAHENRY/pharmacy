module.exports = function (sequelize, DataTypes) {
    var inventory = sequelize.define('inventory', {

        
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
        id: {
            type: DataTypes.INTEGER,
            field: 'id',
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
       
       
        
    },
        {
            tableName: 'inventory',
            timestamps: false,

        });
    return inventory;

}