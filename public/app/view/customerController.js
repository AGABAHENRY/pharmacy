Ext.define('pharmacy.view.customerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customer',

    onLoad: async function(){
        this.loadAllcustomer();
    },
    onAddClicked: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
        this.loadAllcustomer();
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
            url: '/addcustomer',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });
        
        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('Data has been successfully saved','onSave', this);
                this.onAddClicked();
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    },
    loadAllcustomer: async function () {
        let customerList = this.lookupReference('grdAllCustomers');
        let response = await Ext.Ajax.request({ url: '/customer', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            customerList.setStore(store);
            store.load();
        }
    }

   


});
