import React from 'react';

import './App.css';

import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import Landing from './Landing'
import Dashboard from './Dashboard'
import Header from './Header'
import Patient from './Patient'


const AuthContext = React.createContext()

function App() {
  return (
    <div>
    <Router>
     
        {/* <Header /> */}
        <Switch>
          {/* <ProtectedRoute path="/dashboard" component={Dashboard} /> */}
          <AuthProvider>
          <Route path="/" component={Landing} />
          <Route path="/patient" component={Patient} />
          </AuthProvider>
        </Switch>
   
    </Router>
  </div>
  );
}

export default App;
