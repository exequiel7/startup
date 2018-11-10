import React, { Component } from 'react';

class CreateMovie extends Component {
    constructor(props){
        super(props);
        this.state={
            title: '',
            year: '',
            duration: ''
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
                        alert("No added duration");
                }
            } else{
                alert("No added year");
            }
        } else{
            alert("No added title");
        } 
    }
    
    render() {
    return (
        <div className="CreateMovie">
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
                        <button type="submit" className="btn add" onClick={this.addMovie}>Add</button>
                    </div>
            </header>
        </div>
    );
    }
}

export default CreateMovie;
