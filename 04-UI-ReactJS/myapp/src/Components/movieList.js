import React, { Component } from 'react';
import Movie from './movie';

class MovieList extends Component {
    constructor(props){
        super();
        this.renderDynamic = this.renderDynamic.bind(this);
    }
    renderDynamic(movies){
        return movies.map(movie => (
            <Movie key = {movie.title} title = {movie.title} year = {movie.year} duration = {movie.duration} removeMovie = {this.props.removeMovie}/>
        ));
    }

    render() {
    return (
        <div className="content">
                <table className="table">
                    <caption>Movies</caption>
                    <thead>
                        <tr>
                            <th className="tr">Title</th>
                            <th className="tr">Year</th>
                            <th className="tr">Duration</th>
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
