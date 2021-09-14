import React, { useState } from "react";
import styled from "styled-components";
import { Nav, NavElement, NavConteiner } from "./styles/index";
export default function navbar()  {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  return (
    <>
      <NavConteiner className={colorChange ? "navbar colorChange" : "navbar"}>
        <Nav>
          <h2>Logo</h2>
          <NavElement>
            <nav>
              <a href="">Inicio</a>
              <a href="">Contacto</a>
            </nav>
          </NavElement>
        </Nav>
      </NavConteiner>
    </>
  );
};
export default Navbar;
