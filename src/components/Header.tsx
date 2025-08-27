import React from 'react'
import { FaCircleUser } from "react-icons/fa6";
import { CiMenuBurger } from "react-icons/ci";
import Link from 'next/link';


const Header = () => {
  return (
    <header className='w-full flex justify-center h-[12vh] items-center bg-fuchsia-200'>
        <nav className='flex justify-between w-full h-full items-center *:m-3'>
          <CiMenuBurger className='text-2xl' />   
          <h1 className='text-7xl'>My TO DO List</h1>
          <Link href="/register" className='cursor-pointer'><FaCircleUser className='text-2xl' />
          </Link>
          
        </nav>
    </header>
  )
}

export default Header
