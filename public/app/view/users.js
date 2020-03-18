
Ext.define('pharmacy.view.users',{
    extend: 'Ext.panel.Panel',

    requires: [
        'pharmacy.view.usersController',
        'pharmacy.view.usersModel'
    ],
    xtype:'users',
    controller: 'users',
    viewModel: {
        type: 'users'
    },
    listeners:{afterrender:'onLoad'},
    bodyPadding: 5,
    title: 'Users Form',
    items: [
    
        {
            xtype: 'container',
            layout: 'vbox',
            items: [
                //users's form
                {
                    title: 'Users Form',
                    margin: '0 5 0 5',
                    bodyPadding: 5,
                    width: '70%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [ 
                        
                        {
                        xtype:'textfield',
                        fieldLabel:'User Id',
                        //bind: '{userid}',
                        allowBlank: false
                        },
            
                        {
                        xtype:'textfield',
                        fieldLabel:'User Name',
                        //bind: '{username}',
                        allowBlank: false   
                        },
                        
                        {
                        xtype:'textfield',
                        fieldLabel:'Address',
                       // bind: '{address}',
                        allowBlank: false  
                        },
                        {
                            xtype:'textfield',
                            fieldLabel:'Contact',
                            //bind: '{contact}',
                        allowBlank: false  
                        },
            
                        {
                        xtype:'textfield',
                        fieldLabel:'Email',
                        //bind: '{email}',
                        allowBlank: false 
                        },
            

                    ],
                    buttons: [{
                        text: 'Clear Form',
                        
                    }, {
                        text: 'Register',
                        handler:'onRegisterClicked'

                    }],

                },
                //Grid to display all users
                {
                    margin: '20 5 0 15',
                    bodyPadding: '0 5 0 0',
                    width: '70%',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%'
                    },
                    defaultType: 'textfield',
                    items: [{
                        extend: 'Ext.grid.Panel',
                        xtype: 'grid',
                        title: 'All Users',
                        emptyText: 'No user available yet',
                        reference:'grdAllUsers',
                        columns: [
                            { text: 'User_Id', dataIndex: 'userId', /*flex: 1*/ },
                            { text: 'User_Name', dataIndex: 'userName', /*flex: 1*/ },
                            { text: 'Address', dataIndex: 'address'},
                            { text: 'Contact', dataIndex: 'contact',flex: 1},
                            { text: 'Email', dataIndex: 'email',flex: 1},
                            
                        ],

                       
                    }
                    ],

                },
            ]
        },
    
        
    ],
});
