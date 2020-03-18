Ext.define('pharmacy.view.usersController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.users',
    onLoad: async function(){
        this.loadAllusers();
    },
    onRegisterClicked: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
        this.loadAllusers();
    },
    cleanupData: function (rawData) {
        let data = {};
        for (let key in rawData) {
            let type = typeof rawData[key]
            if (['string', 'number', 'date'].includes(type)) {
                data[key] = rawData[key];
            }
        }
        return data;
    },

    saveData: async function (rawData) {
        let form = this.getView();
        let data = this.cleanupData(rawData);  
        let response = await Ext.Ajax.request({
            url: '/addusers',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });
        
        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('Data has been successfully saved','onSave', this);
                this.onRegisterClicked();
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    },
    loadAllusers: async function () {
        let inventoryList = this.lookupReference('grdAllUsers');
        let response = await Ext.Ajax.request({ url: '/users', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            inventoryList.setStore(store);
            store.load();
        }
    }


});
