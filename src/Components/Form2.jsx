import React from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Form2 = () => {
    const navigate = useNavigate();
    const [form2data, setForm2data] = useState({
        name:"",
        tailorid:"",
        password:"",
        contactnum:"",
        address:"",
        region:"",
        pincode:""
    });
    const handleChange = (e) => {
        setForm2data({...form2data,[e.target.name]:e.target.value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:5000/api/tailor-registered",{
            method:"POST",
                headers:{
                    "Content-Type":"application/json"

                },
                credentials:'include',
                body:JSON.stringify(form2data),

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

        setForm2data({name:"",tailorid:"",password:"",contactnum:"",address:"",region:"",pincode:""});
    }

    return(
        <div className='h-screen w-full bg-amber-950 p-[3%] flex flex-row justify-center items-center '>
            <div className='flex flex-col h-full w-[80%] bg-amber-50 p-[5%]'>
                <h1 className='text-center font-black text-amber-950 text-4xl'> Enter your details : </h1>
                <br />
                <form onSubmit={handleSubmit} className='flex flex-col justify-between items-center'>
                    <input onChange={handleChange} name="name" type="text" placeholder='Full Name' className='w-[90%] h-10 text-center border-4 border-amber-950 lg:w-[40%]' />
                    <input onChange={handleChange} name="tailorid" type="text" placeholder='Tailor ID(Unique)' className='w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%]' />
                    <input onChange={handleChange} name="password" type="password" placeholder='Password' className='w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%]' />
                    <input onChange={handleChange} name="contactnum" type="text" placeholder='Contact Number' className='w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%]' />
                    <input onChange={handleChange} name="address" type="text" placeholder='Full Address' className='w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%]' />
                    <input onChange={handleChange} name="region" type="text" placeholder='Region' className='w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%]' />
                    <input onChange={handleChange} name="pincode" type="number" placeholder='Pincode' className='w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%]' />
                    <button className='w-[90%] h-10 text-center border-4 border-amber-950 mt-2 lg:w-[40%] bg-amber-950 text-amber-50'>Register as a tailor</button>
                    <a className='text-blue-800 hover:underline' href="/tailor-sign-in">Already have an account? Sign in</a>
                </form>
            </div>            
        </div>
    );
}
export default Form2;