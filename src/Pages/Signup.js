import React from "react";
import { useHistory } from "react-router";
import SignUp from "../component/Form/SignUp";
function Signup() {
  const history = useHistory();
  return (
    <main className="h-screen w-screen flex-col">
      <div className="flex relative space-x-10 p-6 bg-pharmeasy_green text-white shadow-md">
        <button
          onClick={() => history.push("/login")}
          className="py-2 px-4 text-lg border-b-2 border-pharmeasy_green hover:border-yellow-200 active:border-yellow-500 "
        >
          Login
        </button>
        <div className="py-2 px-4 text-lg border-b-2 border-yellow-500 ml-auto">
          Sign Up
        </div>
      </div>
      <div className="flex h-5/6 justify-center items-center p-1 py-4 ">
        <SignUp />
      </div>
    </main>
  );
}

export default Signup;
