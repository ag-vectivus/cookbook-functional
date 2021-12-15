import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

// config
import endpoints from './config/endpoints';

// components
import Navbar from './modules/Navigation/Navbar';

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
        <h1>CookBook</h1>
        {content.length > 0 ? content : 'There is no content yet...'}
      </BrowserRouter>
    </div>
  );
}

export default App;
