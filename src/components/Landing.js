import React from "react";
import styled from "styled-components";
import Vid from "../images/March.mp4";

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: contain;
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
  background: black;
`;

const Credits = styled.div`
position: absolute;
bottom: 0px; 
width: 150%;
color: white;
padding: 1em;
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 28.91px;
z-index: 1; 
left: 0;
`;

const Landing = ({ credits }) => {
  return (
    <Container>
      <Video autoPlay loop muted playsInline>
        <source src={Vid} type="video/mp4" />
      </Video>
      <Credits>Photos by Brandon Morquecho, Photo editor. Animation by Jeremy Chen, Photo editor.</Credits>
    </Container>
  );
};

export default Landing;