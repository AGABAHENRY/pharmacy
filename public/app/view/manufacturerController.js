Ext.define('pharmacy.view.manufacturerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.manufacturer',

    onLoad: async function(){
        this.loadAllmanufacturer();
    },
    onAddClicked: async function () {
        let data = this.getViewModel().getData();
        this.saveData(data);
        this.loadAllmanufacturer();
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
            url: '/addmanufacturer',
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
    loadAllmanufacturer: async function () {
        let manufacturerList = this.lookupReference('grdAllManufacturers');
        let response = await Ext.Ajax.request({ url: '/manufacturer', method: 'get' });
        if (response.responseText) {
            let records = JSON.parse(response.responseText);
            let store = Ext.create('Ext.data.Store', { data: records });
            manufacturerList.setStore(store);
            store.load();
        }
    }

});
