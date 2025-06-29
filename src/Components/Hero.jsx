import React from 'react';
import bg1 from '../assets/bg1.avif';
import image5 from '../assets/image5.jpg'
import {useNavigate} from 'react-router-dom';
const Hero = () => {
    const navigate=useNavigate();
    return(
        
        <>
        <div className='mt-0 h-auto w-full absolute'>
            <img src={bg1} className='h-200 w-full lg:h-200'  alt="" />        
        </div>
            <div className='w-full p-[10%] pt-[20%] h-full'>
                <h1 className='text-amber-900 text-4xl  font-black relative font-serif lg:text-4xl text-center  ' >"From Fabric to Fit — Tailored Just for You"</h1>
                <br />
                <h1 className='text-amber-900 text-2xl  font-black relative font-serif lg:text-2xl text-center' >"Buy fabric online, choose your style, and let our local tailors craft your perfect fit."</h1>
                <br />
                <button onClick={()=>{navigate('/place-an-order')}} className='relative h-15 w-50 rounded-xl ml-[10%]   bg-amber-950 text-amber-50  hover:bg-black hover:text-amber-50 hover:shadow-xl hover: shadow-amber-800 lg:ml-[40%]'>PLACE YOUR ORDER</button>
                <br /><br />
                <button onClick={()=>{navigate('/sign-up-tailor')}} className='relative h-15 w-75 rounded-xl ml-[0.001%]   bg-amber-950 text-amber-50  hover:bg-black hover:text-amber-50 hover:shadow-xl hover: shadow-amber-800  lg:ml-[35%]'>Join our Tailors/designers community</button>
                <br /><br />
                <button onClick={()=>{navigate('/sign-up-seller')}} className='relative h-15 w-75 rounded-xl ml-[0.001%]   bg-amber-950 text-amber-50  hover:bg-black hover:text-amber-50 hover:shadow-xl hover: shadow-amber-800  lg:ml-[35%]'>Sell your product</button>
            </div >
                    
        </>
    )
}
export default Hero;