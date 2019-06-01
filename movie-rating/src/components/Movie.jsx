import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Default from '../Default.png';

class Movie extends Component {
    componentDidMount() {
        
    }

    Poster = () => {
        return this.props.Movie.Poster === 'N/A' ? Default : this.props.Movie.Poster;
    }

    render() {
        const object = this.props.Movie;

        return (
            <div className="Movie">
                <div className="MainMovie">
                    <img className="Poster" src={this.Poster()} alt="Poster" />
                    <h4 className="Title">{object.Title}</h4>
                    <Link className="Button Details" to={'/moviedetails/' + object.imdbID}>Details</Link>
                    <a className="Button IMDb" target="_blank" href={`https://www.imdb.com/title/${object.imdbID}`} title="Open on IMDb" rel="noopener noreferrer">IMDb</a>
                </div>
            </div>
        );
    }
}

export default Movie;