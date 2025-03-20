import React from "react";
import styled from "styled-components";
import Vid from "../images/March.mp4";

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


const Container = styled.div`
  width: 100%;
  height: 100em;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d5e7f2;
`;

const Credits = styled.div`
position: absolute;
bottom: 0px; 
width: 150%;
color: black;
padding: 1em;
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 28.91px;
z-index: 1; 
`;

const Landing = ({ credits }) => {
  return (
    <Container>
      <Video autoPlay loop muted playsInline>
        <source src={Vid} type="video/mp4" />
      </Video>
      <Credits>ILLO CREDIT WILL GO HEREEEEEEEEEEE</Credits>
    </Container>
  );
};

export default Landing;