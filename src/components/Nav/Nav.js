import React from 'react';
import { NavLink, Link } from "react-router-dom";
// import logo from "../../assets/logo.png"
import { FaFacebookSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";


const Nav = () => {

    const active =
    "text-white mx-1 font-medium border-b-2 border-white-900 pb-1 md:text-white-900 ";
  const normal =
    "  mx-1 text-white-600 font-medium font-bold focus:text-white p-0 lg:text-white   ";
    const navItem = (
        <>
          <li className="nav-item p-2 	">
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="dropdown dropdown-hover hover:border-none      ">
            <div className=" ">
              <li tabIndex={0} className="nav-item p-2   text-white ">
                <NavLink className="mx-1 text-white-600 font-medium font-bold focus:text-white   lg:text-white ">
                  Services
                </NavLink>
              </li>
            </div>
    
            <ul
              tabIndex={0}
              className="w-24 dropdown-content menu p-2 shadow  rounded-box lg:w-52"
              style={{ backgroundColor: "#3E84DC" }}
            >
              <li className="dropdown dropdown-hover hover:border-none ">
              <div>
                <li className="nav-item p-2   ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/blog"
                >
                  Physiotherapy
                </NavLink>
              </li>
              
              </div>
              <ul
              tabIndex={0}
              className="w-24 dropdown-content menu p-2 shadow  rounded-box lg:w-52"
              style={{ backgroundColor: "#3E84DC" }}
            >
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/back-pain"
                >
                  Back Pain
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/neck-pain"
                >
                  Neck Pain
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/shoulder-pain"
                >
                  Shoulder Pain
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/elbow-pain"
                >
                  Elbow Pain
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/knee-pain"
                >
                  Knee Pain
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/sports-injury"
                >
                  Sports Injury
                </NavLink>
              </li>
            </ul>
    
              </li>
               
            </ul>
          </li>
          <li className="dropdown dropdown-hover hover:border-none      ">
            <div className=" ">
              <li tabIndex={0} className="nav-item p-2   text-white ">
                <NavLink className="mx-1 text-white-600 font-medium font-bold focus:text-white   lg:text-white ">
                  Conditions
                </NavLink>
              </li>
            </div>
    
            <ul
              tabIndex={0}
              className="w-24 dropdown-content menu p-2 shadow  rounded-box lg:w-52"
              style={{ backgroundColor: "#3E84DC" }}
            >
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/back-pain"
                >
                  Back Pain
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/neck-pain"
                >
                  Neck Pain
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/shoulder-pain"
                >
                  Shoulder Pain
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/elbow-pain"
                >
                  Elbow Pain
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/knee-pain"
                >
                  Knee Pain
                </NavLink>
              </li>
              <li className="nav-item p-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? `${active}` : `${normal}`
                  }
                  to="/sports-injury"
                >
                  Sports Injury
                </NavLink>
              </li>
            </ul>
          </li>
          <li className="nav-item p-2 	">
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
              to="/team"
            >
              Meet The Team
            </NavLink>
          </li>
          <li className="nav-item p-2 	">
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
              to="/testimonials"
            >
              Testimonials
            </NavLink>
          </li>
          <li className=" nav-item  p-2   	">
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
          <li className="nav-item p-2 	">
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
              to="/about"
            >
              About
            </NavLink>
          </li>
    
          <li className="nav-item p-2 	">
            <NavLink
              className={({ isActive }) => (isActive ? `${active}` : `${normal}`)}
              to="/contact"
            >
              Contacts
            </NavLink>
          </li>
        </>
      );
    return (
        <div>
           <div className="navbar  " style={{ backgroundColor: "#3E84DC" }}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow   w-52"
            >
              {navItem}
            </ul>
          </div>
          <div className="flex justify-items-center items-center gap-2 ">
            <p style={{color:"#707070"}}>Follow Us</p>
          <a href='' ><FaFacebookSquare className="text-lg ml-2 text-white" /></a>
          <a href='' >  <BsLinkedin className="text-lg ml-2 text-white" /></a>
          <a href=''><TiSocialTwitter className="text-lg ml-2 text-white" /></a>
          <a href=""><TiSocialInstagram className="text-lg ml-2 text-white" /></a>
        
          
          
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="  menu-horizontal p-0">{navItem}</ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Get started</a>
        </div> */}
      </div> 
        </div>
    );
};

export default Nav;