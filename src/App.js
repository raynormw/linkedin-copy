import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Homepage from './Homepage';
import Profile from './Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
