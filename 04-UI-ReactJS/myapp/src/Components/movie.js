import React, { Component } from 'react';


class Movie extends Component {
    constructor(props){
        super(props);
        this.removeMovie = this.removeMovie.bind(this);
    }

    removeMovie(){
        this.props.removeMovie(this.props);
    }

    render() {
    return (
        <tr>
            <td>{this.props.title}</td>
            <td>{this.props.year}</td>
            <td>{this.props.duration} min</td>
            <button className="btn delete" onClick = {this.removeMovie}><i className="material-icons">delete</i></button>
        </tr>
    );
    }
}

export default Movie;
