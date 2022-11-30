import React from 'react'

export const SketchNormal = ({activeBosquejo, parse}) => {
  return (
    <div className = 'my-2 bg-dark image-round'>
        <img src={activeBosquejo.image} style = {{objectFit: 'cover', height: '100%', maxHeight: '400px', maxWidth: '500px', width: 'auto', float: 'left', marginRight: '20px', borderRadius: '1rem'}} alt="..." />
        {
            (activeBosquejo)
                &&
            parse(activeBosquejo.descripcion)
        }
    </div>
  )
}
