import React, { useState, Component } from "react";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

import Link from "next/link";
import { SidebarData } from "./SidebarData";

export function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <NavbarItems>
        <NavbarLogo>
          <h2>SantiLRZ</h2>
        </NavbarLogo>
        <MenuIcon>
          <FaBars onClick={showSidebar}></FaBars>
        </MenuIcon>

        <ul className={sidebar ? "nav-menu active" : "nav-menu"}>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                     <a>{item.title}</a>
              </li>
            );
          })}
        </ul>
      </NavbarItems>
    </>
  );
}

export default Navbar;
const NavbarItems = styled.nav`
  background: black;
  color:#fff;
  height: 75px;
  display: flex;
 
  justify-content: center;
  align-items: center;
  ul{
    padding:0;
  }
  
  @media (max-width: 960px) {
    position: relative;
  }
`;
const NavbarLogo = styled.div`
  color: white;
  
  justify-self: start;
  margin-left: 20px;
  @media(max-width:960px){
    position:absolute;
    top:0;
    left:0;

  }
`;
const MenuIcon = styled.div`
display:none;
@media(max-width:960px){
  display:block;
  position:absolute;
  top:0;
  right:0;
  font-size:1.8rem;
  transform:translate(-100%, 60%);
}
`;
