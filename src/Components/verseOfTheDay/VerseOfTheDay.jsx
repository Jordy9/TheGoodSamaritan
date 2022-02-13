import React, { useEffect } from 'react'
import { useState } from 'react'
import { Antiguotestamento } from '../../Antiguotestamento'
import { Libros } from '../../Libros'
import { Nuevotestamento } from '../../Nuevotestamento'

export const VerseOfTheDay = () => {

  const closeVerseOfTheDay = () => {
    localStorage.setItem('VerseOfTheDay', true)
    setclose(true)
  }

  const [close, setclose] = useState(false)

  const [versiculoDelDia, setversiculoDelDia] = useState()

  const [numeroLibro, setnumeroLibro] = useState()

  const [numeroCapitulo, setnumeroCapitulo] = useState()

  const [numeroVersiculo, setnumeroVersiculo] = useState()

    useEffect(() => {

      const libros = [...Antiguotestamento(), ...Nuevotestamento()]

      const numerolibro = Math.floor(Math.random() * libros?.length)

      const numerocap = Math.floor(Math.random() * libros[numerolibro].length)

      console.log('total', libros[numerolibro].length)
      console.log('aleatorio', numerocap)
      
      setnumeroCapitulo(numerocap)

      const numerover = libros[numerolibro][numerocap]

      const numeroversiculo = Math.floor(Math.random() * numerover.length)

      console.log(numeroversiculo)
      
      setnumeroVersiculo(numeroversiculo)
      
      const LibroActual = Libros()[numerolibro]

      setnumeroLibro(LibroActual)
      
      setTimeout(() => {
        setversiculoDelDia(libros[numerolibro][numerocap][numeroversiculo])
      }, 1500);

      setclose(localStorage.getItem('VerseOfTheDay'))

    }, [])
    
  return (
    <div hidden = {close} className='container'>
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
                versiculoDelDia
              }
            </blockquote>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <span>{numeroLibro} {Number(numeroCapitulo) + 1}:{Number(numeroVersiculo) + 1} RVR1960</span>
        </div>
      </div>
    </div>
  )
}
