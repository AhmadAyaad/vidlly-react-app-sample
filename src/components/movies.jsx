import React, { Component } from 'react';
import { getMovies, deleteMovie } from '../services/fakeMovieService';
import { paginate } from '../utils/paginate';
import GenersList from './genersList';
import Pagination from './pagmiation';
import { getGenres } from '../services/fakeGenreService.js';
import MoviesTable from './moviesTable';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';

class Movies extends Component {

    state = {
        movies: [],
        genres: [],
        pageSize: 4,
        currentPage: 1,
        selectedId: null,
        searchQuery: "",
        sortColumn: { path: 'title', order: 'asc' }
    }

    componentDidMount() {
        this.setState({ movies: getMovies(), genres: getGenres() });
        console.log(this.state.movies)
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
        this.setState({ onItemSelected: genre._id });
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

    handleSearch = (query) => {
        console.log(query)
        this.setState({ searchQuery: query, selectedId: null, currentPage: 1 });
    }

    render() {

        const { sortColumn, searchQuery } = this.state;
        let movies = this.state.movies;
        let { length: movieCount } = movies;

        if (movieCount === 0)
            return <h1>No movies in the database</h1>

        if (searchQuery) {
            movies = this.state.movies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
        }

        const sortedMovies = _.orderBy(movies,
            [sortColumn.path],
            [sortColumn.order]);

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
                        selectedId={this.state.selectedId}
                    />
                </div>
                <div className="col-8">

                    <Link
                        to="/movies/new"
                        className='btn btn-primary'
                    >
                        Create Movie
                    </Link>
                    <h2> Showing {sortedMovies.length} movie from the db </h2>
                    <SearchBox
                        value={searchQuery}
                        onChange={this.handleSearch}
                    />
                    <MoviesTable
                        movies={paginatedMovies}
                        sortColumn={sortColumn}
                        onDelete={this.handleDeleteMovie}
                        onLove={this.handleLove}
                        onSort={this.handleSort}
                    />
                    <Pagination
                        totalItems={movies.length}
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