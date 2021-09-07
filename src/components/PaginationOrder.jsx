import React from 'react';
import { Pagination } from 'react-bootstrap';
import PropTypes from 'prop-types';

const PaginationOrder = ({
  currentPage, postsPerPage, totalPosts, paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i += 1) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          onClick={() => paginate(number)}
          active={number === currentPage}
        >
          {number}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

PaginationOrder.propTypes = {
  currentPage: PropTypes.number.isRequired,
  postsPerPage: PropTypes.number.isRequired,
  totalPosts: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};

export default PaginationOrder;
