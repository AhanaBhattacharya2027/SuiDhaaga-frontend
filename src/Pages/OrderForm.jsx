import React from 'react';
import { useState } from 'react';
const OrderForm = () => {
    const [formData,setFormData]=useState({
        fabricid:"",
        designid:"",
        measurementImage:null,
        quantityOfClothes:0,
        contactno:"",
        address:""
    });

    const handleChange = (e) =>{
        setFormData({...formData,[e.target.name]:e.target.type==='file'?e.target.files[0]:e.target.value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const payload = new FormData();
        payload.append('fabricid',formData.fabricid);
        payload.append('designid',formData.designid);
        payload.append('measurementImage',formData.measurementImage);
        payload.append('quantityOfClothes',formData.quantityOfClothes);
        payload.append('contactno',formData.contactno);
        payload.append('address',formData.address);

        const res = await fetch("http://localhost:5000/api/order-placed",{
            method:'POST',
            body:payload,
            credentials:'include'
        });
        const message = await res.json();
        if(res.ok)
        {
            alert(message.message);
        }
        else
        {
            alert(message.message);
        }
    }
    return(
        <div className='min-h-screen w-full bg-amber-950 p-[5%] '>
            <div className='h-full w-full bg-amber-50 p-[5%] flex flex-col justify-between items-center'>
                <h1 className='text-3xl text-amber-950 font-black lg:text-4xl text-center'>Enter order details:</h1>
                <br /><br />
                <form onSubmit={handleSubmit} className='w-full flex flex-col items-center justify-between' >
                    <input onChange={handleChange} type="text" name='fabricid' placeholder='Fabric ID' className='w-[90%] h-10 lg:w-[40%] text-center border-4 border-amber-950' />
                    <input onChange={handleChange} type="text" name ='designid' placeholder='Design ID' className='w-[90%] h-10 lg:w-[40%] text-center mt-2 border-4 border-amber-950' />
                    <br />
                    <label >Upload pic of your measurement slip : </label>
                    <input onChange={handleChange} type="file" name='measurementImage' placeholder='Upload Measurement' className='w-[90%] h-10 lg:w-[40%] text-center mt-2 border-4 border-amber-950' />
                    <input onChange={handleChange} type="number" name='quantityOfClothes' placeholder='Quantity of Clothes(im metres)' className='w-[90%] h-10 lg:w-[40%] text-center mt-2 border-4 border-amber-950' />
                    <input onChange={handleChange} type="text" name='address' placeholder='Address' className='w-[90%] h-10 lg:w-[40%] text-center mt-2 border-4 border-amber-950' />
                    <input onChange={handleChange} type="text" name='contactno' placeholder='Contact Number' className='w-[90%] h-10 lg:w-[40%] text-center mt-2 border-4 border-amber-950' />
                    <button  className='w-[90%] h-10 lg:w-[40%] text-amber-50 font-black text-center mt-2 border-4 bg-amber-950 border-amber-950 hover:bg-black'>Place Order</button>
                </form>
            </div>
        </div>
    )
}
export default OrderForm;