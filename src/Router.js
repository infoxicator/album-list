import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AlbumList from './components/AlbumList';
import NavBar from './components/NavBar';

class RouterComponent extends Component {
  render() {
    return (
      <Router ref={router => (this.router = router)}>
        <div>
          <NavBar />
          <section className="section">
            <div className="container">
              <Switch>
                <Route exact path="/" component={AlbumList} />
              </Switch>
            </div>
          </section>
        </div>
      </Router>
    );
  }
}

export default RouterComponent;
