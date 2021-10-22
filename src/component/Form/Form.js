import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EyeIcon, EyeOffIcon, CheckCircleIcon } from "@heroicons/react/outline";
import login from "../../redux/actions/login";
import { useHistory } from "react-router";
import ReactLoading from "react-loading";
function Form() {
  const history = useHistory();
  const { token, error, isLoading } = useSelector((state) => state.login);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [toggleShow, setToggleShow] = useState("password");
  const [submit, setSubmit] = useState(false);
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    if (e.target.value.length <= 10) {
      setUsername(e.target.value);
      if (e.target.value.length === 10) setSubmit(true);
      else setSubmit(false);
    }
  };
  const requestHandler = (e) => {
    e.preventDefault();
    dispatch(login(username, password));
  };
  const toggleShowHandler = () => {
    if (toggleShow === "password") setToggleShow("text");
    else setToggleShow("password");
  };
  if (isLoading)
    return (
      <div className="flex h-72 w-full items-center justify-center">
        <ReactLoading
          type={"bars"}
          color={"#10847e"}
          height={200}
          width={200}
        />
      </div>
    );
  else if (token.token != null) {
    return (
      <div className="flex-col w-3/5 md:1/2 lg:1/3 space-y-10 mx-auto p-6 bg-white rounded-md shadow-md">
        <div className="flex w-full justify-center items-center">
          <h1 className="text-3xl text-bold">Login Succesful</h1>
          <CheckCircleIcon className="h-10 ml-2 text-pharmeasy_green" />
        </div>
        <div className="flex w-full justify-center">
          <button
            className="button text-lg rounded-md shadow-sm p-3"
            onClick={() => history.push("/")}
          >
            Click for Home
          </button>
        </div>
      </div>
    );
  } else
    return (
      <div className="flex-col space-y-6 mx-auto my-auto p-6 bg-white rounded-md shadow-md relative">
        <h1 className="text-3xl text-bold">Login</h1>
        <form
          className="mx-auto my-auto flex-col space-y-6"
          onSubmit={requestHandler}
        >
          <input
            className="p-2 w-full rounded-md bg-gray-200  focus:outline-none"
            type="text"
            placeholder="10 Digit Mobile Number"
            value={username}
            onChange={inputHandler}
            pattern="[0-9]+"
            required
          />

          <div className="flex items-center">
            <input
              className="p-2 w-full rounded-l-md bg-gray-200  focus:outline-none"
              type={toggleShow}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="p-2 bg-gray-200 rounded-r-md"
              onClick={toggleShowHandler}
            >
              {toggleShow === "password" ? (
                <EyeOffIcon className="h-6 " />
              ) : (
                <EyeIcon className="h-6" />
              )}
            </span>
          </div>

          <div className={`${error === null && "hidden"}`}>
            {error != null ? (
              <small className="text-red-500">
                Invalid mobile number password combination retry again!
              </small>
            ) : (
              ""
            )}
          </div>
          <button
            type="submit"
            className={`button w-auto rounded-md text-lg ${
              !submit && "from-gray-200 to-gray-500"
            }`}
            disabled={!submit}
          >
            Submit
          </button>
        </form>
        <button
          onClick={() => history.push("/")}
          className="button w-auto rounded-md text-lg absolute right-6 bottom-6"
        >
          Back to Home
        </button>
      </div>
    );
}

export default Form;
