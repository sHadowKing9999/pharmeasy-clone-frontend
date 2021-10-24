import React, { useState, useEffect } from "react";
import {
  SearchIcon,
  ShoppingCartIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import fetchCart from "../../redux/actions/fetchCart";
const Header = () => {
  const dispatch = useDispatch();
  const tok = useSelector((state) => state.login.token);
  const [username, setUserName] = useState(null);
  let baskets = useSelector((state) => state.basket.baskets);
  useEffect(() => {
    if (tok != null) {
      dispatch(fetchCart(tok.token));
      setUserName(tok.firstname);
    }
  }, [tok, dispatch]);
  const cart = baskets.reduce((cart, item) => cart + item.quantity, 0);

  const history = useHistory();
  const requestHandler = (e) => {
    if (username == null) {
      history.push("/login");
    } else {
      history.push("/profile");
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="flex bg-pharmeasy_green items-center p-1 flex-grow py-4  ">
        <div
          onClick={() => history.push("/")}
          className="header__logoContainer flex items-center flex-grow sm:flex-grow-0"
        >
          <img
            className="header__logo cursor-pointer object-contain mr-6 ml-2 "
            width={150}
            src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png"
            alt="pharmeasy_logo"
          />
        </div>

        <div className="  hidden sm:flex items-center h-10  flex-grow cursor-pointer ">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-10 p-3 object-contain bg-gray-100  hover:bg-gray-300 rounded-r-md" />
        </div>
        <div className="header__nav flex text-white items-center text-xs space-x-4 ml-4 mr-2 whitespace-nowrap">
          <div onClick={requestHandler} className="header__option cursor link">
            <p className="header__optionLine1">
              Hello {username != null ? username : "Guest"}
            </p>
            <p className="header__optionLine2 font-extrabold md:text-sm">
              {username == null ? "Sign In" : "Profile"}
            </p>
          </div>
          <div className="header__option cursor link">
            <p className="header__optionLine1">Returns</p>
            <p className="header__optionLine2 font-extrabold md:text-sm">
              &amp; Orders
            </p>
          </div>
          <div
            onClick={() => history.push("/checkout")}
            className="relative link flex items-center"
          >
            <ShoppingCartIcon className="h-8" />
            <span className="absolute top-0 -right-1 md:right-10 text-center w-5 -mt-1  h-4 bg-red-600 rounded-full text-white font-bold">
              {cart}
            </span>
            <p className="hidden md:inline-flex font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex sm:hidden bg-pharmeasy_green -mt-1 p-2 pl-4 ">
        <div className="flex items-center mr-3">
          <MenuIcon className="h-6 text-white" />
        </div>
        <div className="flex items-center h-10  flex-grow cursor-pointer ">
          <input
            className="p-1 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none"
            type="text"
          />
          <SearchIcon className="h-10 p-3 object-contain bg-gray-100  hover:bg-gray-300 rounded-r-md" />
        </div>
      </div>
    </header>
  );
};

export default Header;
