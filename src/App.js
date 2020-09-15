import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Movies from './components/movies';
import Navbar from './components/navBar';
import { Redirect, Route, Switch } from 'react-router-dom';
import Cusotmers from './components/customers';
import Rentalas from './components/rentals';
import NotFound from './components/notFound';
import MovieForm from './components/movieForm';
import Login from './components/login';

class App extends Component {
  render() {
    const home = '/';
    return (
      <React.Fragment>

        <Navbar />
        <main className="container">
          <div className="d-flex justify-content-center">
            <div>
              <Switch>
                <Route path='/movies/:id' component={MovieForm} />
                <Route path={this.home || '/movies'} exact component={Movies} />
                <Route path="/customers" component={Cusotmers} />
                <Route path="/rentals" component={Rentalas} />
                <Route path="/login" component={Login} />
                <Route path="/notfound" component={NotFound} />
                <Redirect to='/notfouud' />

              </Switch>

            </div>
          </div>
        </main>
      </React.Fragment>

    );
  }
}

export default App;

