
Ext.define('pharmacy.view.purchases', {
    extend: 'Ext.panel.Panel',

    requires: [
        'pharmacy.view.purchasesController',
        'pharmacy.view.purchasesModel'
    ],
    xtype: 'purchase',
    controller: 'purchases',
    viewModel: {
        type: 'purchases'
    },


    listeners: { afterrender: 'onLoad' },
    items: [

        {
            xtype: 'container',
            layout: 'hbox',
            items: [

                {
                    title: 'Purchases Form',
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
                            fieldLabel: 'Qty',
                            //bind: '{qty}',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Cost Price',
                            //bind: '{costPrice}',
                            allowBlank: false
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: 'Supplier',
                            //bind: '{supplier}',
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
                            fieldLabel: 'Unit Price',
                            //bind: '{unitPrice}',
                            allowBlank: false
                        },

                    ],
                    buttons: [{
                        text: 'Clear Form',

                    }, {
                        text: 'Save',
                        handler: 'onSaveClicked'

                    }],


                },
                //Grid to display all Purchases
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
                        title: 'All Purchases',
                        emptyText: 'No purchases available yet',
                        reference: 'grdAllpurchases',
                        columns: [
                            { text: 'Product Name', dataIndex: 'productName', /*flex: 1*/ },
                            { text: 'Supplier', dataIndex: 'supplier', /*flex: 1*/ },
                            { text: 'Unit Price', dataIndex: 'unitPrice' },
                            { text: 'Cost Price', dataIndex: 'costPrice', flex: 1 },
                            { text: 'Packaging Type', dataIndex: 'packagingType', flex: 1 },
                            { text: 'Qty', dataIndex: 'qty', flex: 1 },
                            { text: 'Product Id', dataIndex: 'productId', flex: 1 },


                        ],


                    }
                    ],

                },
            ]
        },


    ],


});
