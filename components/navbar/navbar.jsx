import React, { useState, Component } from "react";
import styled from "styled-components";
import { VscMenu } from "react-icons/vsc";
import { BsLock } from "react-icons/bs";
import {FaWindowClose} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';

import Link from "next/link";
import { SidebarData } from "./SidebarData";
import Image from 'next/image';

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
          {sidebar ? (
            <AiOutlineClose onClick={showSidebar}></AiOutlineClose>
          ) : (
            <VscMenu onClick={showSidebar}></VscMenu>
          )}
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
  background: var( --color-bg-primary);
  color:white;
  color: var( --color-text-primary);
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    padding: 0;
  }
  @media (max-width: 960px) {
    position: relative;
  }
`;

const NavbarLogo = styled.div`
  color: var( --color-text-primary);
  justify-self: start;
  margin-left: 20px;
  @media (max-width: 960px) {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  @media (max-width: 960px) {
    display: block;
    position: absolute;
    color:var( --color-text-primary);
    top: 0;
    right: 0;
    font-size: 1.8rem;
    transform: translate(-70%, 60%);
    margin-right:0;
    
  }
`;
