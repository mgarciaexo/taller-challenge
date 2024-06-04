import React from "react";

const Header = () => {

  return (
    <div className='bg-gray-100 h-[70px] z-10 drop-shadow-lg'>
      <div className='px-2 flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold text-black mr-4 sm:text-4xl'>Taller challenge.</h1>
          <ul className='hidden text-black md:flex'>
            <li className='cursor-pointer relative group hover:bg-white hover:text-green-600 hover:rounded-lg'>
                Todos
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;