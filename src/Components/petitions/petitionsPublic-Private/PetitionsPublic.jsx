import React from 'react'
import './Petitions.css'
import Slider from "react-slick";
import { useForm } from '../../../hooks/useForm'
import { useSelector } from 'react-redux'

export const PetitionsPublic = () => {

    const {Peticiones} = useSelector(state => state.pt)

    const [HandledInputChange, {nombre, correo, descripcion}] = useForm({
        nombre: '', 
        correo: '',
        descripcion: ''
    })

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
                                    <form className = 'needs-validation'>
                                        <div className="row">
                                            <div className="col form-group">
                                                <label>Nombre</label>
                                                <input name = 'nombre' type="text" onChange = {HandledInputChange} value = {nombre} placeholder = 'Juan' className = 'form-control bg-transparent text-white' />
                                            </div>

                                            <div className="col form-group">
                                                <label>Correo Electrónico</label>
                                                <input name = 'correo' type="text" onChange = {HandledInputChange} value = {correo} placeholder = 'Juan123@hotmail.com' className = 'form-control bg-transparent text-white ' />
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col form-group">
                                                <label>Descripción</label>
                                                <textarea style = {{resize: 'none'}} name = 'descripcion' type="text" rows = '5' onChange = {HandledInputChange} value = {descripcion} placeholder = 'Tu descripción aqui' className = 'form-control bg-transparent text-white' />
                                            </div>
                                        </div>
                                    </form>
                                    <button className = 'btn btn-outline-primary form-control' style = {{borderRadius: '50px'}}>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className = 'row my-5'>
                    <Slider {...settings}>
                        {
                            Peticiones?.map(peticion => {
                                return (
                                    <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                                        {peticion.title}
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>

    )
}
