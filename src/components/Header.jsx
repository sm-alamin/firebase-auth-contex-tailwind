import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-primary text-primary-content">
        <a className="btn btn-ghost normal-case text-xl">Fire Master</a>
        <Link className="btn btn-ghost normal-case text-xl" to="/">Home</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>
        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Header;
