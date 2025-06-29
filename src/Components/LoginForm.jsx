import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginForm = ({placeholder,id,password,route}) =>{
    const navigate=useNavigate();
    const [loginFormData,setLoginFormData]=useState({
        [id]:"",
        [password]:"",     
    });       
    const handleChange =(e) =>{
        setLoginFormData({...loginFormData,[e.target.name]:e.target.value});
    } 

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res= await fetch(`http://localhost:5000/api/${route}`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(loginFormData),
        });
        const data=await res.json();
        if(res.ok)
        {
            navigate(data.redirectTo);
        }
        else
        {
            alert(data.message);
        }

    }

    return(
        <div className='w-full min-h-screen bg-amber-950 p-[10%]'>
            <div className='w-full min-h-full bg-amber-50 flex flex-col justify-between items-center p-[5%]'>
                <h1 className="text-4xl font-black text-amber-950 text-center">Enter your credentials</h1>
                <br />        
                <form onSubmit={handleSubmit} className='flex flex-col justify-between items-center w-[100%]'>
                    <input type="text" onChange={handleChange}  placeholder={placeholder} name={id} className='w-[70%] h-15 border-4 border-solid border-amber-950 lg:w-[40%] text-center' />
                    <input type="text" onChange={handleChange}  placeholder="Password" name={password} className='w-[70%] h-15 border-4 border-solid border-amber-950 lg:w-[40%] text-center mt-2'/>
                    <button className='w-[70%] h-15 border-4 border-solid bg-amber-950 border-amber-950 lg:w-[40%] text-center mt-2 text-amber-50 font-black hover:bg-black'>Log in</button>
                </form>      
            </div>
        </div>
    )
}

export default LoginForm;