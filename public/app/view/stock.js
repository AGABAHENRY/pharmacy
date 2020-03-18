
Ext.define('pharmacy.view.stock',{
    extend: 'Ext.panel.Panel',

    requires: [
        'pharmacy.view.stockController',
        'pharmacy.view.stockModel'
    ],
    xtype:'stok',
    controller: 'stock',
    viewModel: {
        type: 'stock'
    },
   
    

    listeners:{afterrender:'onLoad'},
    items: [

        {
            xtype: 'container',
            layout: 'hbox',
            items: [

                {
                    title: 'stock Form',
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
                                xtype:'textfield',
                                fieldLabel:'Product Type',
                                //bind: '{productType}',
                            allowBlank: false  
                            },
                
                            {
                            xtype:'textfield',
                            fieldLabel:'Qty',
                            //bind: '{qty}',
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
                //Grid to display all stock
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
                        title: 'All Stock',
                        emptyText: 'No stock available yet',
                        reference: 'grdAllStock',
                        columns: [
                            { text: 'Product Name', dataIndex: 'productName', /*flex: 1*/ },
                            { text: 'Product Type', dataIndex: 'productType', /*flex: 1*/ },
                            { text: 'Packaging Type', dataIndex: 'packagingType' },
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
