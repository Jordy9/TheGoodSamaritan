import React from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import moment from 'moment'
import Slider from 'react-slick'

export const ModalMiniSerie = () => {
    const {activeSerie} = useSelector(state => state.mi)

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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

        <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <span className='text-right mr-4'>{moment(activeSerie?.date).format('MMMM Do YYYY, h:mm a')}</span>
                    <h1 className='text-center'>{activeSerie.title}</h1>

                    <div className="modal-body">
                        <div className="row">
                            <div className="bg-dark shadow p-5 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <Slider {...settings}>
                                    {
                                        (activeSerie)
                                            &&
                                        activeSerie.descripcion?.map((descripcion, index) => {
                                            return (
                                                <div key={descripcion + index} className="p-4">
                                                    {parse(descripcion)}
                                                </div>
                                            )
                                        })
                                    }
                                </Slider>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div> 
    )
}
