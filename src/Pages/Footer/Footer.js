import React from "react";
import { NavLink } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (
    <div className="my-footer">
      <div className="container pt-5">
        <div className="row text-start">
          <div className="col-lg-4 col-md-6 col-sm-6 col-6 footer-element mb-3">
            <img src="https://i.ibb.co/Wf2XsBt/logo.png"  width="60"
                height="60" alt="" />
            <p>
              khajedeowan 2nd-lan<br />
              lalbugh, Dhaka <br />
              +880 1766913719 <br />
              triplanners07@gmail.com
            </p>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-6 footer-element">
            <h5>Company</h5>
            <span className="d-block">
              <NavLink className="text-decoration-none" to="/">
                HOME
              </NavLink>{" "}
            </span>
            <span className="d-block">
              <NavLink className="text-decoration-none" to="/about">
                ABOUT
              </NavLink>{" "}
            </span>
            <span className="d-block">
              <NavLink className="text-decoration-none" to="/blog">
                BLOG
              </NavLink>{" "}
            </span>
            <span className="d-block">
              <NavLink className="text-decoration-none" to="/contact">
                CONTACT
              </NavLink>{" "}
            </span>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 footer-element">
            <h5>Popular Destination</h5>
            <div className="d-flex">
              <div>
                <span className="d-block">
                  <NavLink className="text-decoration-none" to="">
                    BANDARBAN
                  </NavLink>{" "}
                </span>
                <span className="d-block">
                  <NavLink className="text-decoration-none" to="  ">
                    SHYLHET
                  </NavLink>{" "}
                </span>
                <span className="d-block">
                  <NavLink className="text-decoration-none" to="">
                    RANGAMATI
                  </NavLink>{" "}
                </span>
              </div>
              <div className="ms-5">
                <span className="d-block">
                  <NavLink className="text-decoration-none" to="">
                    CHITTAGONG
                  </NavLink>{" "}
                </span>
                <span className="d-block">
                  <NavLink className="text-decoration-none" to="">
                    DHAKA
                  </NavLink>{" "}
                </span>
                <span className="d-block">
                  <NavLink className="text-decoration-none" to="">
                    PANCAGARAH
                  </NavLink>{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="container" />
      <div className="pb-3">
        <p className="footer-bottom">
          Copyright ©2021 All rights reserved | Designed and Developed by
          <span className="text-danger"> <a rel="noopener noreferrer" href="https://www.facebook.com/joyantajoy07/" target="_blank">
            Joyanta Paul Joy</a></span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
