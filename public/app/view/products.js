
Ext.define('pharmacy.view.products',{
    extend: 'Ext.panel.Panel',

    requires: [
        'pharmacy.view.productsController',
        'pharmacy.view.productsModel'
    ],
    xtype:'product',
    controller: 'products',
    viewModel: {
        type: 'products'
    },

    listeners:{afterrender:'onLoad'},
    items: [

        {
            xtype: 'container',
            layout: 'hbox',
            items: [

                {
                    title: 'Products Form',
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
            xtype:'textfield',
            fieldLabel:'Product Id',
            //bind: '{productId}',
            allowBlank: false
            },

            {
            xtype:'textfield',
            fieldLabel:'Name',
            //bind: '{productName}',
            allowBlank: false   
            },
            {
                xtype:'textfield',
                fieldLabel:'Manufacturer',
                //bind: '{manufacturer}',
                allowBlank: false   
                },
            
           
            {
                xtype:'textfield',
                fieldLabel:'Product Type',
                //bind: '{productType}',
            allowBlank: false  
            },
            {
                xtype:'datefield',
                fieldLabel:'Mfg Date',
                //bind: '{mfgDate}',
                allowBlank: false 
                },
            {
            xtype:'datefield',
            fieldLabel:'Expiry Date',
            //bind: '{expiryDate}',
            allowBlank: false 
            },


                    ],
                                    buttons: [{
                    text: 'Clear Form',
                    
                }, {
                    text: 'Add',
                    handler:'onAddClicked'
    
                }],
    
    
                },
                //Grid to display all Products
                {
                    margin: '0 3 0 10',
                    bodyPadding: '0 4 0 0',
                    width: '50%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        extend: 'Ext.grid.Panel',
                        xtype: 'grid',
                        title: 'All Products',
                        emptyText: 'No product available yet',
                        reference: 'grdAllProducts',
                        columns: [
                            { text: 'Product Name', dataIndex: 'productName', /*flex: 1*/ },
                            { text: 'Product Type', dataIndex: 'productType', /*flex: 1*/ },
                            { text: 'Manufacturer', dataIndex: 'manufacturer' },
                            { text: 'Mfg Date', dataIndex: 'mfgDate', flex: 1 },
                            { text: 'Expiry Date', dataIndex: 'expiryDate', flex: 1 },
                            { text: 'Product Id', dataIndex: 'productId' },
                          
                        ],


                    }
                    ],

                },
            ]
        },


    ],


});
