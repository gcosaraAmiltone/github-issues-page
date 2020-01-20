import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({itemsPerPage, totalItems, paginate}) => {
    const pageNumbers = [];
    for (let i=1; i<=Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    };
    // console.log(pageNumbers);    
    
    return (
        <nav>
           <ul className="pagination" >
               {pageNumbers.map(number=>(
                   <li key={number} className="page-item" onClick={paginate(number)}>
                       <a href="#" className="page-link">
                           {number}
                       </a>
                   </li>
               ))}
           </ul>
        </nav>
    )
};

Pagination.propTypes = {
    paginate: PropTypes.func.isRequired,
};

export default Pagination;
