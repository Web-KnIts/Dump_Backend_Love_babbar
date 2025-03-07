//  step 5 
// Inorder to setup route handler we must import controller it in route in which we want to use
// create routes using express Router and export it 
const express = require('express');
const router = express.Router();


// import Controller for createTodo
const {createTodo} = require('../contollers/createTodo')
// define api routes (iss path pe, yeh logic perform karo)
router.post('/createtodo',createTodo);

// import controller for getTodo
const {getTodo} = require('../contollers/getTodo')
// define api route to get Data;
router.get('/gettodo',getTodo);

// import controller for singleTodo;
const {singleTodo} = require('../contollers/getTodo')
// define api route to get single Todo
router.get('/gettodo/:id',singleTodo)

// import controller for updating Todo
const {updateTodo} = require('../contollers/updateTodo')
//define api route to update Todo
router.put('/updatetodo/:id',updateTodo)

// import controller for deleting tod
const {deleteTodo}  = require('../contollers/deleteTodo')
router.delete('/deletetodo/:id',deleteTodo)

module.exports = router;