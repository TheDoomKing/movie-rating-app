import React, { Component } from 'react';
import axios from 'axios';
import { localhost } from '../Globals';

class Rate extends Component {
    state = {
        imdbID: this.props.id,
        rating: ''
    }

    onChange = (e) => {
        let inputRating = e.target.value;
        if (this.state.rating === '' || this.state.rating === undefined) // No rating 
        {
            // Add - POST
            var headers = {
                'Content-Type': 'application/json'
            };

            const rating = {
                imdbID: this.props.id,
                rating: inputRating
            };
            
            axios.post(`${localhost}/ratings`, rating, {headers: headers})
                .then(res => res.data)
                .catch(err => console.log(err));
        }
        else // There is a rating already
        {
            // Update - PUT
            const obj = {
                imdbID: this.props.id,
                rating: inputRating,
                dateAdded: new Date()
            };

            axios.put(`${localhost}/ratings/${this.props.id}`, obj, {headers})
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    }

    ifChecked = (inputID) => {
        return this.state.rating == inputID;
    }

    createRatings = () => {
        let ratings = [];

        for (let i = 10; i > 0; i--) {
        // for (let i = 1; i <= 10; i++) {
            ratings.push(
                <React.Fragment key={i}>
                    <input type="radio" id={"star" + i} name="rate" value={i} onChange={this.onChange}   />
                    {/* <label htmlFor={"star" + i}>{i} star</label> */}
                </React.Fragment>
            );
        }

        return ratings;
    }

    componentDidMount() {
        axios.get(`${localhost}/ratings/${this.props.id}`)
            .then(res => res.data)
            .then(data => {
                this.setState({
                    rating: data.rating
                });
            })
            .catch(err => console.log(err));

        }
        
    componentDidUpdate() {
        let obj = document.getElementById(`star${this.state.rating}`);
        if (obj !== null) {
            obj.checked = true;
        }
    }

    render() {
        return (
            <div id="Rating" className="rate">
                {this.createRatings()}
            </div>
        );
    }
}

export default Rate;