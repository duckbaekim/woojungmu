import React from 'react';
import Wheader from './component/Wheader.js';
import Search from './component/Search.js'
import Resultbox from './component/Resultbox.js'
import Addview from './component/Addview.js'

import './App.css';

function App() {
  return (

    <div className="App">
        <Wheader/>
        <Search/>
        <Resultbox/>
        <Addview/>
      Hello World! 
    </div>
  );
}

export default App;
