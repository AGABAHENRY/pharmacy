
Ext.define('pharmacy.view.inventory',{
    extend: 'Ext.panel.Panel',

    requires: [
        'pharmacy.view.inventoryController',
        'pharmacy.view.inventoryModel'
    ],
    xtype:'invent',
    controller: 'inventory',
    viewModel: {
        type: 'inventory'
    },
    listeners:{afterrender:'onLoad'},
    bodyPadding: 5,

    items: [
    
        {
            xtype: 'container',
            layout: 'hbox',
            items: [
                //users's form
                {
                    title: 'Inventory Form',
                    margin: '0 5 0 5',
                    bodyPadding: 5,
                    width: '50%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    
                    items: [ 
                        
                        {
                        xtype:'textfield',
                        fieldLabel:'Id',
                        //bind: '{id}',
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
                       // bind: '{qty}',
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
                //Grid to display all users
                {
                    margin: '0 5 0 15',
                    bodyPadding: '0 5 0 0',
                    width: '50%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        extend: 'Ext.grid.Panel',
                        xtype: 'grid',
                        title: 'All Inventory',
                        emptyText: 'No inventory available yet',
                        reference:'grdAllInventory',
                        columns: [
                            { text: 'Id', dataIndex: 'id', /*flex: 1*/ },
                            { text: 'Name', dataIndex: 'productName', /*flex: 1*/ },
                            { text: 'packaging Type', dataIndex: 'packagingType'},
                            { text: 'productType', dataIndex: 'productType',flex: 1},
                            { text: 'Qty', dataIndex: 'qty',flex: 1},
                             
                        ],

                       
                    }
                    ],

                },
            ]
        },
    
        
    ],
});
