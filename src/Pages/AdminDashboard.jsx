import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import heroImg from '../assets/hero5.png'
import { Link } from 'react-router-dom';

function AdminDashboard() {
    const [currentUser, setCurrentUser] = useState({});
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('currentUser'));
        setCurrentUser(user);
    }, []);
  return (
    <div className="min-h-screen items-center flex flex-col lg:flex-row  bg-white rounded-xl mx-auto shadow-lg overflow-hidden"
    style={{
      backgroundImage:
        "linear-gradient(111deg, rgba(14,255,156,1) 0%, rgba(20,243,217,1) 100%)",
    }}>
        <Header/>
        <div className='w-full lg:w-1/2 px-12 py-40 pl-20 '>
            <h1 className="text-5xl font-bold  "  style={{ fontFamily: "Lato, sans-serif", color:"#000", }}>Welcome <span className='text-blue-800'>{currentUser.username} </span> <br /> Your Premium Dashboard is Ready Here...</h1>
            <button className='btn bg-blue-600 p-2 mt-3 rounded text-white hover:bg-orange-400'>Explore More</button>
            <Link to={'/allusers'}><button className='btn bg-orange-400 lg:mx-5 mx-3 p-2 mt-3 rounded text-white hover:bg-orange-400'>Show All Users</button></Link>
        </div>

        <div className='w-full lg:w-1/2  px-12 items-center'>
           <img className='w-full lg:w-10/12 h-auto pb-10' src={heroImg} alt="" />
        </div>
        
    </div>
  )
}

export default AdminDashboard