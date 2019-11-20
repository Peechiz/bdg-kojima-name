import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Start from './pages/start'
import Worksheet from './pages/worksheet'

const App = (props) => {
  return (
    <>
      <Router>
        <Route exact path="/" component={ Start }/>
        <Route path="/worksheet/:step" component={ Worksheet} />
      </Router>
    </>
  );
  
}

export default App;
