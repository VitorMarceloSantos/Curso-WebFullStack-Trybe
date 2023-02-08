import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Index from './components/Index';
// import Album from './pages/Album';
// import Favorites from './pages/Favorites';
// import NotFound from './pages/NotFound';
// import Profile from './pages/Profile';
// import ProfileEdit from './pages/ProfileEdit';
// import Search from './pages/Search';
// import SearchBar from './pages/SearchBar';
// import Header from './components/Header';
// import SideBar from './components/SideBar';
// import FriendActivity from './components/FriendActivity';
// import Content from './components/Content';

class App extends React.Component {
  state = {
    buttonCheck: false,
  }

  changeButton = () => {
    this.setState({
      buttonCheck: true,
    });
  }

  render() {
    const { buttonCheck } = this.state;
    return (
      <div>
        {buttonCheck ? <Index /> : (
          <Login
            changeButton={ this.changeButton }
          />
        )}
      </div>
    // <Switch>
    //   <Route exact path="/" component={ Login } />
    //   <Route exact path="/index" component={ Index } />
    /* //   <Route exact path="/search" component={ SearchBar } />
      //   <Route exact path="/album/:id" component={ Album } />
      //   <Route exact path="/favorites" component={ Favorites } />
      //   <Route exact path="/profile" component={ Profile } />
      //   <Route exact path="/profile/edit" component={ ProfileEdit } />
      //   <Route exact component={ NotFound } /> */
    // </Switch>
    // </main>
    );
  }
}

export default App;
