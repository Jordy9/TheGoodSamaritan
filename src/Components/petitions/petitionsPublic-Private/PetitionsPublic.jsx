import React, { useEffect } from 'react'
import './Petitions.css'
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux'
import { setPetition, setPetitionUser, startCreatePetitionUser, startGetPetitionesUser, startGetPetitions } from '../../../action/petition';
import { ModalPetition } from '../modal/ModalPetition';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { PetitionModalUser } from '../modal/ModalPetitionUser';
import Login from '../../../heroes/Login.png'

export const PetitionsPublic = () => {

    const {Peticiones, PeticionesUser, MyPetitions} = useSelector(state => state.pt)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetPetitions())
        dispatch(startGetPetitionesUser())
      }, [dispatch])

    const {handleSubmit, resetForm, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            name: '', 
            title: '', 
            descripcion: ''
        },
        enableReinitialize: true,
        onSubmit: ({name, title, descripcion}) => {
            dispatch(startCreatePetitionUser(name, title, descripcion))
            resetForm({
                name: '', 
                title: '', 
                descripcion: ''
            })
        },
        validationSchema: Yup.object({
            title: Yup.string()
                        .min(2, 'Debe de tener 2 caracteres o más')
                        .required('Requerido'),
            descripcion: Yup.string()
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido')
        })
    })

    const hanldedSetPetition = (petition) => {
        dispatch(setPetition(petition))
    }  

    const hanldedSetPetitionUser = (petition) => {
        dispatch(setPetitionUser(petition))
    }  

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="container my-5"> 
            <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="mb-3" style = {{border: 'none'}}>
                            <div className = 'text-white'>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} className = 'needs-validation'>
                                        <div className="row">
                                            <div className="col form-group">
                                                <label>Nombre</label>
                                                <input type="text" {...getFieldProps('name')} className = 'form-control bg-transparent text-white' />
                                            </div>

                                            <div className="col form-group">
                                                <label>Propósito</label>
                                                <input type="text" {...getFieldProps('title')} placeholder = 'Oración por fortaleza' className = 'form-control bg-transparent text-white ' />
                                                {touched.title && errors.title && <span style={{color: 'red'}}>{errors.title}</span>}
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col form-group">
                                                <label>Descripción</label>
                                                <textarea style = {{resize: 'none'}} type="text" rows = '5' {...getFieldProps('descripcion')} placeholder = 'Tu descripción aqui' className = 'form-control bg-transparent text-white' />
                                                {touched.descripcion && errors.descripcion && <span style={{color: 'red'}}>{errors.descripcion}</span>}
                                            </div>
                                        </div>
                                        <button type='submit' className = 'btn btn-outline-primary form-control' style = {{borderRadius: '50px'}}>Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="row my-5">
                        <h1 className='my-2'>Mis peticiones</h1>
                        <Slider {...settings}>
                            {
                                MyPetitions?.map(peticion => {
                                    return (
                                        <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                            <div style={{cursor: 'pointer'}} data-bs-toggle="modal" data-bs-target="#exampleModal10" onClick={() => hanldedSetPetitionUser(peticion)}><h3 className='text-center'><img src={Login} className='img-fluid' alt=''/>{peticion?.title}</h3></div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>

                <div className = 'row my-5'>
                    <h1 className='my-5'>Listado de peticiones de pastores</h1>
                    <Slider {...settings}>
                        {
                            Peticiones?.map(peticion => {
                                return (
                                    <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                        <div data-bs-toggle="modal" data-bs-target="#exampleModal7" style={{cursor: 'pointer'}} onClick={() => hanldedSetPetition(peticion)}><h3 className='text-center'><img src={Login} className='img-fluid' alt=''/>{peticion?.title}</h3></div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

                <div className = 'row my-5'>
                    <h1 className='my-5'>Listado de peticiones de Usuarios</h1>
                    <Slider {...settings}>
                        {
                            PeticionesUser?.map(peticion => {
                                return (
                                    <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                        <div data-bs-toggle="modal" data-bs-target="#exampleModal7" style={{cursor: 'pointer'}} onClick={() => hanldedSetPetition(peticion)}><h3 className='text-center'><img src={Login} className='img-fluid' alt=''/>{peticion?.title}</h3></div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
                <ModalPetition />
                <PetitionModalUser />
            </div>

    )
}
