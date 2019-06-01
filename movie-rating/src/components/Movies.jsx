import React, { Component } from 'react';

import Movie from './Movie';

class Movies extends Component {
    render() {
        if (this.props.Movies.length === 0) {
            if (document.getElementById('title') === null) {
                return (
                    <h3>Search for a movie above...</h3>
                );
            }
            else 
            {
                return (
                    <h3>Error, movie not found!</h3>
                );   
            }
        }
        else {
            return (
                <div id="MoviesContainer">
                    {this.props.Movies.map(item => 
                        <Movie key={item.imdbID} Movie={item} />
                    )}
                </div>
            );
        }
    }
}

export default Movies;