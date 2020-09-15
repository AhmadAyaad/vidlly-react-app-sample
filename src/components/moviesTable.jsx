import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Heart from './heart';
import Table from './table';
import TableBody from './tableBody';
import TableHeader from './tableHeader';


class MoviesTable extends Component {

    columns = [
        {
            path: 'title', label: 'Title',
            content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Number In Stock' },
        { path: 'publishDate', label: 'Publish Date' },
        { path: 'dailyRentalRate', label: 'Rate' },
        {
            key: 'like', content: movie =>
                <Heart
                    clicked={() => this.props.onLove(movie)}
                    movie={movie} />
        },
        {
            key: 'delete', content: movie =>
                <button
                    onClick={() => this.props.onDelete(movie)}
                    className="btn btn-danger"> Delete
                </button>
        }
    ]



    raiseSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path)
            sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
        else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }




    render() {

        const { movies, onSort } = this.props;

        return (
            <Table
                sortColumn={this.props.sortColumn}
                data={movies}
                onSort={onSort}
                columns={this.columns}
            />


        );
    }
}



export default MoviesTable;