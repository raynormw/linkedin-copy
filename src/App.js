import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from 'pages/Homepage';
import Profile from 'pages/Profile';
import NoMatch from 'pages/NoMatch';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/profile" component={Profile} />
        <Route component={NoMatch} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
