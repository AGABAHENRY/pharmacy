
Ext.define('pharmacy.view.sales', {
    extend: 'Ext.panel.Panel',

    requires: [
        'pharmacy.view.salesController',
        'pharmacy.view.salesModel'
    ],
    xtype: 'sale',
    controller: 'sales',
    viewModel: {
        type: 'sales'
    },

    listeners: { afterrender: 'onLoad' },
    items: [

        {
            xtype: 'container',
            layout: 'hbox',
            items: [

                {
                    title: 'Sales Form',
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
                            fieldLabel: 'Product Id',
                            //bind: '{productId}',
                            allowBlank: false
                        },

                        {
                            xtype: 'textfield',
                            fieldLabel: 'Name',
                            //bind: '{productName}',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Customer Id',
                            //bind: '{customerId}',
                            allowBlank: false
                        },

                        {
                            xtype: 'textfield',
                            fieldLabel: 'Customer Type Id',
                            //bind: '{customerTypeId}',
                            allowBlank: false
                        },

                        {
                            xtype: 'textfield',
                            fieldLabel: 'User',
                            //bind: '{user}',
                            allowBlank: false
                        },

                        {
                            xtype: 'combobox',
                            //bind: '{packagingType}',
                            fieldLabel: 'Packaging Type',
                            displayField: 'name',
                            valuefield: 'id',
                            forceSelection: true,
                            store: {
                                data: [
                                    { id: 'B', name: 'Boxes' },
                                    { id: 'S', name: 'Sackets' },
                                    { id: 'BB', name: 'Bottles' },
                                    { id: 'T', name: 'Tins' },
                                    { id: 'C', name: 'Containers' }

                                ]
                            },
                            allowBlank: false

                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Product Type',
                            //bind: '{producttType}',
                            allowBlank: false
                        },

                        {
                            xtype: 'textfield',
                            fieldLabel: 'Qty',
                            //bind: '{qty}',
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
                //Grid to display all Sales
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
                        title: 'All Sales',
                        emptyText: 'No sales available yet',
                        reference: 'grdAllSales',
                        columns: [
                            { text: 'Product Name', dataIndex: 'productName', /*flex: 1*/ },
                            { text: 'Product Type', dataIndex: 'producttType', /*flex: 1*/ },
                            { text: 'Packaging Type', dataIndex: 'user' },
                            { text: 'Qty', dataIndex: 'packagingType', flex: 1 },
                            { text: 'Product Id', dataIndex: 'qty', flex: 1 },
                            { text: 'Product Id', dataIndex: 'productId', flex: 1 },
                            { text: 'Product Id', dataIndex: 'customerTypeId', flex: 1 },
                            { text: 'Packaging Type', dataIndex: 'customerId' },
                        ],


                    }
                    ],

                },
            ]
        },


    ],



});
