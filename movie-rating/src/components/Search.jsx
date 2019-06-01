import React, { Component } from 'react';
import axios from 'axios';
import { API } from '../Globals';

class Search extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();

        let title = this.state.title.trim().split(' ').join('+');
        let req = `${API.Url}?apikey=${API.Key}&s=${title}`;

        axios.get(req)
            .then(response => {
                if (response.data.Error) {
                    this.props.InitializeMovies([], true);
                }
                else
                {
                    let movies = response.data.Search;
                    this.props.InitializeMovies(movies);
                }
            })
            .catch(err => {
                console.log(err);
            });
    };

    onChange = () => {
        this.setState({
            title: document.getElementById('title').value
        });

        // if (this.state.title !== '') {
        //     document.getElementById('Submit').disabled = false;
        // }
        // else
        // {
        //     document.getElementById('Submit').disabled = true;
        // }
    };

    render() {
        return (
            <form id="Search" onSubmit={this.onSubmit}>
              <input type="text" name="title" id="title" placeholder="Movie title" onChange={this.onChange} />
              <input type="submit" id="Submit" className="Submit" value="Search" />
            </form>
        );
    }
}

export default Search;