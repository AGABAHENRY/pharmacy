
Ext.define('pharmacy.view.manufacturer', {
    extend: 'Ext.panel.Panel',

    requires: [
        'pharmacy.view.manufacturerController',
        'pharmacy.view.manufacturerModel'
    ],
    xtype: "man",
    controller: 'manufacturer',
    viewModel: {
        type: 'manufacturer'
    },
    listeners:{afterrender:'onLoad'},
    items: [

        {
            xtype: 'container',
            layout: 'hbox',
            items: [

                {
                    title: 'Manufaturers Form',
                    margin: '0 4 0 4',
                    bodyPadding: 5,
                    width: '38%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',

                    items: [


                        {
                            xtype: 'textfield',
                            fieldLabel: 'Manufacturer ID',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: ' Mobile No',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Address',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'No_of_Supplies',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'City',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'State',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Manufacturer Name',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Phone_no',
                            allowBlank: false
                        },


                    ],
                    buttons: [{
                        text: 'Clear Form',

                    }, {
                        text: 'Add',
                        handler: 'onAddClicked'

                    }],

                },
                //Grid to display all Manufaturers
                {
                    margin: '0 3 0 10',
                    bodyPadding: '0 4 0 0',
                    width: '65%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        extend: 'Ext.grid.Panel',
                        xtype: 'grid',
                        title: 'All Manufacturers',
                        emptyText: 'No manufacturer available yet',
                        reference: 'grdAllManufacturers',
                        columns: [
                            { text: 'Manufacturer ID', dataIndex: 'manufacturerID', /*flex: 1*/ },
                            { text: 'Mobile No', dataIndex: 'mobileNo', /*flex: 1*/ },
                            { text: 'Address', dataIndex: 'Address' },
                            { text: 'No_of_Supplies', dataIndex: 'noOfSupplies', flex: 1 },
                            { text: 'City', dataIndex: 'city', flex: 1 },
                            { text: 'State', dataIndex: 'state' },
                            { text: 'Manufacturer Name', dataIndex: 'manufacturerName', flex: 1 },
                            { text: 'Phone No', dataIndex: 'phoneNo', flex: 1 },

                        ],


                    }
                    ],

                },
            ]
        },


    ],
});
