import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/functions';


const Nav = () => {
  const navigate = useNavigate()

  const logout = () => {
    navigate("/login")
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary border">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>

            {
              "" ? (<li className="nav-item">
              <span onClick={logout}>
                Logout
              </span>
            </li>) : (<><li className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
            </>)
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav