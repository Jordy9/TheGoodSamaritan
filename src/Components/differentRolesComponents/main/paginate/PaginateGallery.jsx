import React from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { startGetPaginateMains } from '../../../../action/main';

export const PaginateMain = () => {

    const dispatch = useDispatch()

    const {Paginate} = useSelector(state => state.ma)

    const handlePageClick = (event) => {
        const newOffset = (event.selected + 1);
        dispatch(startGetPaginateMains(newOffset))
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
