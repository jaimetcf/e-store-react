import React                                                from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import faker            from 'faker';

import TopNav           from './components/ui/TopNav';
import { AppContext }   from './AppContext';
import { useAuth }      from './components/user/Auth';
import User             from './components/user/User';
import Home             from './components/screens/Home';
import Product          from './components/product/Product'
import './App.css';


const App = (props) => {

  // ------------------------------ STATE ---------------------------------
  const { userId, userName, token, login, logout } = useAuth();

  // ---------------------------- RENDERING -------------------------------
  var routes;
  
  if (token) {
    routes = (
      <Switch>
        <Route path='/home'          component={Home} />
        <Route path='/product/:id'   component={Product} />
        <Route path='/logout' />
        <Redirect to='/home' />
      </Switch>
    );
  } 
  else {
    routes = (
      <Switch>
        <Route path='/home'          component={Home} />
        <Route path='/product/:id'   component={Product} />
        <Route path='/user'          component={User}   />
        <Redirect to="/home" />
      </Switch>
    );
  }
  
  return (
    <AppContext.Provider value={{
      // Backend domain is set by an environment variable
      appName: "eStore",
      appLogoUrl: "favicon.ico",
      backendDomain: process.env.REACT_APP_BACKEND_DOMAIN, 
      userId: userId,
      userName: userName,
      userAvatar: faker.image.avatar(),
      token: token,
      loginFun: login,
      logoutFun: logout
      }}>
      <Router>
        <div>
          <TopNav 
            logoUrl="favicon.ico" 
            appName="e-Store" 
            background="rgb(240,240,240)"
          />
          <main>{routes}</main>
        </div>
      </Router>
    </AppContext.Provider>
  );
    
};


export default App;
