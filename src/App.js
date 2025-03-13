/*import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FlipBook from "./components/FlipBook";

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

  return data && (
    <div className="App">
      <Header/>
      <FlipBook />
      <Footer/>
    </div>
  );
}

export default App;*/
import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import FlipBook from "./components/FlipBook";
import HomePage from "./components/HomePage";
import Article1 from "./components/Article1";

function App() {
  const [articles, setArticles] = useState([]); // ✅ Ensure articles is always an array
  const [loading, setLoading] = useState(true); // ✅ Track loading state
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallerScreen, setIsSmallerScreen] = useState(false);

  useEffect(() => {
    fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/march-madness-2025")
      .then(res => res.json())
      .then(res => {
        const fetchedArticles = res.data?.['article.aml']; // ✅ Ensure data exists
        if (Array.isArray(fetchedArticles)) {
          setArticles(fetchedArticles);
        } else {
          console.error("Error: Fetched data is not an array", fetchedArticles);
          setArticles([]);
        }
        setLoading(false); // ✅ Stop loading once data is fetched
      })
      .catch(error => {
        console.error("Error fetching articles:", error);
        setArticles([]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 700);
    setIsSmallerScreen(window.innerWidth <= 1000);
  }, []);

  return (
    <div className="App">
      <Header />
      
      {/* ✅ Display all components for testing */}
      <FlipBook />
      <HomePage articles={articles} />
      <Article1 article={articles[0] || {}} loading={loading} />

      <Footer />
    </div>
  );
}

export default App;
