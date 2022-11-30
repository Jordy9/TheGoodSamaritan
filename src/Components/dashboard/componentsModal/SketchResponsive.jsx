import React from 'react'

export const SketchResponsive = ({activeBosquejo, heightScroll}) => {
  return (
    <>
      <div className = 'my-2 bg-dark image-round d-flex align-items-center'>
        <img src={activeBosquejo.image} style = {{objectFit: 'cover', height: '100%', maxHeight: '200px', maxWidth: '200px', width: 'auto', float: 'left', marginRight: '20px', borderRadius: '1rem'}} alt="..." />
        {
            (heightScroll < 190)
                &&
            <h1 className='text-center'>{activeBosquejo?.title}</h1>
        }
      </div>
    </>
  )
}
