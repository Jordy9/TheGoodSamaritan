import React from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { ActivePaginate } from '../../../action/search';

export const Paginate = ({total, setCurrentPage}) => {

    const dispatch = useDispatch()

    const {activePage} = useSelector(state => state.bd)

    const handlePageClick = (event) => {
        const newOffset = (event.selected * 10) % total?.length;
        setCurrentPage(newOffset)
        dispatch(ActivePaginate(event.selected))
    };

    const totalPage = Math.ceil((total?.length) / 10)

    return (
        <div style={{overflowX: 'auto'}}>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Siguiente"
                onPageChange={handlePageClick}
                pageRangeDisplayed={1}
                pageCount={totalPage}
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
                forcePage={activePage}
                renderOnZeroPageCount = {null}
            />
        </div>
    )
}
