import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

// config
import endpoints from './config/endpoints';

// components
import Navbar from './modules/Navigation/Navbar';
import Header from './modules/Header/Header';
import Footer from './modules/Footer/Footer';

function App() {
  const [content, setContent] = useState('');

  useEffect(() => {
    const getData = async (endpoint: string) => {
      const response: Response = await fetch(endpoint);
      const data = await response.json();
      return data;
    };

    getData(`${endpoints.server}/content`)
      .then((res) => {
        setContent(res);
      })
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Header />
        <h1>CookBook</h1>
        {content.length > 0 ? content : 'There is no content yet...'}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
