const Sequelize = require('sequelize');
let dbname = 'pharmacy';
let dbhost = 'localhost';
let dbuser = 'root';
let dbpassword='';
let dbport='3306';

module.exports.sequelize=new Sequelize(dbname, dbuser, dbpassword,{
host: dbhost,
port:dbport,
dialect:'mysql',
logging:false,
omitNull:true,
pool:{max:5, min:0, acquire:30000, idle:10000}

});