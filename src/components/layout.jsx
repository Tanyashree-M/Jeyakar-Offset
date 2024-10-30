import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Scroll from "./scroll";

export const Layout = () => {
  return (
    <div >
      <nav id="menu" className="navbar navbar-default navbar-fixed-top " >
        <div className="container">
          <div className="navbar-header" >
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <NavLink className="navbar-brand page-scroll" to="/" >
              <img src="./img/logo/jop.svg" style={{ "width": "100px", "height": "110px", "position": "absolute", "top": "0%", "left": "0%" }} />
            </NavLink>{" "}
          </div>


          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink to="about us" className="page-scroll">
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink to="services" className="page-scroll">
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink to="infra" className="page-scroll">
                  INFRASTRUCTURE
                </NavLink>
              </li>
              <li>
                <NavLink to="products" className="page-scroll">
                  PRODUCTS
                </NavLink>
              </li>

              <li>
                <NavLink to="contact" className="page-scroll">
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Scroll />
      <Outlet />
    </div>

  );
};
