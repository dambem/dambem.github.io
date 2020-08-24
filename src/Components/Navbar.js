import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <nav className="nav nav-masthead justify-content-center float-md-right" id="navbar">
                <div className="nav-content">
                        <a href="#" className="nav-item nav-link">
                            <Link
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About
                          </Link>
                    </a>
                    <a href="#" className="nav-item nav-link" >
                            <Link
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Portfolio
                 
                           </Link>
                        </a>
                    <a href="#" className="nav-item nav-link">
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
              </Link>
                        </a>

                </div>
            </nav>
        );
    }
}