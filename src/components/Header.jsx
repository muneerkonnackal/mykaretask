import React, { useState } from 'react'
import logo from '../assets/logo.png'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

function Header() {

    let Links = [
        {name:'Home', link:'/'},
        {name:'Services', link:'/'},
        {name:'About', link:'/'},
        {name:'Contact', link:'/'}
        
    ]

    let [isOpen, setisOpen] = useState(false);
    const navigate = useNavigate();
    const handleLogout = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "Click Yes to Logout",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, logout"
        }).then((result) => {
          if (result.isConfirmed) {
            // Navigate
            navigate('/',{ replace: true });
            
            Swal.fire({
              title: "Logged Out!",
              text: "You have been successfully logged out.",
              icon: "success"
            });
          }
        });
      };
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
        <div className='md:px-10 py-4 px-7   md:flex items-center justify-between bg-white'>
    {/* logo image */}
            <div className='cursor-pointer'>
                <img src={logo} className='w-18 h-12' alt="logo" />
                </div>
    {/* menu icon */}
    <div onClick={()=> setisOpen(!isOpen)} className='absolute right-8 top-6 cursor-pointer md:hidden '>
        {
            isOpen? <i class="fa-solid fa-2xl fa-xmark"></i> : <i class="fa-solid fa-2xl fa-bars"></i>
        }
    
    
    </div>

            {/* nav links */}
            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto  pl-9 md:pl-0 transition-all duration-500 ease-in ${isOpen ? 'top-12' : 'top-[-490px]' }`}>
                {
                    Links.map(link =>(
                        <li className='font-semibold my-7 md:my-0 md:ml-8 hover:text-blue-700 '><a href="/">{link.name}</a></li>
                    ))
                }
                <button onClick={handleLogout} className='btn bg-blue-600 text-white py-1 px-3 md:ml-8 rounded hover:bg-orange-400'>Logout</button>
                
            </ul>

        </div>
    </div>
  )
}

export default Header