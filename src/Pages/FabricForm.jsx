import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const FabricForm = () =>{
    const navigate=useNavigate();
    const [fabricData,setFabricData] = useState({
        fabricid:"",
        title:"",
        description:"",
        material:"",
        pricepermeter:"",
        image:null,
    });

    const handleChange=(e)=>{
        setFabricData({...fabricData, [e.target.name]: e.target.type === 'file'?e.target.files[0]:e.target.value});
    };

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const formData=new FormData();
        formData.append('fabricid',fabricData.fabricid);
        formData.append('title',fabricData.title);
        formData.append('description',fabricData.description);
        formData.append('material',fabricData.material);
        formData.append('pricepermeter',fabricData.pricepermeter);
        formData.append('image',fabricData.image);


        const res = await fetch("https://suidhaaga2.onrender.com/api/fabric-registered",{
            method:'POST',
            body:formData,
            credentials: 'include'

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


    };

    return(
        <div className='w-full h-screen bg-amber-950 p-[5%] flex justify-center items-center'>
            <div className='w-[80%] bg-amber-50 flex flex-col justify-center items-center p-[5%]'>
                <h1 className='text-4xl text-amber-950 font-black'>Enter Fabric details:</h1>
                <br />
                <form onSubmit={handleSubmit} encType="multipart/form-data" className='w-[100%] flex flex-col justify-center items-center'>
                    <input onChange={handleChange} type="text" placeholder='Fabric ID (Unique)' name='fabricid' className='w-[80%] h-10 text-center border-solid border-4 border-amber-950 lg:w-[40%]'/>
                    <input onChange={handleChange} type="text" placeholder='Title' name='title' className='w-[80%] h-10 text-center border-solid border-4 border-amber-950 mt-1 lg:w-[40%]'/>
                    <input onChange={handleChange} type="text" placeholder='Description' name='description' className='w-[80%] h-10 text-center border-solid border-4 border-amber-950 mt-1 lg:w-[40%]'/>
                    <input onChange={handleChange} type="text" placeholder='Material' name='material' className='w-[80%] h-10 text-center border-solid border-4 border-amber-950 mt-1 lg:w-[40%]'/>
                    <input onChange={handleChange} type="number" placeholder='price/meter' name='pricepermeter' className='w-[80%] h-10 text-center border-solid border-4 border-amber-950 mt-1 lg:w-[40%]'/>
                    <input onChange={handleChange} type="file" placeholder='Enter the image' name="image" className='text-blue-950 font-black w-[80%] lg:w-[40%]' />
                    <button className='w-[80%] h-10 border-solid bg-amber-950 text-amber-50  border-4 border-amber-950 mt-1 rounded-2xl hover:bg-black hover:shadow-2xl hover:shadow-amber-950 lg:w-[40%] '>Upload fabric</button>
                    
                </form>
            </div>
                 
        </div>
    );
}
export default FabricForm;