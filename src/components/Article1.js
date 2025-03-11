import React from "react";
import styled from "styled-components";
import BackgroundImg from "../images/Background.svg"; // Outer blue background
import OpenBookBg from "../images/OpenBookBg.svg"; // Book background

// Full-page Background
const PageBackground = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: url(${BackgroundImg}) no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vh 0;
  box-sizing: border-box;
  position: relative;
`;

// Book Container (Smaller, Centered)
const BookContainer = styled.div`
  width: 80vw;
  max-width: 1000px;
  height: auto;
  background: url(${OpenBookBg}) no-repeat center/contain;
  background-size: contain;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  aspect-ratio: 16 / 10;
`;

// Content inside the book
const BookContent = styled.div`
  width: 85%;
  height: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 6vh 5vw; 
  position: relative;
`;

// Left Page (Title, Byline, Image)
const LeftPage = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

// Title (Clamps size to prevent overflow)
const Title = styled.h1`
  font-size: clamp(1.8rem, 3vw, 2.8rem); 
  font-family: "Baskervville", serif;
  font-weight: bold;
  color: #5a3e2b;
  margin-bottom: 0.8rem;
  line-height: 1.2;
`;

// Byline (Smaller text that scales)
const Byline = styled.p`
  font-size: clamp(1rem, 1.8vw, 1.4rem); 
  color: #5a3e2b;
  font-weight: bold;
  margin-bottom: 1rem;
`;

// Image Placeholder
const ArticleImage = styled.div`
  width: 75%;
  max-width: 250px; 
  height: clamp(120px, 15vw, 200px); 
  background: #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  font-weight: bold;
  color: #444;
  margin-bottom: 0.8rem;
`;

// Image Caption (Shrinks properly)
const Caption = styled.p`
  font-size: clamp(0.8rem, 1.5vw, 1rem); 
  color: #666;
  margin-top: 0.3rem;
`;

// Right Page (Article Text)
const RightPage = styled.div`
  width: 45%;
  font-size: clamp(1rem, 1.6vw, 1.2rem); 
  font-family: "Baskervville", serif;
  color: #222;
  line-height: 1.6;
  text-align: left;
  overflow-y: auto;
  max-height: 60vh;
  padding: 2vh;
`;

// Responsive Design
const MobileStyles = styled.div`
  @media screen and (max-width: 900px) {
    ${BookContainer} {
      width: 90vw;
      aspect-ratio: 4 / 3;
    }
    ${BookContent} {
      flex-direction: column;
      align-items: center;
      padding: 5vh 5vw;
    }
    ${LeftPage}, ${RightPage} {
      width: 100%;
      text-align: center;
    }
  }
`;

const Article1 = () => {
  return (
    <>
      <MobileStyles />
      <PageBackground>
        <BookContainer>
          <BookContent>
            {/* Left Page: Title, Byline, Image */}
            <LeftPage>
              <Title>A HEADLINE WILL GO HERE YES A HEADLINE</Title>
              <Byline>BYLINE BYLINE BYLINE</Byline>
              <ArticleImage>(A LOVELY PIC GOES HERE)</ArticleImage>
              <Caption>Space for caption here</Caption>
            </LeftPage>

            {/* Right Page: Article Text */}
            <RightPage>
              Lots of text blah blah blah blah blah blah blah blah. Lots of text blah blah blah blah blah blah blah blah.
              Lots of text blah blah blah blah blah blah blah blah. Lots of text blah blah blah blah blah blah blah blah.
              Lots of text blah blah blah blah blah blah blah blah. Lots of text blah blah blah blah blah blah blah blah.
              Lots of text blah blah blah blah blah blah blah blah. Lots of text blah blah blah blah blah blah blah blah.
            </RightPage>
          </BookContent>
        </BookContainer>
      </PageBackground>
    </>
  );
};

export default Article1;


