import React, { useState } from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Antiguotestamento } from '../../Antiguotestamento'
import { Libros } from '../../Libros'
import { Nuevotestamento } from '../../Nuevotestamento'
import { VerseOfTheDay } from '../verseOfTheDay/VerseOfTheDay'
import './bible.css'

const librosBiblia = [...Antiguotestamento(), ...Nuevotestamento()]

export const Bible = () => {
    const libros = Libros()

    const [first, setfirst] = useState()

    const [libroActual, setlibroActual] = useState()

    const [versiculo, setVersiculo] = useState()

    const [Capitulo, setCapitulo] = useState()

    const onClick = (e, libros) => {
        setlibroActual(libros)
        setCapitulo(e)
        setfirst(librosBiblia[e])
    }

    const Versiculo = (e) => {
        console.log(librosBiblia[Capitulo][e])
        setVersiculo(librosBiblia[Capitulo][e])
    }
    
  return (
    <div style={{marginTop: '70px'}}>
        <div className = 'shadow p-3 mt-2 bg-dark rounded-lg text-white'>
            <div className="text-center">
                <span style={{fontSize: '20px'}}>{libroActual}</span>
            </div>
            <Navbar style={{overflowX: 'auto'}} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' expand="lg" bg = 'dark' variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            
                    <Nav className="mx-auto">
                        {
                            first?.map((capitulo, index) => {
                                return (
                                    <button onClick={() => Versiculo(index)} className='mx-1 btn btn-outline-primary' key={capitulo}>
                                        Capítulo {index + 1}
                                    </button>
                                )
                            })
                        }
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <div className="row mt-3">
                <div className="col-xs-0 col-sm-0 col-md-2 col-lg-2 col-xl-2 flex-column" style={{overflowY: 'auto', height: '450px'}}>
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

                <div className='col-xs-12 col-sm-12 col-md-10 col-lg-10 col-xl-10' style={{overflowY: 'auto', height: '450px'}}>
                    {
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
                            <VerseOfTheDay />
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
