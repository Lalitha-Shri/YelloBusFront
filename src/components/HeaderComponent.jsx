//Nav bar login logout register buttons are in header component and are rendered according to the roles from spring security
import React from "react";
import bus1 from "../images/bus1.png";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import AdminComponent from "./AdminComponent";
import { isAdminUser, isLoggedInUser } from "./services/AuthService";
import { logout } from "./services/AuthService";
import FancyText from "@carefully-coded/react-text-gradient";

const HeaderComponent = () => {
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "#8b0000",
  };
  const divStyle = {
    height: "80px",
  };
  const divstyle1 = {
    marginRight: "20px",
  };
  const handleLogOut = () => {
    logout();
    navigate("/");
  };
  const isAuth = isLoggedInUser(); //check whether the user is logged in 
  const isAdmin = isAdminUser();//check if its admin logged in
  return (
    <header>
      <nav
        className="navbar navbar-expand-md navbar-warning bg-warning bg-opacity-50"
        style={divStyle}
      >
        <div>
          <img
            src={bus1}
            width="60"
            height="auto"
            className="d-inline-block align-top"
            alt=""
          />
          <FancyText
            gradient={{ from: "#FFD700", to: "#8b0000", type: "linear" }}
            animate
            animateDuration={1000}
          >
            {" "}
            <a href="http://localhost:5173" className="navbar-brand fw-bold">
              WELCOME to Yello Bus!!!
            </a>
          </FancyText>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            {!isAuth && (
              <li className="nav-item">
                <Link to="/login" className="nav-link" style={linkStyle}>
                  Login
                </Link>
              </li>
            )}
            {!isAuth && (
              <li className="nav-item">
                <Link to="/register" className="nav-link" style={linkStyle}>
                  Register
                </Link>
              </li>
            )}
            {isAuth && !isAdmin && (
              <li className="nav-item">
                <Link
                  to="/logout"
                  className="nav-link"
                  onClick={handleLogOut}
                  style={linkStyle}
                >
                  Logout
                </Link>
              </li>
            )}
            {isAuth && isAdmin && (
              <li className="nav-item">
                <Link to="/admin" className="nav-link" style={linkStyle}>
                  Admin DashBoard
                </Link>
              </li>
            )}
            {isAuth && !isAdmin && (
              <li className="nav-item">
                <Link to="/user" className="nav-link" style={linkStyle}>
                  Find Buses
                </Link>
              </li>
            )}
            {isAuth && !isAdmin && (
              <li className="nav-item">
                <Link to="/eticket" className="nav-link" style={linkStyle}>
                  E-Ticket
                </Link>
              </li>
            )}
            {isAuth && !isAdmin && (
              <li className="nav-item">
                <Link
                  to="/changePassword"
                  className="nav-link"
                  style={linkStyle}
                >
                  Change Password
                </Link>
              </li>
            )}
            {isAuth && !isAdmin && (
              <li className="nav-item">
                <Link to="/myBooking" className="nav-link" style={linkStyle}>
                  My-Booking
                </Link>
              </li>
            )}
          </ul>
        </div>
        <FancyText
          gradient={{ from: "#FFD700", to: "	#8b0000" }}
          animate
          animateDuration={1000}
        >
          <div style={divstyle1} className="navbar-brand fw-bold">
            Lets explore INDIA!!
          </div>
        </FancyText>

        <img
          style={divstyle1}
          src={logo}
          width="60"
          height="auto"
          className="d-inline-block align-top"
          alt=""
        />
      </nav>
    </header>
  );
};

export default HeaderComponent;
