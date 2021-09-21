
const mysql = require('mysql2');
const Props = require('../helper/api-properties');
const logger = require('../middleware/log');
const util = require('util')
const { Sequelize } = require('sequelize');


let dbURI = Props.db.url; 


const sequelize = new Sequelize(Props.db.url,{
  logging: msg => logger.debug(msg),
  define: {
    freezeTableName: true
  }
});
(async function(){
  try {
    await sequelize.authenticate();
    logger.info('Connection has been established successfully.');
  } catch (error) {
    logger.error('Unable to connect to the database:', error);
  }
 })();

 (async function(){
  await sequelize.sync();
  console.log("All models were synchronized successfully.");
 })();  



// const pool = mysql.createPool({
//   host: Props.db.host,
//   port: Props.db.port,
//   user: Props.db.user,
//   password : Props.db.password,
//   database: Props.db.database,
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// pool.query('SELECT 1 + 1', (error, results, fields) => {
//   if (error) throw error;
//   logger.info("DB Connected Successfully");
// });

// // Ping database to check for common exception errors.
// pool.getConnection((err, connection) => {
//   if (err) {
//     if (err.code === 'PROTOCOL_CONNECTION_LOST') {
//       console.error('Database connection was closed.')
//     }
//     if (err.code === 'ER_CON_COUNT_ERROR') {
//       console.error('Database has too many connections.')
//     }
//     if (err.code === 'ECONNREFUSED') {
//       console.error('Database connection was refused.')
//     }
//   }

//   if (connection) connection.release()

//   return
// })

// pool.query = util.promisify(pool.query)
// const promisePool = pool.promise();

module.exports = sequelize;