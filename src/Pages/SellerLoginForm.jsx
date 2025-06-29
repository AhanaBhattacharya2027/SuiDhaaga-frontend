import React from 'react';
import LoginForm from '../Components/LoginForm';
const SellerLoginForm=()=>{
    return(
        <>
            <LoginForm placeholder="Seller ID" id="sellerid" password="password" route="seller-logged-in"></LoginForm>
        </>
    );
}
export default SellerLoginForm;