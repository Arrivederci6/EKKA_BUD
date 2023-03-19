import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="header_section">
      <div className="header_background"></div>
      <div className="header_background-eclipse"></div>
      <nav>
        <div class="navbar_logo"></div>
        <div class="navbar_links">
          <a href="#">Головна</a>
          <a href="#">Наші послуги</a>
          <a href="#">Прайс-листи</a>
          <a href="#">Про нас</a>
          <a href="#">Контакти</a>
        </div>
        <div class="navbar_phone">
          <div className="navbar_phone-image"></div>
          <a href="tel:+380 (99) 999 99 99">+380 (99) 999 99 99</a>
        </div>
        <div class="dropdown-menu">
          <a class="selected" href="#">UA &nbsp;<i class="fa fa-caret-down white" aria-hidden="true"></i></a>
          <a class="hidden" href="#">ENG</a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
