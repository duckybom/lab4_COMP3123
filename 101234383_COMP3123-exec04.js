const express = require('express');
const path = require('path');
const app = express(),
    bodyParser = require("body-parser");
const res = require("express");
port = 3080;

app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.send(`<h1>Hello Express JS</h1>`);
});

// http://localhost:3080/user?firstname=Pritesh&lastname=Patel //

app.get("/user",(req,res) =>{
    let first_name = req.query.firstname
    let last_name = req.query.lastname
    res.send(req.query)
    let response = {
        status:'Success',
        first_name,
        last_name
    }
    res.send(response)
})

// http://localhost:3080/user/Pritesh/Patel //

app.post("/user/:first_name/:last_name",(req,res) =>{
    let first_name = req.params.firstname
    let last_name = req.params.lastname
    res.send(req.params)
    let response = {
        status:'Success',
        first_name,
        last_name
    }
    res.send(response)
})

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});