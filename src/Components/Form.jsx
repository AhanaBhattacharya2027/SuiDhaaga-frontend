import React from 'react';
import {useState} from 'react';
const Form = () => {
        const [formData, setFormData] = useState({
            name:"",
            contactno:"",
            userid:"",
            password:"",

        });
        const handleChange = (e) => {
            setFormData({...formData, [e.target.name]:e.target.value});
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            const res = await fetch("http://localhost:5000/api/customer-registered",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(formData)

            });

            setFormData({name:"",contactno:"",userid:"",password:""});
        };
    
    return(
        <div className='bg-amber-950 h-screen w-full p-[5%] flex flex-row justify-center items-center'>
            <div className='bg-amber-50 w-[100%] h-[100%] p-[5%] flex flex-col items-center'>
                <form onSubmit={handleSubmit}action="" className='flex flex-col justify-center items-center'>
                    <h1 className='font-black text-amber-950 text-4xl text-center'>Enter you personal details:</h1>
                    <br />
                    <input value={formData.name} onChange={handleChange}type="text" placeholder='Full Name' className='text-center w-[60%] h-10 m-3 border-4 border-solid border-amber-950' name='name' />
                    <input value={formData.contactno} onChange={handleChange}type="text" placeholder='Contact No.' className='text-center w-[60%] h-10 m-3 border-4 border-solid border-amber-950' name='contactno' />
                    <input value={formData.userid} onChange={handleChange}type="text" placeholder='User ID(Unique)' className='text-center w-[60%] h-10 m-3 border-4 border-solid border-amber-950' name='userid' />
                    <input value={formData.password} onChange={handleChange}type="password" placeholder='Password' className='text-center w-[60%] h-10 m-3 border-4 border-solid border-amber-950' name='password' />
                    <button className='w-[60%] h-10 bg-amber-950 text-amber-50 hover:bg-black hover:text-amber-50 hover:shadow hover:shadow-amber-950'>Register as a user</button>

                </form>
                <a className='text-blue-800 hover:underline'href="">Already have an account?Sign-in</a>
            </div>
        </div>
    )
}
export default Form;