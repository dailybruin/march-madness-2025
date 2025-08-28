import React from "react";
import styled from "styled-components";
import BookSVG from "../images/HomeBookBg.svg"; 

// Full-page scrollable background
const Background = styled.div`
  width: 100vw;
  min-height: 240vh; 
  background: #9bbdf4;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  overflow-x: hidden;
  padding-top: 5vh;
`;

// Book container spans full viewport width and ensures scrolling
const BookContainer = styled.div`
  width: 100vw;
  height: auto;
  background: url(${BookSVG}) no-repeat center top;
  background-size: contain; 
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  min-height: 240vh; 
`;

// Content inside the book
const BookContent = styled.div`
  width: 65%; 
  max-width: 1100px; 
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20vh 5vw; 
`;

// Articles Layout (Two Columns, inside the book pages)
const ArticlesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 3vw; 
  width: 100%; 
  max-width: 1000px; 
`;

const ArticleItem = styled.div`
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-weight: bold;
  font-family: "Baskervville", serif;
  color: #222;
  line-height: 1.6;
  text-align: left;
  word-wrap: break-word;
  cursor: pointer;

  &:hover {
    text-decoration: underline; 
  }
`;

const Byline = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 1.2rem); 
  font-weight: normal;
  color: #666;
  margin-top: 0.5rem;
`;

// Responsive Design (For mobile adjustments)
const MobileStyles = styled.div`
  @media screen and (max-width: 900px) {
    ${BookContent} {
      width: 80%; 
    }
    ${ArticlesContainer} {
      grid-template-columns: 1fr; 
      gap: 2rem;
    }
  }
`;

const HomePage = ({ articles }) => {
  return (
    <>
      <MobileStyles />
      <Background>
        <BookContainer>
          <BookContent>
            {/* Two-column article layout */}
            <ArticlesContainer>
              {Array.isArray(articles) && articles.length > 0 ? (
                articles.map((article, index) => (
                  <ArticleItem key={index}>
                    {article.article_title}
                    <Byline>by {article.article_byline}</Byline>
                  </ArticleItem>
                ))
              ) : (
                <p>Loading articles...</p> // Prevents crash when no articles are available
              )}
            </ArticlesContainer>
          </BookContent>
        </BookContainer>
      </Background>
    </>
  );
};

export default HomePage;