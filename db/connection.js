const mysql = require('mysql2');


const db = mysql.createConnection({
    host: 'localhost',
    //Your MySQL username,
    user: 'root',
    //Your MYSQL password
    password: '$Jobang123195',
    database: 'election'
},
console.log('connected to the eletion database.')
)


module.exports=db;