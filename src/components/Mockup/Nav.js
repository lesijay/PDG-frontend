import React from "react";
// import { NavLink } from "react-router-dom";
import Styled from "styled-components";
import Sizing from "./Sizing";

const Nav = ({ navItems }) => {
  return (
    <Sizing height= "10vh" backgroundColor="#291f20" >
      <NavBar>
        {navItems.map((items, i) => (
          <li key={i}>
            <a to={items.path}>{items.name}</a>
          </li>
        ))}
      </NavBar>
    </Sizing>
  );
};

const NavBar = Styled.ul`
        margin: 0px auto;
        padding:20px;
        max-width: 660px;
        display:flex;
        justify-content:space-between;
        align-items: center;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: 0.35px;
        text-align: center;
        color: #fff;
        list-style-type: none;
        
    `;

Nav.defaultProps = {
  navItems: [
    {
      name: "PDG Test",
      path: "/"
    },
    {
      name: "Resources",
      path: "/Resources"
    },
    {
      name: "Articles",
      path: "/articles"
    },
    {
      name: "Not a member yet? Sign Up",
      path: "/Sign up"
    }
  ]
};

export default Nav;
