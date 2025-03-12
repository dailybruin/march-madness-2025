import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FlipBook from "./components/FlipBook";

function App() {
  const [ data, setData ] = useState(null);
  // const [ isMobile, setIsMobile ] = useState(null);
  // const [ isSmallerScreen, setIsSmallerScreen ] = useState(null); // less than 1000px, then don't fix the width of the page, but fix that you only get the right side of the page
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/march-madness-2025")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  // useEffect(() => {
  //   setIsMobile(window.innerWidth <= 700);
  //   setIsSmallerScreen(window.innerWidth <= 1000);
  // }, [])

  return data && (
    <div className="App">
      <Header/>
      <FlipBook />
      <Footer/>
    </div>
  );
}

export default App;