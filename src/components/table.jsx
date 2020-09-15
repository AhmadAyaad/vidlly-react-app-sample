import React from 'react';
import TableHeader from '../components/tableHeader';
import TableBody from '../components/tableBody';
const Table = (props) => {
    const {sortColumn , columns , onSort , data} = props;

    return (
        <table className="table">
            <TableHeader
                sortColumn={sortColumn}
                columns={columns}
                onSort={onSort}
            />
            <TableBody data={data}
                columns={columns}
            />
        </table>

    );
}

export default Table; 