import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Signup_customer from './Pages/Signup_customer.jsx'
import Signup_tailor from './Pages/Signup_tailor.jsx'
import TailorDashboard1 from './Pages/TailorDashboard1.jsx'
import SignupSeller from './Pages/SignupSeller.jsx'
import SellerDashboard from './Pages/SellerDashboard.jsx';
import FabricForm from './Pages/FabricForm.jsx';
import SellerLoginForm from './Pages/SellerLoginForm.jsx'
import DesignUploadForm from './Pages/DesignUploadForm.jsx'
import AllDesigns from './Pages/AllDesigns.jsx';
import TailorSignIn from './Pages/TailorSignIn.jsx';
import OrderForm from './Pages/OrderForm.jsx'
const App = () => {
  return(
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-up-customer" element={<Signup_customer/>}/> 
        <Route path="/sign-up-tailor" element={<Signup_tailor/>}/>
        <Route path="/tailor-dashboard/:id" element={<TailorDashboard1/>}/> 
        <Route path="/sign-up-seller" element={<SignupSeller/>}/>
        <Route path="/seller-dashboard/:id" element={<SellerDashboard/>}/>
        <Route path="/fabric-form" element={<FabricForm/>}/>
        <Route path="/seller-login" element={<SellerLoginForm/>}/>
        <Route path="/design-upload" element={<DesignUploadForm/>}/>
        <Route path="/all-designs" element={<AllDesigns/>}/>
        <Route path="/tailor-sign-in" element={<TailorSignIn/>}/>
        <Route path="/place-an-order" element={<OrderForm/>}/>
        
      </Routes>
    
  );
}
export default App;