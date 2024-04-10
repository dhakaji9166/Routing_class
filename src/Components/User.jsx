import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='p-4 m-auto bg-zic-100 w-1/2 mt-10'>
      <h1 className='text-orange-800 font-semibold mb-3 text-3xl'>User</h1>
      <p className='mb-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate nemo optio aliquid explicabo dolor expedita harum amet, minus nostrum. Minus corrupti aliquid repellendus cupiditate voluptates magnam ea vero laborum in!</p>

      <div className='flex flex-col mt-5 mb-3'>
        <Link to="/user/John" className='px-5 py-3 bg-pink-400 hover:bg-pink-500 text-brown-600 font-semibold m-3 w-1/4 text-xl'>John</Link>
        <Link to="/user/wick" className='px-5 py-3 bg-pink-400 hover:bg-pink-500 text-brown-600 font-semibold m-3 w-1/4 text-xl'>Wick</Link>
        <Link to="/user/lalchand" className='px-5 py-3 bg-pink-400 hover:bg-pink-500 text-brown-600 font-semibold m-3 w-1/4 text-xl'>Lalchand</Link>
        <Link to="/user/mukesh" className='px-5 py-3 bg-pink-400 hover:bg-pink-500 text-brown-600 font-semibold m-3 w-1/4 text-xl'>Mukesh</Link>

      </div>
      <button className='px-7 mt-5 py-3 font-semibold rounded bg-orange-400 text-white '>Explore More</button>
      <br /> <br />
      {/* <hr /> */}
      {/* <Outlet /> */}

    </div>
  )
}

export default User