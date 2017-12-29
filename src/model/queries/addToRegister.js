const db = require('../database/db_connections.js')


const addToRegister=(user_details)=>{
  db.query(INSERT INTO register (reg_name,reg_email,reg_passwword) VALUES (`$1,$2,$3`,[user_details.name,user_details.email, hashedReturnAbove]);
}
