import React from 'react';
const Tab = ({tagName,href}) =>{
    return(
        <a href={href} className="no-underline text-amber-50 text-1.5xl font-bold m-4 sm:text-center hover:underline hover:underline-offset-2">
            {tagName}
        </a>
    );
}
export default Tab;