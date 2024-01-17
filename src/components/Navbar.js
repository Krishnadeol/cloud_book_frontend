import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function Navbar() {
  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Cloud Book
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
          <li className="nav-item">
            <Link
              className={`nav-link ${location.pathname === "/about" ? 'active' : ''}`}
              aria-current="page"
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
