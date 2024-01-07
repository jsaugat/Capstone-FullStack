import React from 'react'

function Container({children}) {
  return (
    <section className='container w-full max-h-screen py-16 rounded-[30px] bg-gray-200 flex justify-center items-center my-10'>
      {children}
    </section>
  )
}

export default Container
