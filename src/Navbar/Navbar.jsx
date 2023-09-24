import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-2xl">Phone Shop</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 flex gap-6">
            <NavLink to="/"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-blue-400" : ""
  }>Home</NavLink>
            <NavLink to="/favorites"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-blue-400" : ""
  }>Favorites</NavLink>
            <NavLink to="/logIn"  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline text-blue-400" : ""
  }>Log In</NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
