import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
function NavbarItem({ title, link, action }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const redirectHandler = () => {
    if (link !== null) {
      history.push(link);
    }
    if (action !== null) {
      let call = async () => dispatch(action());

      call().then((res) => {
        window.location.reload();
      });
    }
  };
  return (
    <div
      onClick={redirectHandler}
      className="cursor-pointer  rounded-md  w-auto p-4 mx-1 text-lg  hover:bg-gray-100"
    >
      {title}
    </div>
  );
}

export default NavbarItem;
