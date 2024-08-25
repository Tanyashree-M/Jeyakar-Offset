import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <header id="header">
            <div className="intro">
                <div className="overlay">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 intro-text">
                                <h1>
                                    Welcome TO JEYAKAR.
                                    <span></span>
                                </h1>
                                <p>High Quality printing and binding services</p>
                                <br></br>
                                <p>Jeyakar offset(p) ltd is one of the quality manufacturers of printing services in sivakasi.our team works with passionate hearts and tireless hands to serve our customers which include designing, printing, packing, binding and finishing. </p>
                                <NavLink
                                    to="services"
                                    className="btn btn-custom btn-lg page-scroll"
                                >
                                    Learn More
                                </NavLink>{" "}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
