import React, { Component } from 'react';
import axios from 'axios';

import { localhost, API } from '../Globals';

class Ratings extends Component {
    state = {
        items: [],
        movies: []
    }

    Remove = (id) => {
        this.setState({
            items: this.state.items.filter(item => {
                return (item.imdbID !== id);
            }),
            movies: this.state.movies.filter(item => {
                return (item.imdbID !== id);
            })
        });

        axios.delete(`${localhost}/ratings/${id}`);
    }

    getStyle = () => {
        return {
            alignSelf: 'center'
        }
    }

    SetMovies = () => {
        const items = this.state.items;
        items.map(item => {
            axios.get(`${API.Url}?apikey=${API.Key}&i=${item.imdbID}`)
                .then(res => res.data)
                .then(data => {
                    this.setState({
                        movies: [...this.state.movies, data]
                    });
                })
                .catch(err => console.log(err));
        });
    }
    
    componentWillMount() {
        axios.get(`${localhost}/ratings`)
            .then(res => res.data)
            .then(data => {
                this.setState({
                    items: this.state.items.concat(data)
                }, () => {this.SetMovies()});
            })
            .catch(err => console.log(err));
    }
    
    render() {
        return (
            <div id="MoviesContainer">
                {this.state.movies.map(item => (
                    <div key={item.imdbID} className="Movie">
                        <div className="Remove"><button onClick={this.Remove.bind(this, item.imdbID)}>✖</button></div>
                        <div className="MainMovie">
                            <img className="Poster" src={item.Poster} alt={item.Title} />
                            <h4 className="Title">{item.Title}</h4>
                            <a className="Button Details" href={`/moviedetails/${item.imdbID}`}>Details</a>
                            <h1 style={this.getStyle()}>{this.state.items.find(i => i.imdbID === item.imdbID).rating}/10</h1>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Ratings;