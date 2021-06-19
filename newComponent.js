import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const App = () => {
  let title = '<h1>Hello World</h1>';
  return <div>{ReactHtmlParser(title)}</div>;
};

export default App;


import React from 'react';


const App = () => {
  let title = '<h1>Hello World</h1>';
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: title,
      }}
    ></div>
  );
};

export default App;