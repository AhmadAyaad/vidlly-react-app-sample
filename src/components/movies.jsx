import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';
import GenersList from './genersList';
import Pagination from './pagmiation';
import { getGenres } from '../services/fakeGenreService.js';
import MoviesTable from './moviesTable';
import _ from 'lodash';

class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedId: null,
        sortColumn: { path: 'title', order: 'asc' }
    }

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
    }


    handleDeleteMovie = (movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({ movies });
    })



    handleLove = (movie) => {
        let movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = { ...movie };
        console.log(movies[index].liked);
        movies[index].liked = !movies[index].liked;
        this.setState({ movies });
    }

    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    }

    handleClicked = (genre) => {
        //htnady render tany 
        this.setState({ selectedGenre: genre, currentPage: 1 });

        let movies = getMovies();
        this.setState({onItemSelected : genre._id});
        if (genre.name === "All Geners") {
            this.setState({ movies })
            return;
        }

        movies = movies.filter(m => m.genre.name === genre.name);
        this.setState({ movies });

    }


    handleSort = (sortColumn => {
        this.setState({ sortColumn });
    })

    render() {

        const { selectedGenre, sortColumn } = this.state;
        let { length: movieCount } = this.state.movies;
        if (movieCount === 0)
            return <h1>No movies in the database</h1>



        // const filteredMovies =selectedGenre? 
        //      this.state.movies.filter(m=>m.genre._id ===selectedGenre._id)
        //         :this.state.movies;
        // console.log(filteredMovies , "Filtered ");

        const sortedMovies = _.orderBy(this.state.movies, [sortColumn.path], [sortColumn.order]);

        const paginatedMovies =
            paginate(sortedMovies, this.state.pageSize, this.state.currentPage);


        const genres = [...this.state.genres];
        genres.unshift({ _id: 0, name: "All Geners" });

        return (
            <div className="row">
                <div className="col-3  mt-2">
                    <GenersList
                        genres={genres}
                        onItemSelected={this.handleClicked}
                        // valueProperty = "_id"
                        // textProperty = "name"
                        selectedId={this.state.selectedId}
                    />

                </div>
                <div className="col-8">
                    <h2> Showing {movieCount} movie from the db </h2>
                    <MoviesTable
                        movies={paginatedMovies}
                        sortColumn={sortColumn}
                        onDelete={this.handleDeleteMovie}
                        onLove={this.handleLove}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        totalItems={this.state.movies.length}
                        pageSize={this.state.pageSize}
                        currentPage={this.state.currentPage}
                        onPageChange={this.handlePageChange}
                    />

                </div>

            </div>
        );






    }

}
export default Movies;