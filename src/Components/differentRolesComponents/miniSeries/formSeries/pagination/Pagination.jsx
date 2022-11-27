import React from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux';
import { getImageApi } from '../../../../../action/miniSerie';
import { scrollToTopAnimated } from '../../../../../helper/ScrollToBottom';

export const Pagination = ({searchParam, newImage, setNewImage, changeSwitch, number = 20}) => {

    const dispatch = useDispatch();

    const total = Math.ceil(newImage?.totalHits/number)

    const handlePageClick = (event) => {
        const newOffset = (event.selected + 1)

        dispatch(getImageApi(searchParam, setNewImage, newOffset, changeSwitch))

        scrollToTopAnimated('modalImage')
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Siguiente"
                onPageChange={handlePageClick}
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
