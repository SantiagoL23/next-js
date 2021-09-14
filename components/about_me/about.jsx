import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About sobre la empresa" />
      </Head>
      <Content>
        <Sub>
          <Img>
            <Image
            src="/logo_1024.png"
              width={700}
              height={700}
              alt="Logo"
            ></Image>
          </Img>
          <div>
            <h3>ssuaidjas</h3>
            <p>lorem ejfbhjgghgghj</p>
          </div>
        </Sub>
      </Content>
    </>
  );
};

export default About;

const Content = styled.div``;
const Sub = styled.div`
  width: 50%;
`;
const Img = styled.div``;
