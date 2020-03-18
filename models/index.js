const config = require('../config');
const sequelize = config.sequelize;
const db = {};

db.inventory = sequelize.import('./inventory');//.schema('public');
db.users = sequelize.import('./users');
db.purchases = sequelize.import('./purchases');
db.sales = sequelize.import('./sales');
db.customertypes = sequelize.import('./customer');
db.stock = sequelize.import('./stock');
db.manufacturer = sequelize.import('./manufacturer');
db.products = sequelize.import('./products');

module.exports = db;