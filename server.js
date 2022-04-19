const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const mysql = require('mysql2');
//Express.JS middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//connect to database

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

db.query(`SELECT * FROM candidates`,(err, rows)=>{
    console.log(rows);
});

// Default response for any other request (NOT Found)
app.use ((req, res)=>{
    res.status(404).end();
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});