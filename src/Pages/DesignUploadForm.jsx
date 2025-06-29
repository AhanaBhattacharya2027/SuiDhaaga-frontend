import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const DesignUploadForm = () =>{
    const navigate=useNavigate();
    const [formData,setFormData] = useState({
        designid:"",
        title:"",
        description:"",
        imagefront:null,
        imageback:null,
        makingCharges:0,
        
    });

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.type==='file'?e.target.files[0]:e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = new FormData();
        payload.append('designid',formData.designid);
        payload.append('title',formData.title);
        payload.append('description',formData.description);
        payload.append('imagefront',formData.imagefront);
        payload.append('imageback',formData.imageback);
        payload.append('makingCharges',formData.makingCharges);

        const res = await fetch("https://suidhaaga2.onrender.com/design-registered",{
            method:'POST',
            body:payload,
            credentials:'include'
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
        <div className='w-full min-h-screen p-[5%] bg-amber-950 flex flex-row items-center'>
            <div className='h-full w-full flex flex-col justify-between items-center bg-amber-50 p-[5%]'>
                <h1 className='text-4xl font-black text-amber-950 text-center'>Enter design details:</h1>
                <br />
                <form onSubmit={handleSubmit} encType="multipart/form-data" className='flex flex-col w-full h-full justify-between items-center'>
                <input onChange={handleChange} type="text" placeholder="Design ID" className='w-[80%] h-10 plax lg:w-[50%] border-4 border-amber-950 text-center ' name='designid'/>
                <input  onChange={handleChange} type="text" placeholder="Title" className='w-[80%] h-10 plax lg:w-[50%] border-4 border-amber-950 text-center mt-2 ' name='title'/>
                <input onChange={handleChange} type="text" placeholder="Description" className='w-[80%] h-10 plax lg:w-[50%] border-4 border-amber-950 text-center mt-2 ' name='description'/>
                <input onChange={handleChange} type="file" placeholder="FrontSide" className='w-[80%] h-10 plax lg:w-[50%] border-4 border-amber-950 text-center mt-2 ' name='imagefront'/>
                <input onChange={handleChange} type="file" placeholder="BackSide" className='w-[80%] h-10 plax lg:w-[50%] border-4 border-amber-950 text-center mt-2 ' name='imageback'/>
                <input onChange={handleChange}  type="number" placeholder="Making Charges" className='w-[80%] h-10 plax lg:w-[50%] border-4 border-amber-950 text-center mt-2 ' name='makingCharges'/>
                <button className='w-[80%] h-10 lg:w-[50%] border-4 border-amber-950 bg-amber-950 text-amber-50 text-center mt-2 font-black hover:bg-black'>Submit</button>
                </form>


            </div>            
        </div>
    );
}
export default DesignUploadForm;