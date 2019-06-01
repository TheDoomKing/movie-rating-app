import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/layout/Header';
import About from './components/pages/About';
import Movies from './components/Movies';
import Search from './components/Search';
import Ratings from './components/Ratings';
import MovieDetails from './components/MovieDetails';

class App extends Component {
  state = {
    movies: []
  }

  InitializeMovies = (data) => {
    this.setState({
      movies: []
    });

    this.setState({
      movies: data
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <Search InitializeMovies={this.InitializeMovies} />
              <Movies Movies={this.state.movies} />
            </React.Fragment>
          )}/>
          <Route exact path="/moviedetails/:id" render={props => (
            <MovieDetails {...props} />
          )} />
          <Route exact path="/ratings" render={props => (
            <Ratings />
          )}/>
          <Route exact path="/about" render={props => (
            <About />
          )}/>
        </div>
      </Router>
    );
  }
}

export default App;
