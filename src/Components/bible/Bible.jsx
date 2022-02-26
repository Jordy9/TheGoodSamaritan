import React, { useEffect, useState } from 'react'
import { useMemo } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { BookClear, getBook } from '../../action/verseofTheDay'
import { Antiguotestamento } from '../../Antiguotestamento'
import { scrollToTopAnimated } from '../../helper/ScrollToBottom'
import { Libros } from '../../Libros'
import { Nuevotestamento } from '../../Nuevotestamento'
import { Note } from '../note/Note'
import { VerseOfTheDay } from '../verseOfTheDay/VerseOfTheDay'
import './Bible.css'

const librosBiblia = [...Antiguotestamento(), ...Nuevotestamento()]

export const Bible = () => {

    const dispatch = useDispatch()

    const libros = Libros()

    const [title, setTitle] = useState('')

    const {book: libroActual} = useSelector(state => state.vs)

    const [first, setfirst] = useState()

    const [versiculo, setVersiculo] = useState()

    const [Capitulo, setCapitulo] = useState()

    const onClick = (e, libros) => {
        dispatch(getBook(libros))
        setCapitulo(e)
        setfirst(librosBiblia[e])
    }

    useEffect(() => {
        if (first) {
            setVersiculo(librosBiblia[Capitulo][0])
        }
    }, [first, Capitulo])

    useEffect(() => {
        scrollToTopAnimated('verse')
    }, [versiculo])
    

    const Versiculo = (e) => {
        setVersiculo(librosBiblia[Capitulo][e])
    }

    const [width, setWidth] = useState(window.innerWidth);

    const changeWidth = () => {
        setWidth(window.innerWidth)
    }

    const [ocultar, setOcultar] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', changeWidth)
        if (width <= 820) {
            if (libroActual !== null) {
                setOcultar(true)
            } else {
                setOcultar(false)
            }
        } else {
            setOcultar(false)
        }
        
        return () => window.removeEventListener('resize', changeWidth)
        
    }, [libroActual, width]);

    const arrowBack = () => {
        dispatch(BookClear())
    }

    useEffect(() => {    
      return () => {
        dispatch(BookClear())
      }
    }, [dispatch])   

    let filtroDeBusqueda

    if (librosBiblia) {
        filtroDeBusqueda = [...librosBiblia]
    }

    // const [vor, setvor] = useState([])

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
        
  return (
    <div style={{marginTop: (libroActual) ? '80px' : '120px'}}>
        <i data-bs-toggle="modal" data-bs-target="#exampleModalNota" className="fab bi bi-journal-bookmark-fill"></i>
        <div className = 'shadow p-3 mt-2 bg-dark rounded-lg text-white'>
            <i onClick={arrowBack} hidden = {(!ocultar)} className="bi bi-arrow-left" style={{margin: 0, cursor: 'pointer'}}></i>
            <div className="input-group">
                <input placeholder='Buscar por título' type="search" value={title} onChange={({target}) => setTitle(target.value)} className="form-control bg-transparent text-white" />
            </div>

            <div className="text-center">
                {
                    (libroActual !== null)
                        &&
                    <span style={{fontSize: '20px'}}>{libroActual}</span>
                }

                {
                    (libroActual === null && width <= 820)
                        &&
                    <h3>Santa Bíblia Reina Valera 1960</h3>
                }
            </div>
            <Navbar hidden = {(!libroActual)} style={{overflowX: 'auto'}} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 navbar-nav' expand="lg" bg = 'dark' variant="dark">
            
                <Nav className="flex-row mx-md-auto d-md-flex">
                    {
                        first?.map((capitulo, index) => {
                            return (
                                <button style={{border: 'none', borderBottom: '1px solid white'}} onClick={() => Versiculo(index)} className='mx-1 btn btn-outline-primary' key={capitulo}>
                                    Capítulo {index + 1}
                                </button>
                            )
                        })
                    }
                </Nav>

            </Navbar>
            <div className="row mt-3">
                <div hidden = {(ocultar)} className="col-xs-0 col-sm-0 col-md-2 col-lg-2 col-xl-2 flex-column" style={{overflowY: 'auto', height: '450px'}}>
                    <ul className='list-group text-center' style={{listStyle: 'none'}}>
                        {
                            libros.map((libros, index) => {
                                return (
                                    <>
                                        <li className= {`${libroActual === libros && 'activeBook'}`} onClick={() => onClick(index, libros)} style={{cursor: 'pointer'}} key={libros}>
                                            {libros}
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>

                <div id='verse' hidden = {!ocultar && width <= 820} className='col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10' style={{overflowY: 'auto', height: '450px'}}>

                    {
                        (title.trim().length > 2)
                            ?
                        arreglo?.map( (arreglo, index) => {
                            return (
                                <div key={arreglo + index} className = 'shadow align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
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
                            :
                        (libroActual)
                            ?
                        versiculo?.map((versiculo, index) => {
                            return (
                                <div className='my-2'>
                                    {index + 1}. {versiculo}
                                </div>
                            )
                        })
                            :
                        <div className="mt-5">
                            <h3 className='text-center'>Santa Bíblia Reina Valera 1960</h3>
                            <VerseOfTheDay />
                        </div>
                    }

                </div>
            </div>
        </div>
        <Note />
    </div>
  )
}
