import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-100">
          Login
        </h1><span className="text-blue-500">Chat App</span>
          <form action="">
            <div>
              <label className="label p-2">
                <span className="text-base label-text text-white">Username</span>
              </label>
              <input className="w-full input input-bordered input-primary max-w-xs" type="text" placeholder="Enter your username" />
            </div>
            <div>
              <label className="label p-2">
                <span className="text-base label-text  text-white">Passward</span>
              </label>
              <input className="w-full input input-bordered input-primary max-w-xs" type="text" placeholder="Enter your Passward" />
            </div>
            <a href="#" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
              don't have an account?
            </a>
            <div className="w-full flex justify-center">
            <button className="btn btn-primary btn-sm mt-10 ">Login</button>
            </div>
            
          </form>
      </div>
    </div>
  );
};

export default Login;
