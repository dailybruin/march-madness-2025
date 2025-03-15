import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Page1 from "../images/page1.png";
import Page2 from "../images/page2.png";
import Page3 from "../images/page3.png";
import Page4 from "../images/page4.png";
import Page5 from "../images/page5.png";
import Page6 from "../images/page6.png";
import Page7 from "../images/page7.png";
import Page8 from "../images/page8.png";
import Page9 from "../images/page9.png";
import Page10 from "../images/page10.png";
import Page11 from "../images/page10.png";
import MobilePage1 from "../images/mobilePage1.png";
import MobilePage2 from "../images/mobilePage2.png";
import MobilePage3 from "../images/mobilePage3.png";
import MobilePage4 from "../images/mobilePage4.png";
import MobilePage5 from "../images/mobilePage5.png";
import MobilePage6 from "../images/mobilePage6.png";
import MobilePage7 from "../images/mobilePage7.png";
import MobilePage8 from "../images/mobilePage8.png";
import MobilePage9 from "../images/mobilePage9.png";
import MobilePage10 from "../images/mobilePage10.png";
import MobilePage11 from "../images/mobilePage11.png";
import Article from "../components/Article.js";
import MobileArticle from "../components/MobileArticle.js";

const Interactive = styled.div`
  width: 60em;
  height: 40em;
  margin-top: 5em;
  background-color: #D9D9D9;
  color: black;
`

const MobileRedBox = ({ pageNumber, color, articles }) => {
  return (
    <div style={{ backgroundColor: color, width: '80%', height: '30em', top: '-9em', right: '-25em', color: 'white', textAlign: 'center', position: 'absolute' }}>
      <MobileArticle article={articles[pageNumber]}/>
    </div>
  );
};

const Desktop = ({ pageNumber, color, articles }) => {
  return (
    <>
    <div style={{ width: '10%', top: '-15%', left: '0%', padding: '10%', color: 'white', textAlign: 'center', position: 'absolute' }}>
    {pageNumber === 10 ? <Interactive>Interactive goes here</Interactive>: <Article article={articles[pageNumber]} />}
    </div>
    </>
  );
};

const pageMap = {
  1: Page1,
  2: Page2,
  3: Page3,
  4: Page4,
  5: Page5,
  6: Page6,
  7: Page7,
  8: Page8,
  9: Page9,
  10: Page10,
  11: Page11,
};

const mobilePageMap = {
  1: MobilePage1,
  2: MobilePage2,
  3: MobilePage3,
  4: MobilePage4,
  5: MobilePage5,
  6: MobilePage6,
  7: MobilePage7,
  8: MobilePage8,
  9: MobilePage9,
  10: MobilePage10,
  11: MobilePage11
};

const ArticlePage = ({ pageNumber, articles }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 900); // Update breakpoint
    };
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const flipBookPage = isMobile ? mobilePageMap[pageNumber] : pageMap[pageNumber];

  return (
    <div style={{ position: 'relative', width: '1184px', height: '842px', overflow: 'hidden' }}>
      {flipBookPage ? (
        <>
          <img
            src={flipBookPage}
            alt={`Page ${pageNumber}`}
            style={{
              width: isMobile ? '100em' : '100%',
              height: isMobile ? '90%' : '100%',
              objectFit: 'contain',
              margin: '0 5%',
              display: 'block',
            }}
          />
          {isMobile ? (
            <>
            <MobileRedBox pageNumber={pageNumber} articles={articles}/>
            </>
          ) : (
            <>
            <Desktop pageNumber={pageNumber} articles={articles}/>
            </>
          )}
        </>
      ) : (
        <p>No page associated with the current {pageNumber}</p>
      )}
    </div>
  );
};

export default ArticlePage;
