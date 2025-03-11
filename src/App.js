import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import Article1 from './components/Article1';

// Hardcoded sample articles for testing
const sampleData = [
  {
    article_title: "The McDonald Effect",
    article_byline: "Aaron Doyle",
    article_text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Pellentesque vehicula, odio ut egestas suscipit, lectus felis dictum elit, 
    sed pharetra ligula odio eget velit.\n\n
    Nulla facilisi. Cras non lacus id purus feugiat aliquet ut id libero.
    Morbi feugiat libero sit amet mi facilisis scelerisque.`,
    article_image: "https://via.placeholder.com/300"
  },
  {
    article_title: "On a Whim to Westwood",
    article_byline: "Samantha Garcia",
    article_text: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.\n\n
    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti.`,
    article_image: "https://via.placeholder.com/300"
  },
  {
    article_title: "The Dark Witch of Westwood",
    article_byline: "Isabelle Friedman",
    article_text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n\n
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    article_image: "https://via.placeholder.com/300"
  }
];

function App() {
  const [data, setData] = useState(sampleData); // Use sample data instead of fetching

  return (
    <div className="App">
      <Header />
      <h1>Hello Daily Bruin!</h1>
      <HomePage articles={data} />
      <Article1 />
      <Footer />
    </div>
  );
}

export default App;


/*
function App() {
  const [ data, setData ] = useState(null);

  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/march-madness-2025")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])
  
  return data && (
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
*/