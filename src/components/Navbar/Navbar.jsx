import React, { useState, useEffect, useContext } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/Usercontext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const {userLogin , setUserLogin} = useContext(UserContext)
  let navigate =useNavigate();
  
 function Logout() {
  localStorage.removeItem("userToken");
  setUserLogin(null)
  navigate("/login")
 }
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top transition-all ${scrolled ? 'nav-active' : 'nav-top'}`}>
      <div className="container custom-nav-container">
        {/* Brand with Modern Typography */}
        <Link className="navbar-brand fw-bolder" to="/home">
          <span style={{ color: '#9B917D', fontSize: '1.8rem', letterSpacing: '2px' }}>M</span>
          <span className="text-dark d-none d-sm-inline" style={{ fontSize: '1.4rem', letterSpacing: '1px' }}>ASKANY</span>
        </Link>

        {/* Floating Menu for Mobile */}
        <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#navContent">
          <i className="bi bi-grid-fill text-maskany fs-2"></i>
        </button>

        <div className="collapse navbar-collapse" id="navContent">
          {localStorage.getItem('userToken') !== null? <>
            <ul className="navbar-nav  mx-auto nav-pills-container">
              <li className="nav-item">
                <NavLink className="nav-link px-3" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3" to="/AgentDashboard">Dashboard</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3" to="/packages">Packages</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3" to="/help">Help Center</NavLink>
              </li>
               <li  className="nav-item ">
                <span onClick={Logout} className="nav-link px-3 cursor-pointer " >Logout </span>
              </li>
            </ul>
          </> :

            <ul className="navbar-nav mx-auto nav-pills-container">
              <li className="nav-item">
                <NavLink className="nav-link px-3" to="/register">Register</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link px-3" to="/login">Login</NavLink>
              </li>
            </ul>
          }
          {/* Centralized Links with Pill Shape Background */}


          {/* Right Side Tools */}
          {

           localStorage.getItem('userToken') !== null? <>
              <div className="d-flex align-items-center gap-2">
                <Link to="/search" className="btn btn-icon d-none d-md-flex">
                  <i className="bi bi-search"></i>
                </Link>

                <div className="v-separator d-none d-md-block"></div>

                <Link to="/profile" className="profile-trigger">
                  <span className="d-none d-lg-inline me-2 fw-medium small">Account</span>
                  <div className="avatar-wrapper">
                    <img src="https://ui-avatars.com/api/?name=User&background=9B917D&color=fff" alt="Profile" />
                  </div>
                </Link>
              </div>
            </> : ''
          }

        </div>
      </div>
    </nav>
  );
};

export default Navbar;