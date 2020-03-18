Ext.define('pharmacy.view.stockController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.stock',

    onLoad: async function(){
        this.loadAllstock();
    },
    onAddClicked: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
        this.loadAllstock();
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
            url: '/addstock',
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
    loadAllstock: async function () {
        let stockList = this.lookupReference('grdAllStock');
        let response = await Ext.Ajax.request({ url: '/stock', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            stockList.setStore(store);
            store.load();
        }
    }


});
