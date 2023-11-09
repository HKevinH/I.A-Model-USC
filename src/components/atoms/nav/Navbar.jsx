import React from "react";
import "./navbar.css";

const Navbar = ({ activeRoute, onRouteChange, routes }) => {
  return (
    <nav className="navbar">
      <div className="navbar-title">ASA</div>
      <ul className="navbar-list">
        {routes.map((route) => (
          <li key={route.path}>
            <button
              className={`navbar-item ${
                activeRoute === route.path ? "active" : ""
              }`}
              onClick={() => onRouteChange(route.path)}
            >
              {route.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
