import styled from "styled-components";

export const NavConteiner = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  position: sticky;
  background:blue;
  top: 0;
  .navbar {
    background-color: transparent;
  }

  .navbar.colorChange {
    background-color: #ff0000;
  }
`;

export const Nav = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const NavElement = styled.div`
  a {
    margin: 0 20px;
  }
`;
