import React from "react";
import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign up <span className="text-blue-500">ChatApp</span>
        </h1>
        <form action="">
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Fullname</span>
            </label>
            <input
              className="w-full input input-bordered input-primary max-w-xs"
              type="text"
              placeholder="Enter your Fullname"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-white">Username</span>
            </label>
            <input
              className="w-full input input-bordered input-primary max-w-xs"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <GenderCheckbox/>
          <div>
            <label className="label p-2">
              <span className="text-base label-text  text-white">Passward</span>
            </label>
            <input
              className="w-full input input-bordered input-primary max-w-xs"
              type="text"
              placeholder="Enter your Passward"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text  text-white">Confirm Password</span>
            </label>
            <input
              className="w-full input input-bordered input-primary max-w-xs"
              type="text"
              placeholder="Confirm Passward"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
