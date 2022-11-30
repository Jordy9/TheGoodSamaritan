import React from 'react'

export const MiniserieResponsive = ({first, activeSerie, parse, miniSerieStart, first2}) => {
  return (
    <div className='my-2 bg-dark image-round d-flex align-items-center'>
        {
            (first === 0)
                &&
            <>
                <img src={activeSerie?.image} style = {{objectFit: 'cover', height: '100%', maxHeight: '200px', maxWidth: '200px', width: 'auto', float: 'left', marginRight: '20px', borderRadius: '1rem'}} className="image-round img-fluid mb-3" alt="..." />
                <h1 className='text-center mx-2'>{activeSerie?.title}</h1>
            </>
        }
    </div>
  )
}
