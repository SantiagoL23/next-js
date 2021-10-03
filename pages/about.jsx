import styled from "styled-components";

import Navbar from "../components/navbar/navbar";


const about = () => {
  return ( 
   
        <>
        <Navbar/>
        <breaking/>
        <Contenedor>
    <h1>xdDdD</h1>
        </Contenedor>
       
        </>
  
    
   );
}
 
export default about;
   
const Contenedor = styled.div`
  background:${({theme}) =>theme.body};
height:100vh;
color:${({theme}) =>theme.fontColor}
`