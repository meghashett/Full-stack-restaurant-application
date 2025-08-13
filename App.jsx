 
import React from 'react'; 
 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
 
 
 
import Navbar from './components/Navbar'; 
import MenuPage from './pages/MenuPage'; 
import OrderPage from './pages/OrderPage'; 
import AdminAddItem from './pages/AdminAddItem'; 
import LoginPage from './pages/LoginPage'; 
import ProtectedRoute from './components/ProtectedRoute'; 
 
 
function App() { 
return ( 
<Router> 
 
<Navbar /> 
 
<Routes> 
 
{/* Public Routes */} 
 
<Route path="/" element={<MenuPage />} /> 
 
<Route path="/order" element={<OrderPage />} /> 
 
<Route path="/login" element={<LoginPage />} /> 
 
 
 
{/* Admin Route */} 
 
<Route 
path="/admin/add" 
element={ 
<ProtectedRoute> 
 
<AdminAddItem /> 
 
</ProtectedRoute> 
 
} 
 
/> 
 
</Routes> 
 
</Router> 
 
); 
 
} 
 
 
 
export default App; 
