import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { clearActivePaginate } from '../../action/search'
import { searchBibleFalse } from '../../action/verseofTheDay'
import { Antiguotestamento } from '../../Antiguotestamento'
import { scrollToTopAnimatedPost } from '../../helper/ScrollToBottom'
import { Libros } from '../../Libros'
import { Nuevotestamento } from '../../Nuevotestamento'
import { Paginate } from './paginate/Paginate'

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

    const [arregloChange, setArregloChange] = useState()

    const [titleSecondary, setTitleSecondary] = useState()

    const onClickButton = () => {
        dispatch(clearActivePaginate())
        setTitleSecondary(title)
        setTitle('')
        arreglo.splice(0, arreglo.length)
        setArregloChange()
            for (let index = 0; index < filtroDeBusqueda.length; index++) {
                const element = filtroDeBusqueda[index] 
                
                for (let index2 = 0; index2 < element.length; index2++) { 
        
                    (title !== '')
                            &&
                        filtroDeBusqueda[index][index2]?.filter((filtroDeBusqueda) => filtroDeBusqueda.toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))).map(filtro => {
                            return arreglo.push([filtro, index, index2, filtroDeBusqueda[index][index2].indexOf(filtro)])
                        })
                    
                }
            }
        setArregloChange(arreglo)
    }

    const arrowBackSearch = () => {
        dispatch(searchBibleFalse())
    }

    const [versiculo, setVersiculo] = useState()
    const [libroActual, setlibroActual] = useState(null)

    const [cond, setCond] = useState(null)

    const Versiculo = (capitulo, libro, libroCap, lol) => {
        setVersiculo(librosBiblia[libroCap][capitulo])
        setlibroActual(libro)
        setCond(lol)
    }

    const arrowBackSearchFilter = () => {
        setlibroActual(null)
        setVersiculo(null)
    }

    const [currentPage, setCurrentPage] = useState(0)

    const paginateVerse = () => {
        return arregloChange?.slice(currentPage, currentPage + 10)
    }

    useEffect(() => {
        const lol = document.getElementById(cond)
        if (lol) {
            lol?.scrollIntoView({block: "center", behavior: "smooth"})
        }
    }, [cond, libroActual])
    

    useEffect(() => {
        scrollToTopAnimatedPost()
    }, [currentPage])

  return (
    <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="input-group mb-2">
                <div className="d-flex align-items-center mr-2">
                    <i hidden = {(libroActual !== null) && true} onClick={arrowBackSearch} className="bi bi-arrow-left" style={{margin: 0, cursor: 'pointer'}}></i>

                    <i hidden = {(libroActual === null) && true} onClick={arrowBackSearchFilter} className="bi bi-arrow-left" style={{margin: 0, cursor: 'pointer'}}></i>
                </div>
                <input hidden = {(libroActual !== null) && true} placeholder='Buscador' type="search" value={title} onChange={({target}) => setTitle(target.value)} className="form-control bg-transparent text-white" />
                <button disabled = {(title === '')} hidden = {(libroActual !== null) && true} className='btn btn-secondary ml-1' style={{borderRadius: '50px'}} onClick={onClickButton}>buscar</button>
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
                                    <div key={versiculo + index} id = {`${versiculo}`} style = {{textDecoration: (cond === versiculo) && 'underline'}} className='my-2'>
                                        {index + 1}. {versiculo}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                    :
                <>

                    <h5 className='text-left text-light'>{titleSecondary}</h5>
                    <h5 className='text-center text-light'>Resultados: {arregloChange?.length}</h5>

                    {
                        paginateVerse()?.map( (arreglo, index) => {
                            return (
                                <div id={`${arreglo[0]}`} style={{cursor: 'pointer'}} onClick = {() => Versiculo(arreglo[2], libros[arreglo[1]], arreglo[1], arreglo[0])} key={arreglo + index} className = 'shadow align-items-center p-4 my-2 bg-dark image-round flex-column hoverSearch'>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                            <blockquote className='blockquote d-flex justify-content-center' style={{textDecoration: (cond === arreglo[0]) && 'underline'}}>
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

                    {
                        (arregloChange?.length > 0)
                            &&
                        <Paginate total = {arregloChange} setCurrentPage = {setCurrentPage} />
                    }
                </>
            }
        </div>
    </div>
  )
}
