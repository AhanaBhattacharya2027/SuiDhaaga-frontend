import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProfileInfo from './ProfileInfo.jsx'
const TailorDashboard = () =>{
    const {id} = useParams();
    const [tailor,setTailor] = useState(null);
    const [designs,setDesigns] = useState(null);
    const [error,setError] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5000/api/tailor-dashboard/${id}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.tailor){
                setTailor(data.tailor);
                setDesigns(data.designs);
            }
            else{
                setError(data.message);
            }
        });
    },[id]);

    if(error) return (
        <h1>{error}</h1>
    );
    if (!tailor) return <h2>Loading...</h2>;
    return(
        <div className='bg-amber-50 w-full p-[5%]'>
            <ProfileInfo personName={tailor.name} personId={tailor.tailorid} personContactNumber = {tailor.contactnum}/>
            <br />
            <button onClick={() => navigate('/design-upload')} className='w-[40%] p-3 bg-amber-950 text-amber-50 border border-solid border-amber-50 rounded-2xl font-black hover:bg-black hover:text-amber-50 lg:w-[20%]'>Upload your creations/designs</button>
            <br /> <br />
            <button className='w-[40%] p-3 bg-amber-950 text-amber-50 border border-solid border-amber-50 rounded-2xl font-black hover:bg-black hover:text-amber-50 lg:w-[20%]'>My Orders</button>
            <br /><br />
            <h1 className='text-4xl font-black text-amber-950'>Your Designs : </h1>
            <br />
            <div classname='bg-amber-50 h-full w-full grid gap-8 grid-cols-1 md:grid-cols-2  lg:grid-cols-2'>
                {
                designs.map((design)=>(
                    <div className='w-[90%] border-4 border-amber-950 p-[5%] flex flex-col justify-between align-center lg:w-[40%]'>
                        <h1 className='font-black text-2xl text-amber-950 text-center lg:text-4xl'>{design.title}</h1>
                        <h1 className='font-black text-2xl text-amber-950 text-center lg:text-4xl'>Design-id:{design.designid}</h1>     
                        <div className='p-[3%] flex flex-col items-center justify-between m-4' >
                            <img src={design.imagefront} className='w-[80%] 'alt="" />
                            <img src={design.imageback} className='w-[80%] mt-[10%] 'alt="" />
                        </div> 
                        <h3 className='text-center font-black text-2xl'>
                            {design.description}
                        </h3> 
                        <h3 className='text-center font-black text-2xl'>
                            {design.makingCharges}/- making
                        </h3>  

                    </div>

                ))}


            </div>

        </div>
    );

} 
export default TailorDashboard;