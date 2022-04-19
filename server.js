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

// db.query(`SELECT * FROM candidates`,(err, rows)=>{
//     console.log(rows);
// });

//Get a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log(row);
// });

//Delete a candidate
// db.query(`DELETE FROM candidates WHERE id=?`, 1, (err, result)=>{
//     if (err){
//         console.log(err);
//     }
//         console.log(result);
// });

// Create a candidate
// const sql =`INSERT INTO candidates (id, first_name, last_name, industry_connected)
//             VALUES (?,?,?,?)`;
// const params =[1, 'Ronald', 'Firbank', 1];

db.query(sql,params,(err,result)=>{
    if (err){
        console.log(err);
    }
        console.log(result);
})
// Default response for any other request (NOT Found)
app.use ((req, res)=>{
    res.status(404).end();
});

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});