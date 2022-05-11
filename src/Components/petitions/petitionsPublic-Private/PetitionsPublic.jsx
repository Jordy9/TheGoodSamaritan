import React, { useEffect, useState } from 'react'
import './Petitions.css'
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux'
import { setPetition, setPetitionUser, startCreatePetitionUser, startGetPetitionesUser, startGetPetitions } from '../../../action/petition';
import { ModalPetition } from '../modal/ModalPetition';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { PetitionModalUser } from '../modal/ModalPetitionUser';
import perfil1 from '../../../heroes/User.png'
import moment from 'moment';
import Swal from 'sweetalert2';

export const PetitionsPublic = () => {

    const {Peticiones, PeticionesUser, MyPetitions} = useSelector(state => state.pt)

    const {usuarios} = useSelector(state => state.cht)

    const {activeUser, users} = useSelector(state => state.auth)

    const [peticionesfiltradas, setpeticionesfiltradas] = useState()
    
    useEffect(() => {
        let peticionesfiltradas

        const peticionesfiltro = []

        MyPetitions?.map(petitions => peticionesfiltro?.push(petitions.createdAt))

        peticionesfiltradas = peticionesfiltro?.filter(peticiones => moment(peticiones, 'YYYY-MM-DD[T]HH:mm:ss').fromNow() < "hace 1 día")

        setpeticionesfiltradas(peticionesfiltradas)

    }, [MyPetitions, PeticionesUser])

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetPetitions())
        dispatch(startGetPetitionesUser())
      }, [dispatch])

    const {handleSubmit, resetForm, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            name: activeUser?.name, 
            title: '', 
            descripcion: ''
        },
        enableReinitialize: true,
        onSubmit: ({name, title, descripcion}) => {
            if (peticionesfiltradas?.length > 9) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 5000,
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
                dispatch(startCreatePetitionUser(name, title, descripcion))
                resetForm({
                    title: '', 
                    descripcion: ''
                })
            }
            
        },
        validationSchema: Yup.object({
            title: Yup.string()
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .max(100, 'Debe de tener 100 caracteres o menos')
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
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: (MyPetitions?.length > 1) ? 2 : 1,
                slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: (MyPetitions?.length > 1) ? 2 : 1,
                slidesToScroll: 2,
                initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
                infinite: (MyPetitions?.length > 4) ? true : false,
                centerMode: (MyPetitions?.length > 4) ? true : false,
                slidesToShow: (MyPetitions?.length < 4 && MyPetitions?.length > 1) ? 1.2 : 1,
                slidesToScroll: 1
            }
          }
        ]
      };

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: (Peticiones?.length > 1) ? 2 : 1,
                slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: (Peticiones?.length > 1) ? 2 : 1,
                slidesToScroll: 2,
                initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
                infinite: (Peticiones?.length > 4) ? true : false,
                centerMode: (Peticiones?.length > 4) ? true : false,
                slidesToShow: (Peticiones?.length < 4 && Peticiones?.length > 1) ? 1.2 : 1,
                slidesToScroll: 1
            }
          }
        ]
      };

    var settings3 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
                slidesToShow: (PeticionesUser?.length > 1) ? 2 : 1,
                slidesToScroll: 2,
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: (PeticionesUser?.length > 1) ? 2 : 1,
                slidesToScroll: 2,
                initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
                infinite: (PeticionesUser?.length > 4) ? true : false,
                centerMode: (PeticionesUser?.length > 4) ? true : false,
                slidesToShow: (PeticionesUser?.length < 4 && PeticionesUser?.length > 1) ? 1.2 : 1,
                slidesToScroll: 1
            }
          }
        ]
      };

      const petitionsCount = PeticionesUser?.filter(p => p.user.id !== activeUser?.id)

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
                                            <img data-bs-toggle="modal" data-bs-target="#exampleModal10" onClick={() => hanldedSetPetitionUser(peticion)} src={(activeUser?.urlImage) ? activeUser?.urlImage : perfil1} style={{objectFit: 'cover', height: '355px', width: '100%'}} className='img-fluid image-round imgag shadowImage' alt=''/>
                                            <h5 className='text-center'>{peticion.title}</h5>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>

                <div className = 'row my-5'>
                    {
                        (Peticiones?.length > 0)
                            &&
                        <h1 className='my-5'>Listado de peticiones de pastores</h1>
                    }
                    <Slider {...settings2}>
                        {
                            Peticiones?.map(peticion => {
                                const imageFiltered = usuarios?.filter(user => user.id === peticion.user.id)
                                return (
                                    <div key={peticion._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                        <img data-bs-toggle="modal" data-bs-target="#exampleModal7" onClick={() => hanldedSetPetition(peticion)} src={(imageFiltered[0]?.urlImage) ? imageFiltered[0]?.urlImage : perfil1} style = {{objectFit: 'cover', width: '100%', height: '355px'}} className='img-fluid image-round imgag shadowImage' alt=''/>
                                        <h5 className='text-center d-flex'>{peticion.title}</h5>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>

                <div className = 'row my-5'>
                    {
                        (petitionsCount?.length > 0)
                            &&
                        <h1 className='my-5'>Listado de peticiones de usuarios</h1>
                    }
                    <Slider {...settings3}>
                        {
                            PeticionesUser?.filter(p => p.user.id !== activeUser?.id).map(peticion => {
                                const imageFiltered = users?.filter(user => user.id === peticion.user.id)
                                return (
                                    <div key={peticion._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                        <img data-bs-toggle="modal" data-bs-target="#exampleModal7" onClick={() => hanldedSetPetition(peticion)} src={(imageFiltered[0]?.urlImage) ? imageFiltered[0]?.urlImage : perfil1} style = {{objectFit: 'cover', width: '100%', height: '355px'}} className='img-fluid image-round imgag shadowImage' alt=''/>
                                        <h4 className='text-center'>{peticion.title}</h4>
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
