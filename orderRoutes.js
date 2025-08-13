 
const express = require('express'); 
const router = express.Router(); 
const Order = require('../models/Order'); 
 
 
 
router.post('/', async (req, res) => { 
const { items, userId, total } = req.body; 
const newOrder = new Order({ items, userId, total }); 
await newOrder.save(); 
res.status(201).json(newOrder); 
}); 
 
 
 
module.exports = router;
