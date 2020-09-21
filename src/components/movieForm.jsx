import { checkPropTypes } from 'prop-types';
import React from 'react';
import Joi from 'joi-browser';
import Form from './form';
import { getGenres } from '../services/fakeGenreService.js'
import { getMovie,saveMovie } from '../services/fakeMovieService.js'

class MovieForm extends Form {
    state = {
        data: { title: '', numberInStock: 0, dailyRentalRate: 0, genreId: '' },
        genres: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label("Genre"),
        numberInStock: Joi.number().integer().min(1).max(100).required(),
        dailyRentalRate: Joi.number().required().min(1),
        selectedGenre: Joi.string()
    }

    componentDidMount = () => {
        const genres = getGenres();
        this.setState({ genres });
        const movieId = this.props.match.params.id;
        if (movieId === 'new') return;
        const movie = getMovie(movieId);
        if (!movie) return this.props.history.replace('/notfound')
        this.setState({ data: this.mapToViewModel(movie) })
    }

    mapToViewModel = (movie) => {
        return {
            _id: movie._id,
            title: movie.title,
            genreId: movie.genre._id,
            numberInStock: movie.numberInStock,
            dailyRentalRate: movie.dailyRentalRate
        }
    }

    doSubmit = () => {
        console.log(this.state.data);
        saveMovie(this.state.data)
        this.props.history.push('/movies');
    }

    render() {
        return (
            <React.Fragment>

                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}

                    {this.renderSelect('genreId', 'Genre', this.state.genres)}
                    {this.renderInput('numberInStock', "Number In Stock", "number")}
                    {this.renderInput('dailyRentalRate', "Rate", "number")}
                    {this.renderButton("Save")}

                </form>
            </React.Fragment>
        );
    }
}


export default MovieForm;