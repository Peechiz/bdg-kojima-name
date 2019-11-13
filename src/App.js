import React from 'react';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link
} from "react-router-dom";
import Start from './pages/start'
import Worksheet from './pages/worksheet'

function App() {
  return (
    <Router>
      <Route exact path="/" component={ Start }/>
      <Route path="/worksheet/:step" component={ Worksheet} />
    </Router>
  );
}

export default App;
