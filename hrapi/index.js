const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app= express();
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    try{
        res.json('welcome to hr api')
    } catch(err){
        res.status(500).json({Error:err.message})
    
    }
    }
);

app.get('/employees',async(req,res)=>{
    try{
        const result = await pool.query('select count(employee_id) from employees  ');
        res.json(result.rows);
    }
    catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/employee',async(req,res)=>{
    try{
        const result = await pool.query('select * from employees ');
        res.json(result.rows);
    }
    catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/job',async(req,res)=>{
    try{
        const result = await pool.query('select * from jobs ');
        res.json(result.rows);
    }
    catch(err){
        res.status(500).json({Error:err.message})

    }
});

app.get('/country',async(req,res)=>{
    try{
        const result = await pool.query('select * from countries ');
        res.json(result.rows);
    }
    catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/totalloc',async(req,res)=>{
    try{
        const result = await pool.query('select count(locations) from locations ');
        res.json(result.rows);
    }
    catch(err){
        res.status(500).json({Error:err.message})

    }
});

app.get('/totalloc',async(req,res)=>{
    try{
        const result = await pool.query('select count(locations) from locations ');
        res.json(result.rows);
    }
    catch(err){
        res.status(500).json({Error:err.message})

    }
});
app.get('/totalregion',async(req,res)=>{
    try{
        const result = await pool.query('select count(region_id) from regions ');
        res.json(result.rows);
    }
    catch(err){
        res.status(500).json({Error:err.message})

    }
});

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log( `Connected sucessfully... on PORT $ {PORT}`)

});