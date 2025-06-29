import React from 'react';
import Tab from './Tab.jsx';
import Logo from './Logo.jsx';
const Navbar = () => {
    return(
    <div className="p-4 md:p-10 bg-amber-900 flex flex-col items-center md:flex-row w-full h-auto justify-between ">
        <Logo></Logo>
        <div className='flex flex-col justify-center items-center md:flex-row'>
            <Tab tagName="Home" href="#"></Tab>
            <Tab tagName="About Us" href="#"></Tab>
            <Tab tagName="Our designs" href="/all-designs"></Tab>
            <Tab tagName="Explore Fabrics" href="#"></Tab>
            <Tab tagName="Book a measurement" href="#"></Tab>
        </div>
    </div>
    )
}
export default Navbar;