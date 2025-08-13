const express = require('express'); 
const router = express.Router(); 
const MenuItem = require('../models/MenuItem'); 
 
 
 
router.get('/', async (req, res) => { 
const items = await MenuItem.find(); 
res.json(items); 
}); 
 
 
 
router.post('/', async (req, res) => { 
 
const newItem = new MenuItem(req.body); 
await newItem.save(); 
res.status(201).json(newItem); 
}); 
 
 
 
module.exports = router;
