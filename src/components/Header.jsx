// Import * from React Module
import * as React from "react";
import "../assets/css/Header.css";
import brandLogo from "../assets/img/brand-logo.png";

const Header = () => {
  return (
    <>
      {/* JSX vs. HTML => className & class */}
      <header className="header">
        <img className="header__brandLogo" src={brandLogo} alt="brand-logo" />
        <h1>Contact Manager App</h1>
      </header>
    </>
  );
};

export default Header;
