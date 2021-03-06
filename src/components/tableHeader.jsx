import React, { Component } from 'react';

class TableHeader extends Component {


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

    renderSortIcon = (column=>{
        if(column.path !== this.props.sortColumn.path) return null;
        if(this.props.sortColumn.order === 'asc') return <i className='fa fa-sort-asc'></i>
        return <i className='fa fa-sort-desc'></i>
    })

    render() {
        const { columns } = this.props;
        return (
            <thead>
                <tr className= "clickable">
                    {columns.map((column, index) =>
                        <th
                            key={index}
                            onClick={() => this.raiseSort(column.path)}
                    >{column.label} {this.renderSortIcon(column)}</th>
                    )}

                </tr>
            </thead>



        );
    }
}

export default TableHeader;