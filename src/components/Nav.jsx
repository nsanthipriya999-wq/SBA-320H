import { Link } from "react-router";
//import { useContext } from "react";
//import { ThemeContext } from "../context.js";
//import "../App.css";

//--------------Navigation Component--------------------
export default function Nav() {

  return (
    <nav className="navbar">
      <div className="navbar-container">
          <div className="brand">
             <h1 className="logo">
                🦋Wander USA
              </h1>
              <p className="subtitle">
                Explore and Wander
               </p>
            </div>
        {/* //-------------------Home ----------------------------- */}

        <div className="nav-links">
          <Link
            to="/"
            className="nav-link"
          >
           🏠 Home
          </Link>
          {/* //-------------------Explore--------------------------- */}

          <Link
            to="/explore"
            className="nav-link"
            
          >
            🌏Explore
          </Link>

          {/* //-------------------Favorites---------------------------- */}
          <Link
            to="/favorites"
            className="nav-link"
            
          >
            ❤️Favorites
          </Link>

          {/* //-------------------About--------------------------- */}
          <Link
            to="/about"
            className="nav-link"
          >
            🌲About
          </Link>

          {/* //-------------------Contact Us---------------------------- */}
          <Link
            to="/contactus"
            className="nav-link"
          >
            📞ContactUs
          </Link>

        </div>
         
      </div>
    </nav>
  );
}
