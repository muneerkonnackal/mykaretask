import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import loginImg from "../assets/welcome.jpg";
import regImg from "../assets/reg.jpg";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import Swal from 'sweetalert2'

function Login({ userregister }) {
  const [userData, setuserData] = useState({
    username: "",
    password: "",
  });
  console.log(userData);

  const navigate = useNavigate();

  const registerForm = userregister ? true : false;
  useState;

  useEffect(() => {
    const adminData = { username: "admin", password: "admin" };
    localStorage.setItem("admin", JSON.stringify(adminData));
  }, []);

//   Register the user
const handleRegister = ()=>{
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if(users.some(user => user.username === userData.username && user.password === userData.password)){
        Swal.fire({
            icon: "error",
            title: "Registration Failed",
            text: "Already Registered Please Login!",
            
          });
    } else{
        users.push({ username: userData.username, password: userData.password });
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('currentUser', JSON.stringify({ username: userData.username, password: userData.password }));
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Registered",
            showConfirmButton: false,
            timer: 1500
          });
        navigate('/')
    }
    console.log(users);
}



//login
const handleLogin =()=>{
    const admin = JSON.parse(localStorage.getItem('admin'));
    if(userData.username === admin.username && userData.password === admin.password){
        localStorage.setItem('currentUser', JSON.stringify(admin));
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Admin Login Successful",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/admindashboard')
    } else{
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user=> user.username === userData.username && user.password === userData.password)
        if(user){
            localStorage.setItem('currentUser', JSON.stringify(user));
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Login Successful",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/userhome')
        } else{
            Swal.fire({
                icon: "error",
                title: "RLogin Failed",
                text: "Incorrect Username or Password!",
                
              });
        }
    }

}



  return (
    <>
      {/* <Header/> */}
      <div className="shadow-md w-full fixed top-0 left-0">
        <div className="md:px-10 py-4 px-7   md:flex items-center justify-between bg-white">
          {/* logo image */}
          <div className="cursor-pointer">
          <Link to={'/'}>  <img src={logo} className="w-18 h-12" alt="logo" /></Link>
          </div>
          <div>
            <h2 className="text-lg font-bold px-5 "  style={{ fontFamily: "Lato, sans-serif", color:"#00ffc9" }}>Your Gateway to Premium Health Care</h2>
          </div>
        </div>
        
      </div>
      <div
        className="min-h-screen py-40"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(147,255,156,1) 0%, rgba(200,243,217,1) 100%)",
        }}
      >
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div
              className="w-full lg:w-1/2 py-16 px-12"
              style={{
                backgroundImage: `url(${userregister ? regImg : loginImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
               </div>

            <div className="w-full lg:w-1/2 py-16 px-12">
              {userregister ? (
                <h1 className="text-3xl mb-4">Register your Account</h1>
              ) : (
                <h1 className="text-3xl mb-4">Login your Account</h1>
              )}
              <form action="#">
                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Username"
                    className="w-full border border-grey-800 h-10"
                    required
                    value={userData.username}
                    onChange={(e) =>
                      setuserData({
                        ...userData,
                        username: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mt-5">
                  <input
                    type="text"
                    placeholder="Password"
                    className="w-full border border-grey-800 h-10"
                    required
                    value={userData.password}
                    onChange={(e) =>
                      setuserData({
                        ...userData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>

                {userregister && (
                  <div className="mt-5">
                    <input
                      type="text"
                      placeholder="Confirm Password"
                      className="w-full border border-grey-800 h-10"
                      required
                      value={userData.password}
                      onChange={(e) =>
                        setuserData({
                          ...userData,
                          password: e.target.value,
                        })
                      }
                    />
                  </div>
                )}

                {registerForm ? (
                  <div>
                    <button
                      onClick={handleRegister}
                      className="mt-5 w-full bg-purple-500 py-3 text-center text-white  "
                    >
                      Register
                    </button>
                    <h6 className="mt-3 text-black">
                      Already a user? Click here to{" "}
                      <Link to={"/"} style={{ color: "Blue" }}>
                        Login
                      </Link>
                    </h6>
                  </div>
                ) : (
                  <div>
                    <button
                        onClick={handleLogin}
                      className="mt-5 rounded w-full bg-purple-500 py-3 text-center text-white"
                    >
                      Login
                    </button>
                    <h6 className="mt-3 text-black">
                      New user? Click here to{" "}
                      <Link to={"/userregister"} style={{ color: "Blue" }}>
                        Register
                      </Link>
                    </h6>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
