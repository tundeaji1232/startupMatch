
const db = require('../database/db_connections.js')

const checkRegistered = (email) => {
  return db.query(
    `SELECT CASE WHEN EXISTS(SELECT reg_email FROM register WHERE reg_email = $1) THEN CAST (true AS BOOLEAN) ELSE CAST (false AS BOOLEAN) END`, [email])

    module.exports=checkRegistered;
