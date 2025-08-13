 
import axios from 'axios'; 
 
 
 
function OrderPage({ selectedItems, currentUser }) { 
const handlePlaceOrder = () => { 
axios.post('/api/orders', { 
items: selectedItems.map(i => i._id), 
userId: currentUser._id, 
total: selectedItems.reduce((sum, item) => sum + item.price, 0) 
 
}).then(() => alert('Order placed!')); 
 
}; 
 
 
 
 
 
return ( 
 
<button onClick={handlePlaceOrder}>Place Order</button> 
 
); 
 
} 
 
 
 
export default OrderPage;
