
Ext.define('pharmacy.view.drugs', {
    extend: 'Ext.panel.Panel',

    requires: [
        'pharmacy.view.drugsController',
        'pharmacy.view.drugsModel'
    ],
    xtype:'drug',
    controller: 'drugs',
    viewModel: {
        type: 'drugs'
    },

    defaultType: 'textfield',
    items: [
        { title: 'Drugs Form' },
        {
            xtype: 'textfield',
            fieldLabel: 'Drug Id',
            allowBlank: false
        },

        {
            xtype: 'textfield',
            fieldLabel: 'Drug Name',
            allowBlank: false
        },

        {
            xtype: 'textfield',
            fieldLabel: 'Quantity',

            allowBlank: false
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Manufacturer Name',
            allowBlank: false
        },

        {
            xtype: 'textfield',
            fieldLabel: 'Price',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Expiry Date',
            allowBlank: false
        },

        {
            buttons: [{
                text: 'Clear Form',

            },
            {
                text: 'Add',
                handler: 'onAddClicked'

            }],

        }


    ]

});
