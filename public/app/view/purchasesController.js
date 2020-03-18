Ext.define('pharmacy.view.purchasesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.purchases',


    
    onLoad: async function(){
        this.loadAllpurchases();
    },
    onSaveClicked: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
        this.loadAllpurchases();
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
            url: '/addpurchases',
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            params: JSON.stringify(data)
        });
        
        if (response.responseText) {
            let result = JSON.parse(response.responseText);
            if (result.status === 'OK') {
                Ext.Msg.alert('Data has been successfully saved','onSave', this);
                this.onSaveClicked();
                let parent = form.up('window');
                if (parent) {
                    parent.destroy();
                }
            }
        }
    },
    loadAllpurchases: async function () {
        let purchasesList = this.lookupReference('grdAllpurchases');
        let response = await Ext.Ajax.request({ url: '/purchases', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            purchasesList.setStore(store);
            store.load();
        }
    }

   

});
