import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from 'react-pageflip';
import TitlePage from "./TitlePage.js";
import ArticlePage from "./ArticlePage.js";
import styled from "styled-components";
import Background from "../images/background.png";
import Landing from "../components/Landing.js";

const TitleContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  height: 121.5625rem;
  overflow: hidden;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1000;
  @media (max-width: 1000px) {
    width: 48rem; // Set width to a percentage of the viewport for mobile
    height: 70rem; // Adjust height for mobile devices
  }
`;

const FlipBookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1000;
  @media (max-width: 1000px) {
    justify-content: right;
    // width: 48rem; // Set width to a percentage of the viewport for mobile
    // height: 55rem; // Adjust height for mobile devices
    width: 100%;
    height: auto;
  }
`;

const StyledFlipBook = styled(HTMLFlipBook)`
  width: 72.43994rem;
  height: 51.48738rem;
  object-fit: contain;
  @media (max-width: 1000px) {
    // width: 48rem; // Set width to a percentage of the viewport for mobile
    // height: 70rem; // Adjust height for mobile devices
    width: 100%;
    height: auto;
  }
`;

const FlipBook = ({ articles }) => {
    const [showFlipBook, setShowFlipBook] = useState(false); 
    const flipBookRef = useRef(null);
  
    const handleTabClick = () => {
      setShowFlipBook(true);
    };
  
    return (
      <>
        {!showFlipBook ? (
          <TitleContainer style={{ display: 'flex', flexDirection: 'column' }}>
            <Landing/>
            <br/>
            <br/>
            <TitlePage onTabClick={handleTabClick} articles={articles}/>
          </TitleContainer>
        ) : (
          <FlipBookContainer>
            <StyledFlipBook ref={flipBookRef} width={1184} height={842} showCover={true}>
                {Array.from({ length: 10 }, (_, index) => (
                <div key={index}>
                    <ArticlePage pageNumber={index + 1} content={`Content for Page ${index + 1}`} articles={articles}/>
                </div>
                ))}
            </StyledFlipBook>
          </FlipBookContainer>
        )}
      </>
    );
  };
  
  export default FlipBook;