import React from 'react'
import { useSelector } from 'react-redux'

export const VerseOfTheDay = () => {

  const {verse} = useSelector(state => state.vs)
    
  return (
    <div hidden = {(verse.length === 0)} className='container'>
      <div className = 'shadow align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <div className="d-flex justify-content-center">
                <h3>Versículo del día <i className="bi bi-brightness-high-fill"></i></h3>
              </div>
            <blockquote className='blockquote d-flex justify-content-center'>
              {
                verse?.cita
              }
            </blockquote>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <span>{verse?.LibroActual} {Number(verse?.numerocap) + 1}:{Number(verse?.numeroversiculo) + 1} RVR1960</span>
        </div>
      </div>
    </div>
  )
}
