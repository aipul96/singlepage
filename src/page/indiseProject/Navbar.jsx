import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div >
            <div className="flex text-white pb-8 flex-row justify-center list-none gap-8 items-center header">
                <input className='rounded-md' type="text" />
                <li>Categories</li>
                <li>Website builder</li>
                <li>Today's deals</li>
            </div>
         
        </div>
    )
}

export default Navbar