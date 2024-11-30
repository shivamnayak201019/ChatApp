import React, { useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");


const {loading,login}=useLogin()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    await login(username,password)
  }
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-100">
          Login
        </h1><span className="text-blue-500">Chat App</span>
          <form onSubmit={handleSubmit}>
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-white">Username</span>
              </label>
              <input className="w-full input input-bordered input-primary max-w-xs" type="text" placeholder="Enter your username" 
              value={username} onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text  text-white">Passward</span>
              </label>
              <input className="w-full input input-bordered input-primary max-w-xs" type="text" placeholder="Enter your Passward" 
              value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <Link to='/signup' className="text-white text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
              don't have an account?
            </Link>
            <div className="w-full flex justify-center">
            <button className="btn btn-primary btn-sm mt-10" disabled={loading}>
              {loading? <span className="loading loading-spinner"></span>:"Login"}
            </button>
            </div>
            
          </form>
      </div>
    </div>
  );
};

export default Login;
