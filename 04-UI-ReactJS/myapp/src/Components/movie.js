import React, { Component } from 'react';


class Movie extends Component {
    constructor(props){
        super(props);
    }

    render() {
    return (
        <tr>
            <td>{this.props.title}</td>
            <td>{this.props.year}</td>
            <td>{this.props.duration} mins</td>
            <td>
                <button className="btn" onClick = {this.removeMovie}><i className="material-icons">delete</i></button>
                <button className="btn" onClick = {this.editMovie}><i className="material-icons">create</i></button>
            </td>
        </tr>
    );
    }
}

export default Movie;
