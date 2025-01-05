import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("logout success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const links = (
    <>
      <ul className="flex">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Our Menu</NavLink>
        </li>
        <li>
          <NavLink to="/order/salads">Order Food</NavLink>
        </li>
        <li>
          <Link to="/dashboard/cart">
            <button className="btn">
              <FaShoppingCart></FaShoppingCart>
              <div className="badge badge-secondary">+{cart.length}</div>
            </button>
          </Link>
        </li>
        {user ? (
          <>
            <button onClick={handleLogOut} className="btn btn-sm btn-ghost">
              log out
            </button>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </>
  );
  return (
    <div className="w-11/12 mx-auto navbar fixed z-50 bg-opacity-30 bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn ">Get Started</a>
      </div>
    </div>
  );
};

export default Navbar;
