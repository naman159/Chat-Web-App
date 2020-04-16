import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';


function App() {
  return (
    <Router>
      <Route exact path = '/' component={Login} />
      <Route exact path = '/chat' component={Chat} />
    </Router>
  );
}

export default App;
