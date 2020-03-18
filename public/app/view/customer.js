
Ext.define('pharmacy.view.customer', {
    extend: 'Ext.panel.Panel',

    requires: [
        'pharmacy.view.customerController',
        'pharmacy.view.customerModel'
    ],
    xtype: 'customer',
    controller: 'customer',
    viewModel: {
        type: 'customer'
    },

    defaults: {
        margin: '20 5 0 5',
        bodyPadding: 5,
        width: '70%',
    },
    listeners: { afterrender: 'onLoad' },

    title: 'Customers Form',
    items: [

        {
            xtype: 'container',
            layout: 'vbox',
            items: [

                {
                    title: 'Customers Form',
                    margin: '0 5 0 5',
                    bodyPadding: 5,
                    width: '90%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',

                    items: [

                        {
                            xtype: 'textfield',
                            fieldLabel: 'CustomerTypeId',
                            forceSelection: true,
                        },
                        {

                            xtype: 'combobox',
                            //bind: '{customerType}',
                            fieldLabel: 'Customer Type',
                            displayField: 'name',
                            valuefield: 'id',
                            forceSelection: true,
                            store: {
                                data: [
                                    { id: 'O', name: 'Overthecounter' },
                                    { id: 'C', name: 'Customer' },

                                ]
                            }
                        },


                    ],

                    buttons: [{
                        text: 'Clear Form',

                    }, {
                        text: 'Add',
                        handler: 'onAddClicked'

                    }],


                },
                //Grid to display all customers
                {
                    margin: '20 5 0 15',
                    bodyPadding: '0 5 0 0',
                    width: '90%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        extend: 'Ext.grid.Panel',
                        xtype: 'grid',
                        title: 'All Customer Types',
                        emptyText: 'No customer available yet',
                        reference: 'grdAllCustomers',
                        columns: [
                            { text: 'customer Type Id', dataIndex: 'customerTypeId', flex: 1 },
                            { text: 'customer Type', dataIndex: 'customerType', flex: 1 },

                        ],


                    }
                    ],

                },
            ]
        },


    ],





});
