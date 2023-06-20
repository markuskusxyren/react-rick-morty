import React from 'react';
import ReactPaginate from 'react-paginate';

function pagination({ info, pageNumber, setPageNumber }) {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel={<span style={{ color: 'white' }}>Next</span>}
      previousLabel={<span style={{ color: 'white' }}>Prev</span>}
      nextClassName="btn btn-primary"
      previousClassName="btn btn-primary"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
      onPageChange={(data) => {
        setPageNumber(data.selected + 1);
      }}
      pageCount={info?.pages}
    />
  );
}

export default pagination;
