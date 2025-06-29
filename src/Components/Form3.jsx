import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Form3 = () => {
    const navigate = useNavigate();
    const [form3Data,setForm3Data] = useState({
        name:"",
        sellerid:"",
        contactnum:"",
        password:"",
        address:"",
        region:"",
        pincode:""
    });

    const handleChange = (e) => {
        setForm3Data({...form3Data,[e.target.name]:e.target.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/seller-registered",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            credentials: "include",
            body: JSON.stringify(form3Data)
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
        <div className='h-screen w-full bg-amber-950 p-[2%] flex justify-center'>
            <div className='h-full w-[80%] bg-amber-50 p-[2%]'>
                <h1 className='text-center font-black text-amber-950 text-4xl'> Enter your details : </h1>
                <br />
                <form onSubmit={handleSubmit} className='flex flex-col justify-between items-center' >
                    <input onChange={handleChange} type="text" placeholder='Full Name' className="w-[90%] h-10 text-center border-4 border-amber-950 lg:w-[40%]" name="name" />
                    <input onChange={handleChange} type="text" placeholder='SellerID(Unique)' className="w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%]" name="sellerid" />
                    <input onChange={handleChange} type="text" placeholder='Contact Number' className="w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%]" name="contactnum" />
                    <input onChange={handleChange} type="password" placeholder='Password' className="w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%]" name="password" />
                    <input onChange={handleChange} type="text" placeholder='Address' className="w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%]" name="address" />
                    <input onChange={handleChange} type="text" placeholder='Region' className="w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%]" name="region" />
                    <input onChange={handleChange} type="text" placeholder='Pincode' className="w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%]" name="pincode" />
                    <button className='w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%] bg-amber-950 text-amber-50'>Register as a seller</button>
                    <a className='text-blue-800 hover:underline' href="/seller-login">Already have an account? Sign in</a>
                </form>
            </div>

        </div>
    );
    
    
}
export default Form3;