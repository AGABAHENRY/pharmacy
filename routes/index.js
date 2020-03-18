var express = require('express');
var router = express.Router();
const models = require('./../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//get for selecting users
router.get('/users', async function (req, res) {
  let usee = await models.users.findAll();

  res.send(usee);
});
router.get('/user', async function (req, res) {
  let id = req.query.id;
  let use = await models.users.findOne({ where: { userid: id } });
  res.send(use);
});


//for inserting in in users
router.post('/addUser', async function (req, res, next) {
  let rawdata = req.body;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.users.create(cleanData);
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

// for updating 
router.put('/users', async function (req, res, next) {
  let rawdata = req.body;
  let userid = rawdata.userid;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.users.update(cleanData, { where: { userid: cleanData.userid } });
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

//inventory section
//get for selecting inventory
router.get('/inventory', async function (req, res) {
  let inve = await models.inventory.findAll();

  res.send(inve);
});
router.get('/inventor', async function (req, res) {
  let id = req.query.id;
  let invent = await models.inventory.findOne({ where: { id: id } });
  res.send(invent);
});


//for inserting in inventory
router.post('/addInventory', async function (req, res, next) {
  let rawdata = req.body;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.inventory.create(cleanData);
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

// for updating 
router.put('/inventory', async function (req, res, next) {
  let rawdata = req.body;
  let id = rawdata.id;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.inventory.update(cleanData, { where: { id: cleanData.id } });
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

//manufacturer section
//get for selecting manufacturer
router.get('/manufacturer', async function (req, res) {
  let manu = await models.manufacturer.findAll();

  res.send(manu);
});
router.get('/manufacture', async function (req, res) {
  let id = req.query.id;
  let man = await models.manufacturer.findOne({ where: { Manufacturer_ID: id } });
  res.send(man);
});


//for inserting in manufacturer
router.post('/addmanufacturer', async function (req, res, next) {
  let rawdata = req.body;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.manufacturer.create(cleanData);
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

// for updating 
router.put('/manufacturer', async function (req, res, next) {
  let rawdata = req.body;
  let Manufacturer_ID = rawdata.Manufacturer_ID;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.manufacturer.update(cleanData, { where: { Manufacturer_ID: cleanData.Manufacturer_ID } });
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});


//for purchases
//get for selecting purchases
router.get('/purchases', async function (req, res) {
  let pur = await models.purchases.findAll();

  res.send(pur);
});
router.get('/purchase', async function (req, res) {
  let id = req.query.id;
  let purcha = await models.purchases.findOne({ where: { productid: id } });
  res.send(purcha);
});


//for inserting in in purchases
router.post('/addPurchases', async function (req, res, next) {
  let rawdata = req.body;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.purchases.create(cleanData);
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

// for updating 
router.put('/Purchases', async function (req, res, next) {
  let rawdata = req.body;
  let productid = rawdata.productid;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.purchases.update(cleanData, { where: { productid: cleanData.productid } });
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

//for sales
//get for selecting sales
router.get('/sales', async function (req, res) {
  let saa = await models.sales.findAll();

  res.send(saa);
});
router.get('/sale', async function (req, res) {
  let id = req.query.id;
  let sae = await models.sales.findOne({ where: { productid: id } });
  res.send(sae);
});


//for inserting in sales
router.post('/addSales', async function (req, res, next) {
  let rawdata = req.body;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.sales.create(cleanData);
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

// for updating 
router.put('/sales', async function (req, res, next) {
  let rawdata = req.body;
  let productid = rawdata.productid;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.sales.update(cleanData, { where: { productid: cleanData.productid } });
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

//for customer

//get for selecting customer

router.get('/customers', async function (req, res) {
  let cust = await models.customer.findAll();

  res.send(cust);
});
router.get('/customer', async function (req, res) {
  let id = req.query.id;
  let cus = await models.customer.findOne({ where: { customertypeid: id } });
  res.send(cus);
});


//for inserting in customer
router.post('/addCustomer', async function (req, res, next) {
  let rawdata = req.body;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.customer.create(cleanData);
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

// for updating 
router.put('/customer', async function (req, res, next) {
  let rawdata = req.body;
  let customertypeid = rawdata.customertypeid;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.customer.update(cleanData, { where: { customertypeid: cleanData.customertypeid } });
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});



//for products
//get for selecting products
router.get('/products', async function (req, res) {
  let prod = await models.products.findAll();

  res.send(prod);
});
router.get('/product', async function (req, res) {
  let id = req.query.id;
  let pro = await models.products.findOne({ where: { productid: id } });
  res.send(pro);
});


//for inserting in products
router.post('/addproducts', async function (req, res, next) {
  let rawdata = req.body;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.products.create(cleanData);
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

// for updating 
router.put('/products', async function (req, res, next) {
  let rawdata = req.body;
  let productid = rawdata.productid;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.products.update(cleanData, { where: { productid: cleanData.productid } });
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

//for stock
//get for selecting stock
router.get('/stock', async function (req, res) {
  let stocc = await models.stock.findAll();

  res.send(stocc);
});
router.get('/stoc', async function (req, res) {
  let productid = req.query.productid;
  let stoo = await models.stock.findOne({ where: { productid: id } });
  res.send(stoo);
});


//for inserting in stock
router.post('/addStock', async function (req, res, next) {
  let rawdata = req.body;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.stock.create(cleanData);
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

// for updating 
router.put('/stock', async function (req, res, next) {
  let rawdata = req.body;
  let id = rawdata.id;

  let cleanData = {};
  try {
    for (key in rawdata) {
      if (rawdata[key] !== '') {
        cleanData[key] = rawdata[key];
      }
    }
    let result;
    result = await models.stock.update(cleanData, { where: { productid: cleanData.productid } });
    res.send({ status: 'OK', data: result });

  } catch (err) {
    res.status(400).send("Sorry. Something happened on the server. Contact System Admin. ");
    console.log(err);
  }
});

module.exports = router;
