import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from '../Header';
import Nav from '../Nav';
import AllUsers from '../../pages/AllUsers';
import Administrators from '../../pages/Administrators';
import Archived from '../../pages/Archived';
import Favorites from '../../pages/Favorites';
import NonAdmins from '../../pages/NonAdmins';
import { getUsers } from '../../apis/users';
class App extends React.Component {
  state = {};

  routes = [
    { path: '/administrators', component: Administrators },
    { path: '/archived', component: Archived },
    { path: '/favorites', component: Favorites },
    { path: '/non-admins', component: NonAdmins },
    { path: '/', component: AllUsers }
  ].map(route => (
    <Route
      key={route.path}
      path={route.path}
      render={() => <route.component users={this.state.users} />}
    />
  ));

  componentDidMount() {
    getUsers().then(users => {
      this.setState({
        users
      });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app-root">
          <Header />
          <div className="main">
            <div className="nav-column">
              <Nav />
            </div>
            <div className="content-column">
              <Switch>{this.routes}</Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
