/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('pharmacy.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'pharmacy.view.main.MainController',
        'pharmacy.view.main.MainModel',
        'pharmacy.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'x-fa fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'top'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [
        /*{
        title: 'Home',
        iconCls: 'x-fa fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }] 
    }*/, {
            title: 'Users',
            iconCls: 'x-fa fa-user',
            xtype: 'users'
        },
        {
            title: 'Inventory',
            iconCls: 'x-fa fa-users',
            xtype: 'invent',
        },

        {
            title: 'Manufacturer',
            iconCls: 'x-fa fa-users',
            xtype: 'man'
        },

        {
            title: 'Products',
            iconCls: 'x-fa fas fa-tasks',
            xtype: 'product'
        },

        {
            title: 'Stock',
            iconCls: 'x-fa fa-users',
            xtype: 'stok'
        },

        {
            title: 'Sales',
            iconCls: 'x-fa fas fa-cart-arrow-down',
            xtype: 'sale'
        },

        {
            title: 'Purchases',
            iconCls: 'x-fa fas fa-cart-arrow-down',
            xtype: 'purchase'
        },

        {
            title: 'Customers',
            iconCls: 'x-fa fa-user',
            xtype: 'customer'
        },

        {
            title: 'Drugs',
            iconCls: 'x-fa fa-user',
            xtype: 'drug'
        },
    ]
});
