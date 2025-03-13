import React from "react";
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


const RedBox = ({pageNumber}) => {
  return (
    <div style={{ backgroundColor: 'red', width: '10%', top: '20%', left: '10%', padding: '10%', color: 'white', textAlign: 'center', position: 'absolute'}}>
      <p>TEST to see if you can place contents on top of flipBookPage</p>
      <p>page: {pageNumber}</p>
    </div>
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
};

const ArticlePage = ({ pageNumber }) => {
  const flipBookPage = pageMap[pageNumber] || null;
  return (
    <div style={{ position: 'relative', width: '1184px', height: '842px' }}>
      {flipBookPage ? (
        <>
        <img src={flipBookPage} alt={`Page ${pageNumber}`} 
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
        <RedBox pageNumber={pageNumber}/> 
        </>
      ) : (
        <p>No page associated with the current ${pageNumber}</p>
      )}
    </div>
  );
};

export default ArticlePage;