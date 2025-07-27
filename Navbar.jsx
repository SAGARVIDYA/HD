import React from 'react'
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' bg-red-600 flex border space-x-8 items-center pl-3 py-4'>
       <img className='w-[190px]' src={logo}/>
       <Link to='/'className=' text-4xl font-bold' >home</Link>
       <Link to='/watchlist'className=' text-4xl font-bold'>Watch list</Link>
    </div>
  )

}

export default Navbar;
