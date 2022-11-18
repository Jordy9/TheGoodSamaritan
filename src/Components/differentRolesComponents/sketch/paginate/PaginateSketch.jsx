import React from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { startGetPaginateBosquejos } from '../../../../action/sketch';

export const PaginateSketch = () => {

    const dispatch = useDispatch()

    const {Paginate} = useSelector(state => state.skt)

    const handlePageClick = (event) => {
        const newOffset = (event.selected + 1);
        dispatch(startGetPaginateBosquejos(newOffset))
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Siguiente"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={Paginate?.total}
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
            />
        </>
    )
}
