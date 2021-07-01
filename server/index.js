const { Router } = require('express');
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser');
//const db = require('../database');
const morgan = require('morgan')
const knex = require('knex')({
    client: 'pg',
    connection: 'postgres://postgres:docker@localhost:5432/todolist',
});

app.get('/', (req, res)=>{
    
    knex.select().from('todolist').then(function(data){
        res.send(data);
        
    });
});

//middleware
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.post(`/api/insert`, (req, res) =>{
    console.log(req.body)
    const todoTask = req.body.todoItem;
    
    knex('todolist').insert([{task:todoTask}]).then(function(data){
        res.send(data);
    });   
/*      knex.insert(todoTask).returning('*').into('todolist').then(function(data){
        res.send(data);
    });   */
})


app.listen(3001, () => {
    console.log('running on port 3001');
});