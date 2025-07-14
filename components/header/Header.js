import React, { useState, useEffect } from "react";
import Link from "next/link";
import logo from "/public/images/site_logo/Nexus Company Logo.png"
import MobileMenu from "../MobileMenu/MobileMenu";
import Image from "next/image";

const Header = (props) => {
  const [mobailActive, setMobailState] = useState(false);

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="site_header site_header_1" >
      {/* <div className="header_top text-center">
        <div className="container">
          <p className="m-0">
            Subscribe us and receive <b>20% bonus</b> discount on checkout.{" "}
            <Link onClick={ClickHandler} href="/">
              <u>Learn more</u> <i className="fa-solid fa-angle-right"></i>
            </Link>
          </p>
        </div>
      </div> */}
      <div style={{backgroundColor:"#043B64"}}
        className={`header_bottom stricky flex   ${
          isSticky ? "stricked-menu stricky-fixed" : ""
        }`}
      >
        <div
          className="container "
          
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div className="row align-items-center" style={{ display: 'flex', alignItems: 'center' }}>
              <div className="site_logo">
                <Link onClick={ClickHandler} className="site_link" href="/">
                  <Image
                    src={logo}
                    alt="Nexus Ventures"
                  />
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-5">
              <ul className="header_btns_group unordered_list justify-content-end">
                <li>
                  <button
                    className="mobile_menu_btn"
                    onClick={() => setMobailState(!mobailActive)}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#main_menu_dropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <i className="far fa-bars"></i>
                  </button>
                </li>
                <li>
                  <Link
                    onClick={ClickHandler}
                    className="btn btn-outline-light"
                    href="/"
                  >
                    <span className="btn_label" style={{color:'white'}} data-text="Get Started">
                      Get Started
                    </span>
                    <span className="btn_icon">
                      <i className="fa-solid fa-arrow-up-right text-white" ></i>
                    </span>
                  </Link>
                </li>
              </ul>
          </div>
        </div>
        <div className="mobail-wrap">
          <div className={`mobail-menu ${mobailActive ? "active" : ""}`}>
            <div className="xb-header-menu-scroll">
              <div
                className="xb-menu-close xb-hide-xl xb-close"
                onClick={() => setMobailState(!mobailActive)}
              ></div>
              <nav className="xb-header-nav">
                {/* <MobileMenu /> */}
              </nav>
            </div>
          </div>
          <div
            className="xb-header-menu-backdrop"
            onClick={() => setMobailState(false)}
          ></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
