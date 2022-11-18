import React from 'react'
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

export const Pagination = ({setCurrentPage}) => {

    const { users } = useSelector(state => state.auth)

    const total = Math.ceil(users?.length/5)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 5) % Math.ceil(users?.length);

        setCurrentPage(newOffset)
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Siguiente"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={total}
                previousLabel="Anterior"
                containerClassName='pagination justify-content-center'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakClassName='page-item'
                breakLinkClassName='page-link'
                activeClassName='active'
                initialPage={0}
            />
        </>
    )
}
