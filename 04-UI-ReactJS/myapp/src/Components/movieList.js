import React, { Component } from 'react';
import Movie from './movie';

class MovieList extends Component {
    constructor(props){
        super();
        this.renderDynamic = this.renderDynamic.bind(this);
    }

    renderDynamic(movies){
        return movies.map(movie => (
            <tr Movie key = {movie.title} title = {movie.title} year = {movie.year} duration = {movie.duration}>
                <th scope="row"></th>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.duration}</td>
            </tr>
        ));
    }

    render() {
    return (
        <div className="content">
                <table className="table">
                    <caption>Movies</caption>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Tittle</th>
                            <th>Year</th>
                            <th>Duration</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderDynamic(this.props.movies)}
                    </tbody>
                </table>
            </div>
    );
    }
}

export default MovieList;
