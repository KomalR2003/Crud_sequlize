import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
   <>
   <div className='flex bg-gray-900 text-white m-5 p-5 justify-between'>
        <Link href='/'><h1 className='px-5 font-bold text-3xl my-2'>User Details</h1></Link>
        <Link href='/create'><button className=' bg-slate-500 p-3 rounded mx-5'>Add User</button></Link>
   </div>
   </>
  )
}

export default Navbar