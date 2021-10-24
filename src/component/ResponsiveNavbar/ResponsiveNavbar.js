import React from "react";
import { useSelector } from "react-redux";
import NavbarItem from "./NavbarItem";
import logout from "../../redux/actions/logout";
import { useHistory } from "react-router";
function ResponsiveNavbar() {
  const token = useSelector((state) => state.login.token);
  const history = useHistory();
  const requestHandler = () => {
    history.push("/login");
  };
  const user =
    token === null
      ? { title: "Log In", link: "/login", action: null }
      : { title: `Hi, ${token.firstname}`, link: null, action: null };
  const logOut =
    token === null
      ? { title: "", link: null, action: null }
      : { title: "Log Out", link: "/", action: logout };
  const navbarlist = [
    { title: "My Orders", link: null, action: null },
    { title: "My Refills", link: null, action: null },
    { title: "Medical Records", link: null, action: null },
    { title: "Wallet", link: null, action: null },
    { title: "Notification", link: null, action: null },
    logOut,
  ];
  return (
    <div className="mt-4  overflow-y-auto h-screen shadow-sm z-40 text-gray-700 font-light font-sans fixed bg-gray-50 top-28 left-0 w-64 ">
      {token !== null ? (
        <div className="bg-pharmeasy_green text-gray-200 cursor-pointer    w-auto p-5 text-lg ">
          {user.title}
        </div>
      ) : (
        <div
          onClick={requestHandler}
          className="bg-pharmeasy_green text-gray-200 cursor-pointer   w-auto p-5 text-lg "
        >
          {user.title}
        </div>
      )}
      {navbarlist.map((item, id) => (
        <NavbarItem
          key={id}
          title={item.title}
          link={item.link}
          action={item.action}
        />
      ))}
    </div>
  );
}

export default ResponsiveNavbar;
