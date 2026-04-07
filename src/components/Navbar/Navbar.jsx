import React from 'react'
import logo from '../../assets/images/logo.png'
import Btn from '../Btn/Btn.jsx'


const Navbar = () => {
  return (
    <nav className='absolute top-0 left-0 w-full z-10 '>
      <div className="container">
        <div className="nav-main flex items-center  pt-12.5">
        <div className='logo w-1/2'>
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className='links w-3/5'>
          <ul className='flex gap-12 '>
            <li><a href="" >Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Service</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Contact</a></li>
          </ul>
        </div>
        <div className='btn w-1/2 text-end'>
           <Btn text="Contact"/>
        </div>
      </div>
      </div>
    </nav>
  )
}

export default Navbar