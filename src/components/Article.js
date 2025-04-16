import React from "react";
import styled from "styled-components";


// Book Container (Now just a cream container instead of book background)
const BookContainer = styled.div`
  width: 85vw;
  height: 40em;
  max-width: 950px;
  //background: red; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Light shadow for depth */
  padding: 5vh 3vw;
  border-radius: 8px; /* Slight rounding to match book style */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

// Content inside the book
const BookContent = styled.div`
  width: 100%;
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
  padding: 2vh 0vw;
  margin-left: -2em;
  margin-top:-2em;
`;

// Title (Responsive size)
const Title = styled.h1`
  font-size: clamp(1.6rem, 4vw, 2.5rem); /* ✅ Shrinks for mobile */
  font-family: "Baskervville", serif;
  font-weight: bold;
  color: #5a3e2b;
  margin-bottom: 2rem;
  line-height: 1.2;
  word-wrap: break-word;
`;

// Byline (Scales properly)
const Byline = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.2rem); /* ✅ Prevents overflow */
  color: #5a3e2b;
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

// Image Placeholder (Scales dynamically)
const ArticleImage = styled.div`
  width: 100%;
  height: 100%;
  background: #d8d8d8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  color: #444;
  margin-bottom: 0.6rem;
`;

// Caption (Resizes dynamically)
const Caption = styled.p`
  font-size: clamp(0.7rem, 1.2vw, 1rem);
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
  margin-right:-2em;
  margin-top: -2em;
`;

// Responsive Design for Mobile
const MobileStyles = styled.div`
  @media screen and (max-width: 900px) {
    ${BookContent} {
      flex-direction: column;
      align-items: center;
      padding: 4vh 5vw;
    }
    ${LeftPage}, ${RightPage} {
      width: 100%;
      text-align: center;
    }
  }
`;

const Article = ({ article }) => {
  return (
    <>
      <MobileStyles />
        <BookContainer>
          <BookContent>
            {/* Left Page: Title, Byline, Image */}
            <LeftPage>
              <ArticleImage>
                {article?.article_image ? (
                  <img src={article.article_image} alt="Article" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  "(A LOVELY PIC GOES HERE)"
                )}
              </ArticleImage>
              {/*<Caption>Space for caption here</Caption>*/}
            </LeftPage>

            {/* Right Page: Article Text */}
            <RightPage>
            <a  href={article.article_url}  target="_blank"  rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <Title>{article?.article_title || "Loading Title..."}</Title>
              </a>
              <Byline>{article?.article_byline || "Loading Byline..."}</Byline>
              {article?.article_text || "Loading article text..."}
            </RightPage>
          </BookContent>
        </BookContainer>
    </>
  );
};

export default Article;