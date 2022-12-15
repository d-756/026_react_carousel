import React from "react";
import {Nav, NavItem} from "reactstrap";
import PropTypes from "prop-types";

import navigation from "../../_nav";
import {AppNavbarBrand, AppSidebarToggler} from "@coreui/react";

import logo from "../../assets/img/brand/logo.png";
import logo_dark from "../../assets/img/brand/logo-dark.png";

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

function DefaultHeader() {
  function changeTheme() {
    document.querySelector("body").classList.toggle("white-theme");
    // $("body").toggleClass("white-theme");
    document
      .querySelectorAll(".app-header")
      .forEach(el => el.classList.toggle("white-theme"));
    document
      .querySelectorAll(".app-footer")
      .forEach(el => el.classList.toggle("white-theme"));
    document
      .querySelectorAll(".nav-link")
      .forEach(el => el.classList.toggle("white-theme"));
    document
      .querySelectorAll(".form-control")
      .forEach(el => el.classList.toggle("white-theme"));
    document.querySelectorAll(".nav").forEach(el => el.classList.toggle("white-theme"));
    document.querySelectorAll(".btn").forEach(el => el.classList.toggle("white-theme"));
    document
      .querySelectorAll(".carousel-control-prev-icon")
      .forEach(el => el.classList.toggle("carousel-white-theme"));
    document
      .querySelectorAll(".carousel-control-next-icon")
      .forEach(el => el.classList.toggle("carousel-white-theme"));

    document
      .querySelector(".navbar-brand.dark-theme")
      .classList.toggle("dark-theme-logo");
    document
      .querySelector(".navbar-brand.white-theme")
      .classList.toggle("white-theme-logo");
  }

  function toggleMenu(id) {
    document.querySelector("body").classList.toggle("sidebar-show");
    document.querySelectorAll("li.nav-item").forEach(el => el.classList.remove("active"));
    document.querySelector('.nav-item[data-id="' + id + '"]').classList.add("active");
    id = id.replace("#", "");
    window.scrollTo({
      top: document.getElementById(id).offsetTop,
      left: 0,
      behavior: "smooth",
    });
  }

  return (
    <React.Fragment>
      <AppNavbarBrand
        full={{src: logo, width: 124, height: 58, alt: "BISHOPS Logo"}}
        minimized={{src: logo, width: 81, height: 38, alt: "BISHOPS Logo"}}
        className="dark-theme"
      />
      <AppNavbarBrand
        full={{src: logo_dark, width: 124, height: 58, alt: "BISHOPS Logo"}}
        minimized={{src: logo_dark, width: 81, height: 38, alt: "BISHOPS Logo"}}
        className="white-theme dark-theme-logo"
      />
      <Nav className="ml-auto header-nav" navbar>
        {navigation.items.map((item, index) => {
          return (
            <NavItem
              data-id={item.url}
              key={index}
              className={index === 0 ? "active" : ""}
              onClick={() => toggleMenu(item.url)}
            >
              <span className="nav-link">{item.name}</span>
            </NavItem>
          );
        })}
        <NavItem onClick={changeTheme}>
          <i className="fa fa-exchange nav-link"></i>
        </NavItem>
      </Nav>
      <AppSidebarToggler className="ml-auto menu-toggler" mobile />
    </React.Fragment>
  );
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
