 
const mongoose = require('mongoose'); 
 
 
 
const orderSchema = new mongoose.Schema({ 
 
items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MenuItem' }], 
userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, 
total: Number, 
 
status: { type: String, default: 'Pending' } 
 
}); 
 
 
 
module.exports = mongoose.model('Order', orderSchema);
