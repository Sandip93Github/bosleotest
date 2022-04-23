import React from 'react'
import logo from '../../src/assets/moviebox.svg'

const Footer = () => {
    return (
        <div className="bg-gray-800 relative flex justify-center items-center  h-14 ">

            <div className="mx-2">
                <p className="text-white text-lg">&#169; 2022</p>
            </div >
            <div className=" mx-2">
                <img src={logo} alt="Logo" />
            </div>
            <div className="mx-2">
                <p className="text-white text-lg">All Rights Reserved</p>
            </div>


        </div>
    )
}

export default Footer