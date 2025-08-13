
const mongoose = require('mongoose'); 
 
 
 
const menuItemSchema = new mongoose.Schema({ 
name: String, 
description: String, 
 
 
17 | P a g e  
price: Number, 
 
 
 
category: String, 
image: String 
}); 
 
 
 
module.exports = mongoose.model('MenuItem', menuItemSchema);
