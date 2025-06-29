import React from 'react';
import LoginForm from '../Components/LoginForm';
const TailorSignIn = () => {
    return(
        <LoginForm placeholder="Tailor ID" id="tailorid" password="password" route="tailor-logged-in"/>       
    );
} 
export default TailorSignIn;