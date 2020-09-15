import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';


const Pagination = (props) => {

    const { pageSize, totalItems, currentPage } = props;
    const pageCount = Math.ceil(totalItems / pageSize);

    if (pageCount === 1) return null;

    ///hy3ml create le array b3dd el pages elly mwgoda 
    const pages = _.range(1, pageCount + 1);


    return (
        <nav >
            <ul className="pagination">
                {pages.map(page => (
                    <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                        <a className="page-link"
                            href ="#"
                         onClick={() => props.onPageChange(page)} >{page}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    pageSize: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
}
export default Pagination;