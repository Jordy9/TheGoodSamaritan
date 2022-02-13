import moment from 'moment'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'

export const VerseOfTheDay = () => {

  const {verse} = useSelector(state => state.vs)

  const closeVerseOfTheDay = () => {
    localStorage.setItem('VerseOfTheDay', true)
    localStorage.setItem('VerseOfTheDayDateInit', new Date().getTime())
    setclose(true)
  }

  const [close, setclose] = useState(false)

  useEffect(() => {
    setclose(localStorage.getItem('VerseOfTheDay'))
  }, [])

  useEffect(() => {
    const hour = localStorage.getItem('VerseOfTheDayDateInit')

    if (moment(Number(hour)).fromNow() === 'hace 1 día') {
      setclose(false)
      console.log('lol')
    }
    
  }, [verse])
    
  return (
    <div hidden = {close} className='container' style={{marginTop: (localStorage.getItem('token') && '70px')}}>
      <div className = 'shadow align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
        <div className="row">
          <div className="d-flex justify-content-end">
            <button onClick={closeVerseOfTheDay} className='btn-close'></button>
          </div>
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
