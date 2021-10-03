import Head from 'next/head'
import Image from 'next/image'
import { Breaking } from '../components/breaking/breaking';


import Navbar from '../components/navbar/navbar';
import ThemeSwitch from '../components/navbar/themeSwitch';
import styled from 'styled-components';
import styles from '../styles/Home.module.css'


export default function index() {
  
  return (
   <>
   
   <Navbar/>
   <Container>
      <main>
        <h1>Hecho con NextJS</h1>
      
        <ThemeSwitch/>
      </main>
    </Container>


   
    
 




   </>

  )

}
const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 35vh;
  height:90vh;
  h1{
    color: var( --color-text-primary);
  }
`;