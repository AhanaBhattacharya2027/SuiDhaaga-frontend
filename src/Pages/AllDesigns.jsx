import React, { useEffect } from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import TailorDashboard1 from './TailorDashboard1';
const AllDesigns = () => {
    const navigate = useNavigate();
    const[designs,setDesigns] = useState(null);
    const[error,setError] = useState(null);
    useEffect(()=>{
        fetch("http://localhost:5000/api/all-designs")
        .then(res=>res.json())
        .then(data=>{
            
            
                setDesigns(data.designs);
            
            
        })
    },[]);
    if(error) 
    return(
        <h1>{error}</h1>       
    );

    if(!designs)
    return(
        <h1>Loading...</h1>
    );

    if (designs.length === 0) return <h1>No designs available right now.</h1>;

    return(
        <>
        <h1 className='text-center text-2xl lg:text-4xl text-amber-950 font-black'>Our Designs : </h1>
        <div className='p-[5%] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
            {
                
                designs.map((design)=>(
                    <div className='p-[5%] w-[100%] border-4 border-amber-950' >
                        <h1 className='text-center text-1xl lg:text-2xl text-amber-950 font-black'>Designid : {design.designid}</h1>
                        <h1 className='text-center text-2xl lg:text-4xl text-amber-950 font-black'>{design.title}</h1>
                        <br />
                        <div className='flex flex-col justify-between items-center'>
                            <img className='w-[50%] m-1' src={design.imagefront} alt="" />
                            <img className='w-[50%] m-1' src={design.imageback} alt="" />
                        </div>     
                        <h3 className='text-center text-2xl lg:text-3xl text-amber-950 font-black'>{design.description}</h3>
                        <h3 className='text-center text-2xl lg:text-3xl text-amber-950 font-black'>{design.makingCharges}/- for making</h3>                                           
                    </div>
                ))
            }
                                    
        </div>
        </>
    )
}
export default AllDesigns;