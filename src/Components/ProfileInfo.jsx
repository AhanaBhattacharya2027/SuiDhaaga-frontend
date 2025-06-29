import React from 'react';
const ProfileInfo = ({personName,personId,personContactNumber}) => {
    return(
        <>
        
            <h1 className=' font-black text-3xl lg:text-4xl text-amber-950'>NAME : {personName}</h1>
            <h3 className=' font-black text-3xl lg:text-3xl text-amber-950'>ID: @{personId}</h3>
            <h3 className='font-black text-3xl lg:text-3xl text-amber-950'>Contact Number : {personContactNumber}</h3>
        </>

        
    );
}
export default ProfileInfo;