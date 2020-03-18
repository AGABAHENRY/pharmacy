module.exports = function (sequelize, DataTypes) {
    var manufacturer = sequelize.define('manufacturer', {


        manufacturerID: {
            type: DataTypes.INTEGER,
            field: 'Manufacturer_ID',
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },

        mobileNo: {
            type: DataTypes.STRING(50),
            field: 'Mobile_No'

        },

        Address: {
            type: DataTypes.STRING(50),
            field: 'Address'

        },
        noOfSupplies: {
            type: DataTypes.INTEGER,
            field: 'No_of_Supplies'

        },

        city: {
            type: DataTypes.STRING(50),
            field: 'City',

        },
        state: {
            type: DataTypes.STRING(50),
            field: 'State',

        },
        manufacturerName: {
            type: DataTypes.STRING(50),
            field: 'Manufacturer_name',

        },
        phoneNo: {
            type: DataTypes.STRING(50),
            field: 'Phone_no',

        },



    },
        {
            tableName: 'manufacturer',
            timestamps: false,

        });
    return manufacturer;

}