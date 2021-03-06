"use strict";

let db = require('./mysqlhelper');

let addUser=(id,username,password)=>{
    let sql="INSERT INTO user (id,username,password) VALUES (?,?,?)";
    db.query(sql,[id,username,password])
    .then(result=>console.log("success"))
    .catch(()=>console.log("err"));
}

let findUser=(username)=>{
    let sql="SELECT * FROM user WHERE username = ?";
    console.log("Find the user");
    db.query(sql,[username])
    .then(result=>result)
    .catch(()=>null);
}

let findById=(id,done)=>{
    let sql="SELECT * FROM user WHERE id = ?";
    db.query(sql,[id])
    .then(user=>{
        console.log("Deserialize user "+user[0]);
        var err=null;
        done(err, user[0]);
    })
    .catch(()=>null);
}

exports.addUser = addUser;
exports.findUser=findUser;
exports.findById=findById;
