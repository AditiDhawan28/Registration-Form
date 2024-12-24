import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app=express();
app.use(cors());
app.use(express.json())

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"signup"
})

app.post('./signup',(req,res)=>{
    const sql="Insert into users(`name`,`mobile`,`email`,`age`,`password`,`address`) values (?)"
    const values=[
        req.body.name,
        req.body.mobile,
        req.body.email,
        req.body.age,
        req.body.password,
        req.body.address
    ]
    db.query(sql,[values],(err,result)=>{
        if(err){
            return res.json({Message:"Error Occured"})
        }
        return res.json(result)
    })
})

app.post('./login',(req,res)=>{
    const sql="Select * from users where email=? and password=password=?"
    const values=[
        
        req.body.email,
        req.body.password,
    ]
    db.querysql,[values],(err,result)=>{
        if(err){
            return res.json({Message:"Error Occured inside Server"})}
            if(result.length>0){
                return res.json({Login:true})
            }
            else{
                return res.json({Login:false})
            }
            }
        }
        
    )
