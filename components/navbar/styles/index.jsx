import styled from "styled-components";

export const Nav = styled.nav`
background:#000;
height:80px;
display:flex;
align-items:center;
justify-content: space-between;
padding: 1.5rem calc((100vw - 1000px) / 2);
z-index:10;
`
export const NavLogo = styled.div`
color:white;
padding: 0 0.5rem
`
export const NavMenu = styled.div`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding: 0 1rem;
height:100%;
cursor:pointer;
display:flex;
align-items:center;

a{
 padding: 0 1rem;
}

@media (max-width: 768px){
  display:none;
}
`

export const NavButton = styled.div`
padding: 0 0.5rem;
button{
  background:white;
  color:#000;
  border:none;
  padding:0.5rem 1rem;
  border-radius:5px;
}
`

