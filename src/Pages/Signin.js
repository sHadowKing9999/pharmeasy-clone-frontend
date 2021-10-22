import React from "react";
import { useHistory } from "react-router";
import Form from "../component/Form/Form";
function Signin() {
  const history = useHistory();
  return (
    <main className="h-screen w-screen flex-col">
      <div className="flex space-x-10 p-6 bg-pharmeasy_green text-white shadow-md">
        <div className="py-2 px-4 text-lg border-b-2 border-yellow-500">
          Login
        </div>
        <button
          onClick={() => history.push("/signup")}
          className="py-2 px-4 text-lg border-b-2 border-pharmeasy_green hover:border-yellow-200 active:border-yellow-500 "
        >
          Sign Up
        </button>
      </div>
      <div className="flex h-5/6 justify-center items-center p-1 py-4 ">
        <Form />
      </div>
    </main>
  );
}

export default Signin;
