import React, { useState, useEffect, useRef } from "react";
import HTMLFlipBook from 'react-pageflip';
import TitlePage from "./TitlePage.js";
import ArticlePage from "./ArticlePage.js";
import styled from "styled-components";

const TitleContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 92.375rem;
  height: 121.5625rem;
  overflow: hidden;
`;

const FlipBookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const StyledFlipBook = styled(HTMLFlipBook)`
  width: 1184px;
  height: 842px;
`;

const FlipBook = () => {
    const [showFlipBook, setShowFlipBook] = useState(false); // Control visibility of FlipBook
    const flipBookRef = useRef(null);
  
    const handleTabClick = () => {
      setShowFlipBook(true); // Show the FlipBook when tab is clicked
    };
  
    return (
      <>
        {!showFlipBook ? (
          // Render TitlePage First
          <TitleContainer>
            <TitlePage onTabClick={handleTabClick} />
          </TitleContainer>
        ) : (
          // Render FlipBook Only for ArticlePage
          <FlipBookContainer>
            <StyledFlipBook ref={flipBookRef} width={1184} height={842} showCover={true}>
              <div><ArticlePage pageNumber={1} content="Article Introduction" /></div>
              <div><ArticlePage pageNumber={2} content="Main Content - Page 1" /></div>
              <div><ArticlePage pageNumber={3} content="Main Content - Page 2" /></div>
              <div><ArticlePage pageNumber={4} content="Conclusion" /></div>
            </StyledFlipBook>
          </FlipBookContainer>
        )}
      </>
    );
  };
  
  export default FlipBook;