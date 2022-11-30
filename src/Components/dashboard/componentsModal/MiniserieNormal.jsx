import React from 'react'

export const MiniserieNormal = ({first, activeSerie, parse}) => {
  return (
    <div>
        {
            (first === 0)
            &&
            <img src={activeSerie?.image} style = {{objectFit: 'cover', height: '100%', maxHeight: '400px', maxWidth: '500px', width: 'auto', float: 'left', marginRight: '20px', borderRadius: '1rem'}} className="image-round img-fluid mb-3" alt="..." />
        }
        
        {
            (activeSerie)
                &&
            parse(activeSerie?.descripcion[first])
        }
    </div>
  )
}
