import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

function Allusers() {

    const [allusers, setallUsers] = useState([]);
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('users')) || [];
        setallUsers(user);
    }, []);
  return (
    <div
      className="min-h-screen  flex flex-col  items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(115deg, rgba(147,255,156,1) 0%, rgba(200,243,217,1) 100%)",
      }}
    >
      <Header />

      <div className="w-full flex justify-center mb-6">
        <Link to={'/admindashboard'}>
            <button className='btn bg-blue-600 p-2 text-xl rounded text-white hover:bg-orange-400'>
              Back To <i className="fa-solid fa-xl fa-house-user"></i>
            </button>
        </Link>
      </div>

      <div className="w-10/12 lg:w-1/3  bg-white rounded  py-10 lg:py-20">
       
        <div className="flex w-full justify-center mb-4 ">
          <h2 className="text-2xl font-bold">All Users</h2>
        </div>

        <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
                <thead >
                    <tr>
                        <th className="py-2 px-4 border-b">Sl.No</th>
                        <th className="py-2 px-4 border-b">Username</th>
                        <th className="py-2 px-4 border-b">Password</th>
                    </tr>
                </thead>
                <tbody>
                   { allusers.length>0 ? (
                    allusers.map((user,index)=>(
                        <tr>
                        <td className="py-2 px-4 border-b text-center">{index+1}</td>
                        <td className="py-2 px-4 border-b text-center">{user.username}</td>
                        <td className="py-2 px-4 border-b text-center">{user.password}</td>
                    </tr>
                      ))
                   ) : (
                    <tr>
                        <td className="py-2 px-4 border-b text-center text-xl font-bold" colSpan='3'>No Users Found!!!</td>
                    </tr>
                   )
                   }
                </tbody>
            </table>

        </div>
      </div>
    </div>
  );
}

export default Allusers;
