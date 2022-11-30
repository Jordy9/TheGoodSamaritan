import React from 'react'

export const MiniNormal = ({activeSerie, first, NuevoCap, first2, NuevoCap1, miniSerieStart}) => {
  return (
    <>
        {
            (activeSerie)
                ?
            (first === 0)
                &&
            <>
                {
                    (NuevoCap === 0)
                    &&
                    <div style={{borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', position: 'absolute', zIndex: 1045, backgroundColor: 'red', left: 170, boxShadow: '0 4px 0 0 rgba(0,0,0,0.39)'}}>
                        <h6 style={{fontWeight: 'bold'}} className='p-1 px-2 my-1'>Nuevo capítulo</h6>
                    </div>
                }
                <img src={activeSerie?.image} style = {{objectFit: 'cover',height: '100%', maxHeight: '400px', maxWidth: '500px', width: 'auto', float: 'left', marginRight: '20px', borderRadius: '1rem'}} className="image-round img-fluid my-2" alt="..." />
            </>
                :
            (first2 === 0)
                &&
            <>
                {
                    (NuevoCap1 === 0)
                    &&
                    <div style={{borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', position: 'absolute', zIndex: 1045, backgroundColor: 'red', left: 170, boxShadow: '0 4px 0 0 rgba(0,0,0,0.39)'}}>
                        <h6 style={{fontWeight: 'bold'}} className='p-1 px-2 my-1'>Nuevo capítulo</h6>
                    </div>
                }
                <img src={miniSerieStart?.image} style = {{objectFit: 'cover',height: '100%', maxHeight: '400px', maxWidth: '500px', width: 'auto', float: 'left', marginRight: '20px', borderRadius: '1rem'}} className="image-round img-fluid my-2" alt="..." />
            </>
        }
    </>
  )
}
