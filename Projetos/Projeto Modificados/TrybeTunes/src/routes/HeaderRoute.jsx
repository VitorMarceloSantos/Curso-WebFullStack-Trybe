import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchBar from '../pages/SearchBar';
// import Search from '../pages/Search';

class HeaderRoute extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/search" component={ SearchBar } />
      </Switch>
    );
  }
}

export default HeaderRoute;