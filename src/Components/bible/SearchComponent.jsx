import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { searchBibleFalse } from '../../action/verseofTheDay'
import { Antiguotestamento } from '../../Antiguotestamento'
import { Libros } from '../../Libros'
import { Nuevotestamento } from '../../Nuevotestamento'

const librosBiblia = [...Antiguotestamento(), ...Nuevotestamento()]

export const SearchComponent = () => {

    const libros = Libros()

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')

    let filtroDeBusqueda

    if (librosBiblia) {
        filtroDeBusqueda = [...librosBiblia]
    }

    let arreglo = useMemo(() => [], []);

    useEffect(() => {
        if (title.trim().length > 2) {
            for (let index = 0; index < filtroDeBusqueda.length; index++) {
                const element = filtroDeBusqueda[index] 
                
                for (let index2 = 0; index2 < element.length; index2++) { 
        
                    (title !== '')
                            &&
                        filtroDeBusqueda[index][index2]?.filter((filtroDeBusqueda) => filtroDeBusqueda.toLocaleLowerCase().includes(title.toLowerCase())).map(filtro => {
                            return arreglo.push([filtro, index, index2, filtroDeBusqueda[index][index2].indexOf(filtro)])
                        })
                    
                }
            }
        }
    }, [filtroDeBusqueda, title, arreglo])

    const arrowBackSearch = () => {
        dispatch(searchBibleFalse())
    }

    const [versiculo, setVersiculo] = useState()
    const [libroActual, setlibroActual] = useState(null)

    const Versiculo = (capitulo, libro, libroCap) => {
        setVersiculo(librosBiblia[libroCap][capitulo])
        setlibroActual(libro)
    }

    const arrowBackSearchFilter = () => {
        setlibroActual(null)
        setVersiculo(null)
    }

  return (
    <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="input-group mb-2">
                <div className="d-flex align-items-center mr-2">
                    <i hidden = {(libroActual !== null) && true} onClick={arrowBackSearch} className="bi bi-arrow-left" style={{margin: 0, cursor: 'pointer'}}></i>

                    <i hidden = {(libroActual === null) && true} onClick={arrowBackSearchFilter} className="bi bi-arrow-left" style={{margin: 0, cursor: 'pointer'}}></i>
                </div>
                <input hidden = {(libroActual !== null) && true} placeholder='Buscar por título' type="search" value={title} onChange={({target}) => setTitle(target.value)} className="form-control bg-transparent text-white" />
            </div>

            {

                (versiculo && libroActual !== null)
                    ?
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        {
                            (libroActual !== null)
                                &&
                            <span className='d-flex justify-content-center' style={{fontSize: '20px'}}>{libroActual}</span>
                        }

                        {
                            versiculo?.map((versiculo, index) => {
                                return (
                                    <div key={versiculo + index} className='my-2'>
                                        {index + 1}. {versiculo}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                    :
                (title)
                    &&
                arreglo?.map( (arreglo, index) => {
                    return (
                        <div style={{cursor: 'pointer'}} onClick = {() => Versiculo(arreglo[2], libros[arreglo[1]], arreglo[1])} key={arreglo + index} className = 'shadow align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <blockquote className='blockquote d-flex justify-content-center'>
                                    {
                                        arreglo[0]
                                    }
                                    </blockquote>
                                </div>
                            </div>
                            <div className="d-flex justify-content-end">
                                <span>{libros[arreglo[1]]} {arreglo[2] + 1}:{arreglo[3] + 1} RVR1960</span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}