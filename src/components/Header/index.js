import React from "react";
import { StyledHeader } from "./Header.styled";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </StyledHeader>
  );
};

export default Header;
