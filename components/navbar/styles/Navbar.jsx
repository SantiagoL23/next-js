import React, { useState } from "react";
import styled from "styled-components";
import { Nav, NavLink, NavLogo, NavMenu} from "./styles/index";
import Link from "next/link";

  return (
    <>
      <Nav>
        <NavLogo href="/">
          <h1>LRZ</h1>
        </NavLogo>
        <NavMenu>
            <Link href="/about"><a>About</a></Link>
            <Link href="/"><a>Contact</a></Link>
        </NavMenu>
      </Nav>
    </>
  );