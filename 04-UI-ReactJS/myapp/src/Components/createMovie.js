import React, { Component } from 'react';

class CreateMovie extends Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            year: '',
            duration: '',
            message: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.addMovie = this.addMovie.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
            [name]: value
        });
    }

    addMovie(){
        if(this.state.title !== ''){
            if(this.state.year !== ''){
                if(this.state.duration !== ''){
                    this.props.addMovie(this.state);
                    this.setState({
                    title: '',
                    year: '',
                    duration: ''
                    });
                } else{
                    this.setState({
                        message: 'No added duration.'
                    })
                }
            } else{
                this.setState({
                    message: 'No added year.'
                })
            }
        } else{
            this.setState({
                message: 'No added title.'
            })
        } 
    }
    
    render() {
    return (
        <div className="movies">
            <header>
                <h1>My Movies</h1>
                    <div className="form-group">
                        <label>
                            Movie title: 
                            <input type="text" name="title" value={this.state.title} onChange={this.handleInputChange} />
                        </label>
                        <label>
                            Movie year: 
                            <input type="text" name="year" value={this.state.year} onChange={this.handleInputChange} />
                        </label>
                        <label>
                            Movie duration: 
                            <input type="text"name="duration" value={this.state.duration} onChange={this.handleInputChange} />
                        </label>
                    </div>
                    <button type="submit" className="btn-primary" onClick={this.addMovie}>Add</button>
            </header>
        </div>
    );
    }
}

export default CreateMovie;
