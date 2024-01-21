import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


export default function Navbar() {
  let location = useLocation();

  // useEffect(() => {
  //   console.log(location);
  // }, [location]);

  return (
    <nav className="navbar navbar-expand-lg bg-body-dark bg-dark ">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          Cloud Book
        </Link>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-4">
          <li className="nav-item">
            <Link className='text-light' aria-current="page" to="/about" >
              About
            </Link>
          </li>
        </ul>
        <form class="d-flex">
          <Link className='btn btn-light mx-1' to='/login'  role="button">Logic</Link>
          <Link className='btn btn-light mx-1' to='/signup'  role="button">Sign-up</Link>
        </form>
      </div>
    </nav>
  );
}
