 
import { useEffect, useState } from 'react'; 
import axios from 'axios'; 
 
 
 
 
function MenuPage() { 
 
const [menuItems, setMenuItems] = useState([]); 
 
 
 
 
 
useEffect(() => { 
axios.get('/api/menu') 
.then(res => setMenuItems(res.data)) 
 
.catch(err => console.error(err)); 
 
}, []); 
 
 
 
 
 
return ( 
 
<div className="menu"> 
 
{menuItems.map(item => ( 
 
<div key={item._id} className="card"> 
 
<img src={item.image} alt={item.name} /> 
 
<h3>{item.name}</h3> 
 
<p>{item.description}</p> 
 
<p>₹{item.price}</p> 
 
</div> 
 
))} 
 
</div> 
 
); 
 
} 
 
 
 
export default MenuPage;
