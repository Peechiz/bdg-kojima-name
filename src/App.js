import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Start from './pages/start'
import Worksheet from './pages/worksheet'
import { StoreProvider } from './state/store'

const App = () => {
  return (
    <StoreProvider>
      <Router>
        <Route exact path="/" component={ Start }/>
        <Route path="/worksheet/:step" component={ Worksheet} />
      </Router>
    </StoreProvider>
  );
  
}

export default App;
