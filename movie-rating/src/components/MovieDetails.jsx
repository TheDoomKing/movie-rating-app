import React, { Component } from 'react';
import axios from 'axios';
import { API } from '../Globals';
import Rate from './Rate';
import Default from '../Default.png';

class MovieDetails extends Component {
    state = {
        movie: {}
    }

    componentWillMount() {
        let id = this.props.match.params.id;
        let req = `${API.Url}?apikey=${API.Key}&i=${id}`;
        axios.get(req)
            .then(response => {
                let movie = response.data;
                this.setState({
                    movie
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    componentDidUpdate() {
        if (this.state.movie.Poster === 'N/A') 
        {
            document.getElementById('Poster').src = Default;
        }
        else 
        {
            document.getElementById('Poster').src = this.state.movie.Poster;
        }
    }

    render() {
        return (
            <div id="MovieContainer">
                <div id="CoverContainer">
                    <img src={this.state.movie.Poster} id="Poster" alt="Poster"/>
                    <div>MPAA Rating: {this.state.movie.Rated}</div>
                    <div>
                        Average Rating: {this.state.movie.imdbRating}/10
                    </div>
                </div>
                <div id="DetailsContainer">
                    <h2><a href={`https://imdb.com/title/${this.state.movie.imdbID}`}>{this.state.movie.Title}</a></h2>
                    <table>
                        <tbody>
                            <tr>
                                <td>Duration: </td>
                                <td>{this.state.movie.Runtime}</td>
                            </tr>
                            <tr>
                                <td>Genre: </td>
                                <td>{this.state.movie.Genre}</td>
                            </tr>
                            <tr>
                                <td>Director: </td>
                                <td>{this.state.movie.Director}</td>
                            </tr>
                            <tr>
                                <td>Release date: </td>
                                <td>{this.state.movie.Released}</td>
                            </tr>
                            <tr>
                                <td>Origin country: </td>
                                <td>{this.state.movie.Country}</td>
                            </tr>
                            <tr>
                                <td>Box Office: </td>
                                <td>{this.state.movie.BoxOffice}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>Your rating: <Rate id={this.props.match.params.id}/></div>
                    <div className="Synopsis">
                        Synopsis
                        <p>{this.state.movie.Plot}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieDetails;