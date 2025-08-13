  
const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
require('dotenv').config(); 
 
const menuRoutes = require('./routes/menuRoutes'); 
const orderRoutes = require('./routes/orderRoutes'); 
 
 
const app = express(); 
app.use(cors()); 
app.use(express.json()); 
 
 
mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true }) 
 
.then(() => console.log('MongoDB connected')) 
 
.catch(err => console.log(err)); 
 
 
 
app.use('/api/menu', menuRoutes); 
app.use('/api/orders', orderRoutes); 
 
 
app.listen(5000, () => console.log('Server running on port 5000'));
