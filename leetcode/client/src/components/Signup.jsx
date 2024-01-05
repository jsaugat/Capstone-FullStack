import React from 'react'

function Signup() {
  return (
    <form className='h-screen m-auto'>
      <input className='p-2 rounded-lg border border-gray-500 bg-black' type="email" placeholder="Email" />
      <input className='p-2 rounded-lg border border-gray-500 bg-black' type="password" placeholder="Password" />
      <button className='bg-white hover:bg-gray-300 text-black rounded-full p-2 font-semibold px-3 py-2'>Sign up</button>
    </form>
  )
}

export default Signup
