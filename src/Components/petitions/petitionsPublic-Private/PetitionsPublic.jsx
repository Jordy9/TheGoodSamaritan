import React, { useEffect, useState } from 'react'
import './Petitions.css'
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux'
import { ModalPetition } from '../modal/ModalPetition';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { PetitionModalUser } from '../modal/ModalPetitionUser';
import moment from 'moment';
import Swal from 'sweetalert2';
import { setPetition, setPetitionUser, startCreatePetition, startGetPaginatePetitions, startGetPaginatePetitionsUser } from '../../../action/petition';
import { sendEmailToPetition } from '../../../action/sendEmailToPetition';

export const PetitionsPublic = () => {

    const {Peticiones, MyPetitions, Paginate, PaginateUser} = useSelector(state => state.pt)

    const {activeUser} = useSelector(state => state.auth)

    const [peticionesfiltradas, setpeticionesfiltradas] = useState()
    
    useEffect(() => {
        let peticionesfiltradas

        const peticionesfiltro = []

        MyPetitions?.map(petitions => peticionesfiltro?.push(petitions.createdAt))

        peticionesfiltradas = peticionesfiltro?.filter(peticiones => moment(peticiones, 'YYYY-MM-DD[T]HH:mm:ss').fromNow() < "hace 1 día")

        setpeticionesfiltradas(peticionesfiltradas)

    }, [MyPetitions])

    const dispatch = useDispatch()

    const [showAnonimo, setShowAnonimo] = useState(false)

    const [showDescripcion, setShowDescripcion] = useState(false)

    const {handleSubmit, resetForm, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            name: activeUser?.name, 
            title: '', 
            descripcion: '',
        },
        enableReinitialize: true,
        onSubmit: ({name, title, descripcion}) => {
            if (peticionesfiltradas?.length > 9) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  return Toast.fire({
                    icon: 'error',
                    title: 'Solo se permiten 10 peticiones por usuario durante el día'
                  })
            } else {
                let id = activeUser?.id
                let role = activeUser?.role
                if (showAnonimo) {
                    name = 'Anónimo'
                    role = 'Anónimo'
                }
                dispatch(startCreatePetition(name, title, descripcion, id, role, showDescripcion))
                dispatch(sendEmailToPetition(name))
                resetForm({
                    title: '', 
                    descripcion: ''
                })
                setShowAnonimo(false)
                setShowDescripcion(false)
            }
            
        },
        validationSchema: Yup.object({
            title: Yup.string()
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .max(100, 'Debe de tener 100 caracteres o menos')
                        .required('Requerido'),
            descripcion: Yup.string()
                        .min(3, 'Debe de tener 3 caracteres o más')
        })
    })

    const hanldedSetPetition = (petition) => {
        dispatch(setPetition(petition))
    }  

    const hanldedSetPetitionUser = (petition) => {
        dispatch(setPetitionUser(petition))
    }  

    const [activeIndex, setActiveIndex] = useState(0)

    const [activeIndex2, setActiveIndex2] = useState(0)

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        afterChange: (index) => setActiveIndex(index),
        lazyLoad: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: (MyPetitions?.length > 1) ? 2 : 1,
                slidesToScroll: 2,
                lazyLoad: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: (MyPetitions?.length > 1) ? 2 : 1,
                slidesToScroll: 2,
                initialSlide: 2,
                lazyLoad: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
                infinite: (MyPetitions?.length > 4) ? true : false,
                centerMode: (MyPetitions?.length > 4) ? true : false,
                slidesToShow: (MyPetitions?.length < 4 && MyPetitions?.length > 1) ? 1.2 : 1,
                slidesToScroll: 1,
                lazyLoad: true,
            }
          }
        ]
      };

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        afterChange: (index) => setActiveIndex2(index),
        lazyLoad: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: (Peticiones?.length > 1) ? 2 : 1,
                slidesToScroll: 2,
                lazyLoad: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: (Peticiones?.length > 1) ? 2 : 1,
                slidesToScroll: 2,
                initialSlide: 2,
                lazyLoad: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
                infinite: (Peticiones?.length > 4) ? true : false,
                centerMode: (Peticiones?.length > 4) ? true : false,
                slidesToShow: (Peticiones?.length < 4 && Peticiones?.length > 1) ? 1.2 : 1,
                slidesToScroll: 1,
                lazyLoad: true,
            }
          }
        ]
      };

      useEffect(() => {
        if (activeIndex2 >= (Peticiones?.length - 5) && Number(Paginate?.page) < Paginate?.total) {
          dispatch(startGetPaginatePetitions(Number(Paginate?.page) + 1))
        }
      }, [activeIndex2])

      useEffect(() => {
        if (activeIndex >= (MyPetitions?.length - 5) && Number(PaginateUser?.page) < PaginateUser?.total) {
          dispatch(startGetPaginatePetitionsUser(Number(PaginateUser?.page) + 1))
        }
      }, [activeIndex])

    return (
        <div className="container"> 
            <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="mb-3" style = {{border: 'none'}}>
                            <div className = 'text-white'>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} className = 'needs-validation'>
                                        <div className="row">
                                            <div className="col form-group">
                                                <label>Motivo de oración</label>
                                                <input type="text" {...getFieldProps('title')} placeholder = 'Oración por fortaleza' className = 'form-control bg-transparent text-white ' />
                                                {touched.title && errors.title && <span style={{color: 'red'}}>{errors.title}</span>}
                                            </div>
                                        </div>

                                        <div className = 'row'>
                                           <div className = 'col-12 form-group'>
                                              <h4>¿Te gustaria dar más detalle sobre tu petición de oración?</h4>
                                                <div style={{display: 'flex'}}>
                                                    <div className="form-check mr-4">
                                                        <input defaultChecked = {(showDescripcion)} onClick={() => setShowDescripcion(true)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="option1" />
                                                        <label className="form-check-label">Si</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input defaultChecked = {(!showDescripcion)} onClick={() => setShowDescripcion(false)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="option2" />
                                                        <label className="form-check-label">No</label>
                                                    </div>
                                                </div>
                                           </div>
                                        </div>

                                        <div className = 'row'>
                                           <div className = 'col-12 form-group'>
                                              <h4>¿Pedir oración de forma anónima?</h4>
                                                <div style={{display: 'flex'}}>
                                                    <div className="form-check mr-4">
                                                        <input defaultChecked = {(showAnonimo)} onClick={() => setShowAnonimo(true)} className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" value="option3" />
                                                        <label className="form-check-label">Si</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input defaultChecked = {(!showAnonimo)} onClick={() => setShowAnonimo(false)} className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault4" value="option4" />
                                                        <label className="form-check-label">No</label>
                                                    </div>
                                                </div>
                                           </div>
                                        </div>

                                        {
                                            (showDescripcion)
                                                &&
                                            <div className="row">
                                                <div className="col form-group">
                                                    <label>Descripción</label>
                                                    <textarea style = {{resize: 'none'}} type="text" rows = '5' {...getFieldProps('descripcion')} placeholder = 'Tu descripción aqui' className = 'form-control bg-transparent text-white' />
                                                    {touched.descripcion && errors.descripcion && <span style={{color: 'red'}}>{errors.descripcion}</span>}
                                                </div>
                                            </div>
                                        }
                                        <button type='submit' className = 'btn btn-outline-primary form-control' style = {{borderRadius: '50px'}}>Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row my-5">
                    {
                        (MyPetitions?.length > 0)
                            &&
                        <h1 className='my-2'>Mis peticiones</h1>
                    }
                    <Slider {...settings}>
                        {
                            MyPetitions?.map(peticion => {
                                return (
                                    <div key={peticion._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                        <div data-bs-toggle="modal" data-bs-target="#exampleModal10" onClick={() => hanldedSetPetitionUser(peticion)} className='p-2' style={{backgroundColor: '#212529', borderRadius: '1rem'}}>
                                            {
                                            (peticion?.check)
                                                ?
                                            <div style={{cursor: 'pointer', borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', position: 'absolute', zIndex: 1045, backgroundColor: 'green', top: 0, right: 0, boxShadow: '0 4px 0 0 rgba(0,0,0,0.39)'}}>
                                                <span style={{fontSize: '13px'}} className='p-2'>Lista</span>
                                            </div>
                                                :
                                            <div style={{cursor: 'pointer', borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', position: 'absolute', zIndex: 1045, backgroundColor: 'red', top: 0, right: 0, boxShadow: '0 4px 0 0 rgba(0,0,0,0.39)'}}>
                                                <span style={{fontSize: '13px'}} className='p-2'>En espera</span>
                                            </div>
                                            }
                                            <h5 style={{wordWrap: 'break-word', cursor: 'pointer'}} className='text-center textCard mt-1'>{peticion.title}</h5>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

                <div className = 'row'>
                    {
                        (Peticiones?.length > 0)
                            &&
                        <h1 className='my-5'>Listado de peticiones de oración</h1>
                    }
                    <Slider {...settings2}>
                        {
                            Peticiones?.map(peticion => {
                                return (
                                    <div key={peticion._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                        <div data-bs-toggle="modal" data-bs-target="#exampleModal7" onClick={() => hanldedSetPetition(peticion)} className='p-2' style={{backgroundColor: '#212529', borderRadius: '1rem'}}>
                                            <h5 style={{wordWrap: 'break-word', cursor: 'pointer'}} className='text-center textCard mt-1'>{peticion.title}</h5>
                                        </div>
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
