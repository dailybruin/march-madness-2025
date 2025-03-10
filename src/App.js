import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HTMLFlipBook from 'react-pageflip';

function App() {
  const [ data, setData ] = useState(null);
  const [ isMobile, setIsMobile ] = useState(null);
  const [ isSmallerScreen, setIsSmallerScreen ] = useState(null); // less than 1000px, then don't fix the width of the page, but fix that you only get the right side of the page
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/march-madness-2025")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  useEffect(() => {
    setIsMobile(window.innerWidth <= 700);
    setIsSmallerScreen(window.innerWidth <= 1000);
  }, [])

  const mobileScreenD = "M0.8125 29.4574C35.4296 -29.2025 228.381 19.0244 253.36 21.3737C278.34 23.723 380.218 41.041 429.593 38.5779C496.074 35.2614 531.281 29.8721 531.281 29.8721V728.08C531.281 728.08 496.074 733.469 429.593 736.786C380.218 739.249 278.34 721.931 253.36 719.581C228.381 717.232 35.4296 669.005 0.8125 727.665V29.4574Z";
  const mobileScreenViewBox = "0 0 532 738";

  const Page = React.forwardRef((props, ref) => {
    return (
      <div className="demoPage" ref={ref} style={{ width: '100%', height: '100%' }}>
        <svg
          width="100%"
          height="100%"
          viewBox={isMobile ? mobileScreenViewBox : props.viewBox}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={isSmallerScreen ? mobileScreenD : props.d} fill={props.fill} stroke={props.stroke}/>
        </svg>
      </div>
    );
  });

  return data && (
    <div className="App">
      <Header/>
      <div className="flipbook-container">
      <HTMLFlipBook width={isMobile ? 300 : 533} height={739}>
      {/* <HTMLFlipBook width={isMobile ? "100%" : 533} height={isMobile ? 500 : 739} mobileScrollSupport={true} useTouch={true}> */}
          {/* <div className="demoPage">Page 1</div>
          <div className="demoPage">Page 2</div>
          <div className="demoPage">Page 3</div>
          <div className="demoPage">Page 4</div> */}
          <Page
            number={1}
            viewBox="0 0 533 739"
            d="M532.338 30.3475C497.673 -28.2984 304.453 19.917 279.439 22.2657C254.425 24.6145 152.404 41.9283 102.961 39.4658C36.388 36.1501 1.13184 30.7621 1.13184 30.7621V728.803C1.13184 728.803 36.3879 734.191 102.961 737.507C152.404 739.969 254.425 722.656 279.439 720.307C304.453 717.958 497.673 669.743 532.338 728.389V30.3475Z"
            fill="#F6EEE3"
            stroke="#F6EEE3"
          />
          <Page
            number={2}
            viewBox="0 0 532 738"
            d = "M0.8125 29.4574C35.4296 -29.2025 228.381 19.0244 253.36 21.3737C278.34 23.723 380.218 41.041 429.593 38.5779C496.074 35.2614 531.281 29.8721 531.281 29.8721V728.08C531.281 728.08 496.074 733.469 429.593 736.786C380.218 739.249 278.34 721.931 253.36 719.581C228.381 717.232 35.4296 669.005 0.8125 727.665V29.4574Z" 
            fill="blue" 
            stroke="#F6EEE3"
          />
          <Page
            number={3}
            viewBox="0 0 533 739"
            d="M532.338 30.3475C497.673 -28.2984 304.453 19.917 279.439 22.2657C254.425 24.6145 152.404 41.9283 102.961 39.4658C36.388 36.1501 1.13184 30.7621 1.13184 30.7621V728.803C1.13184 728.803 36.3879 734.191 102.961 737.507C152.404 739.969 254.425 722.656 279.439 720.307C304.453 717.958 497.673 669.743 532.338 728.389V30.3475Z"
            fill="purple"
            stroke="#F6EEE3"
          />
          <Page
            number={4}
            viewBox="0 0 532 738"
            d = "M0.8125 29.4574C35.4296 -29.2025 228.381 19.0244 253.36 21.3737C278.34 23.723 380.218 41.041 429.593 38.5779C496.074 35.2614 531.281 29.8721 531.281 29.8721V728.08C531.281 728.08 496.074 733.469 429.593 736.786C380.218 739.249 278.34 721.931 253.36 719.581C228.381 717.232 35.4296 669.005 0.8125 727.665V29.4574Z" 
            fill="yellow" 
            stroke="#F6EEE3"
          />
          <Page
            number={5}
            viewBox="0 0 533 739"
            d="M532.338 30.3475C497.673 -28.2984 304.453 19.917 279.439 22.2657C254.425 24.6145 152.404 41.9283 102.961 39.4658C36.388 36.1501 1.13184 30.7621 1.13184 30.7621V728.803C1.13184 728.803 36.3879 734.191 102.961 737.507C152.404 739.969 254.425 722.656 279.439 720.307C304.453 717.958 497.673 669.743 532.338 728.389V30.3475Z"
            fill="green"
            stroke="#F6EEE3"
          />
          <Page
            number={6}
            viewBox="0 0 532 738"
            d = "M0.8125 29.4574C35.4296 -29.2025 228.381 19.0244 253.36 21.3737C278.34 23.723 380.218 41.041 429.593 38.5779C496.074 35.2614 531.281 29.8721 531.281 29.8721V728.08C531.281 728.08 496.074 733.469 429.593 736.786C380.218 739.249 278.34 721.931 253.36 719.581C228.381 717.232 35.4296 669.005 0.8125 727.665V29.4574Z" 
            fill="#F6EEE3" 
            stroke="#F6EEE3"
          />
          <Page
            number={5}
            viewBox="0 0 533 739"
            d="M532.338 30.3475C497.673 -28.2984 304.453 19.917 279.439 22.2657C254.425 24.6145 152.404 41.9283 102.961 39.4658C36.388 36.1501 1.13184 30.7621 1.13184 30.7621V728.803C1.13184 728.803 36.3879 734.191 102.961 737.507C152.404 739.969 254.425 722.656 279.439 720.307C304.453 717.958 497.673 669.743 532.338 728.389V30.3475Z"
            fill="gray"
            stroke="#F6EEE3"
          />
          <Page
            number={6}
            viewBox="0 0 532 738"
            d = "M0.8125 29.4574C35.4296 -29.2025 228.381 19.0244 253.36 21.3737C278.34 23.723 380.218 41.041 429.593 38.5779C496.074 35.2614 531.281 29.8721 531.281 29.8721V728.08C531.281 728.08 496.074 733.469 429.593 736.786C380.218 739.249 278.34 721.931 253.36 719.581C228.381 717.232 35.4296 669.005 0.8125 727.665V29.4574Z" 
            fill="red" 
            stroke="#F6EEE3"
          />
          <Page
            number={7}
            viewBox="0 0 533 739"
            d="M532.338 30.3475C497.673 -28.2984 304.453 19.917 279.439 22.2657C254.425 24.6145 152.404 41.9283 102.961 39.4658C36.388 36.1501 1.13184 30.7621 1.13184 30.7621V728.803C1.13184 728.803 36.3879 734.191 102.961 737.507C152.404 739.969 254.425 722.656 279.439 720.307C304.453 717.958 497.673 669.743 532.338 728.389V30.3475Z"
            fill="yellow"
            stroke="#F6EEE3"
          />
          <Page
            number={8}
            viewBox="0 0 532 738"
            d = "M0.8125 29.4574C35.4296 -29.2025 228.381 19.0244 253.36 21.3737C278.34 23.723 380.218 41.041 429.593 38.5779C496.074 35.2614 531.281 29.8721 531.281 29.8721V728.08C531.281 728.08 496.074 733.469 429.593 736.786C380.218 739.249 278.34 721.931 253.36 719.581C228.381 717.232 35.4296 669.005 0.8125 727.665V29.4574Z" 
            fill="blue" 
            stroke="#F6EEE3"
          />
      </HTMLFlipBook>
      </div>
      <Footer/>
    </div>
  );
}

export default App;