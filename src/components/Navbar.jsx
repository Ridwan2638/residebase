import React, { useState } from 'react'
import { Link } from 'react-router'


const Navbar = () => {

  return (
    <nav className=' font-roboto font-medium'>

       {/* nav for bigger screen start  */}
        <ul className='hidden desktop:flex gap-4'>
       <Link to='#'>LandLord</Link>
       <Link to='#'>Tenant</Link>
       <Link to='#'>Agent</Link>
       <Link to='#'>Property Buyer</Link>
       <Link to='#'>Property Seller</Link>
       </ul>
       {/* nav for bigger screen ends  */}
    </nav>
  )
}

export default Navbar