
import { useState } from 'react'; 
import axios from 'axios'; 
 
 
 
 
function AdminAddItem() { 
 
const [form, setForm] = useState({ 
 
name: '', description: '', price: '', category: '', image: '' 
 
}); 
 
 
 
 
 
const handleSubmit = async (e) => { 
e.preventDefault(); 
await axios.post('/api/menu', form); 
alert('Item added!'); 
}; 
 

return ( 
 
<form onSubmit={handleSubmit}> 
 
<input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} 
/> 
 
{/* other fields */} 
 
<button type="submit">Add Item</button> 
 
</form> 
 
); 
 
} 
 
 
 
export default AdminAddItem; 
