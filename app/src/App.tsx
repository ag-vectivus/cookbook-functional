import React, { useState, useEffect } from 'react';
import endpoints from './config/endpoints';

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
      <h1>CookBook</h1>
      {content.length > 0 ? content : 'There is no content yet...'}
    </div>
  );
}

export default App;
