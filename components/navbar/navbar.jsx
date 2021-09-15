import React, { useState } from "react";
import styled from "styled-components";
import { Nav, NavLogo, NavMenu, NavButton } from "./styles/index";
import Link from "next/link";

export function Navbar() {
  return (
    <>
      <Nav>
        <NavLogo>
          <h1>LRZ</h1>
        </NavLogo>
        <NavMenu>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </NavMenu>
        <NavButton>
         <Link href="/signin">
         <button>LOG IN</button>
         </Link>
        </NavButton>
      </Nav>
    </>
  );
}

export default Navbar;
