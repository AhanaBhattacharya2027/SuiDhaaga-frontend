import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ProfileInfo from '../Components/ProfileInfo';
const SellerDashboard = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [seller,setSeller] = useState(null);
    const [fabrics, setFabrics] = useState([]);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch(`https://suidhaaga2.onrender.com/api/seller-dashboard/${id}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.seller){
                setSeller(data.seller);
                setFabrics(data.fabrics); 
            }
            else
            {
                setError(data.message);
            }
        });
    },[id]);

    if(error) return (<h1>{error}</h1>);
    if(!seller) return (
        <h1>Loading....</h1>
    );

    return(
        <div className='w-full bg-amber-50 p-[5%]'>
            <ProfileInfo personName={seller.name} personId={seller.sellerid} personContactNumber={seller.contactnum}/> 
            <br />
            <button onClick={()=>{navigate('/fabric-form')}} className='w-[40%] p-3 bg-amber-950 text-amber-50 border border-solid border-amber-50 rounded-2xl font-black hover:bg-black hover:text-amber-50 lg:w-[20%]' >Upload a fabric</button>
            <br /><br />
            <button className='w-[40%] p-3 bg-amber-950 border  text-amber-50 border-solid border-amber-950 rounded-2xl font-black hover:bg-black hover:text-amber-50 lg:w-[20%]'>View my orders</button>
            <br />
            <h1 className='text-4xl font-black text-amber-950'>Your Fabrics : </h1>
            <br />
            <div className='h-full w-full grid gap-8 grid-cols-1 md:grid-cols-2  lg:grid-cols-4' >
                {fabrics.map((fabric)=>(
                    <div className='h-full w-full p-[2%] border-4 border-amber-950 flex flex-col justify-center items-center'>
                        <h1 className='text-3xl text-amber-950 font-black text-center'>{fabric.title}</h1>
                        <br />
                        <img src={fabric.image} className='h-[60%] w-[80%]' alt="" />
                        <h2 className='font-black'>Description</h2>       
                        <p className='font-black text-center'>
                            {fabric.description}
                        </p>    
                        <h2 className='text-3xl text-amber-950 font-black text-center'>{fabric.pricepermeter}/- per meter</h2>             
                    </div>
                ))}              
            </div>
        </div>
        
    
          
    );



}
export default SellerDashboard;