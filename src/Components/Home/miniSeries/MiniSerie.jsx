import React, { useEffect, useState } from 'react'
import './MiniSerie.css'
import Slider from "react-slick";
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser'
import { scrollToTopAnimatedPost } from '../../../helper/ScrollToBottom';
import { setSeries } from '../../../action/miniSerie';
import { Spinner } from '../../spinner/Spinner';
import moment from 'moment';

export const MiniSerie = () => {
  const dispatch = useDispatch()

  const {miniSeries, activeSerie, miniSerieStart} = useSelector(state => state.mi)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSerie]);

  const handledSet = (Serie) => {
    dispatch(setSeries(Serie))
  }

  const [first, setfirst] = useState(0)

  const [first2, setfirst2] = useState(0)

  const countArray = activeSerie?.descripcion?.length

  const countArrayStart = miniSerieStart?.descripcion?.length

  useEffect(() => {
    scrollToTopAnimatedPost()
  }, [first, first2])

  const next = () => {
    if (countArray - 1 !== first) {
      setfirst(first + 1)
    }
  }

  const nextStart = () => {
    if (countArrayStart - 1 !== first2) {
      setfirst2(first2 + 1)
    }
  }

  const prev = () => {
    if (first > 0) {
      setfirst(first - 1)
    }
  }

  const prevStart = () => {
    if (first2 > 0) {
      setfirst2(first2 - 1)
    }
  }

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: (miniSeries?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              infinite: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: (miniSeries?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              infinite: (miniSeries?.length >= 4) ? true : false,
              centerMode: (miniSeries?.length >= 4) ? true : false,
              slidesToShow: (miniSeries?.length <= 4 && miniSeries?.length > 1) ? 1.2 : 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
      if (miniSerieStart === null) {
        return (
          <Spinner />
        )
      }

      const fechainicio1 = moment(activeSerie?.updatedAt, 'YYYY-MM-DD')
      const fechainicio2 = moment(miniSerieStart?.updatedAt, 'YYYY-MM-DD')
      const fechafin2 = moment()

      const NuevoCap = fechafin2.diff(fechainicio1, 'day')

      const NuevoCap1 = fechafin2.diff(fechainicio2, 'day')

    return (
        <div className="container my-5"> 
            <div className = 'shadow d-flex p-2 my-2 bg-dark image-round flex-column'>
            <span className='text-right mr-4 mb-2'>{moment(activeSerie?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                <h1 className='text-center'>
                  {
                    (activeSerie)
                        ?
                    activeSerie?.title
                        :
                    miniSerieStart?.title || ''

                  }
                </h1>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="p-4">
                        {
                          (activeSerie)
                            ?
                          (first === 0)
                              &&
                          <>
                            {
                              (NuevoCap === 0)
                                &&
                              <div style={{borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', position: 'absolute', zIndex: 1045, backgroundColor: 'red', right: 0, boxShadow: '0 4px 0 0 rgba(0,0,0,0.39)'}}>
                                <h4 className='p-2 my-1'>Nuevo capítulo</h4>
                              </div>
                            }
                            <img src={activeSerie?.image} style = {{objectFit: 'cover', height: '100%', width: '100%'}} className="image-round img-fluid my-2" alt="..." />
                          </>
                            :
                          (first2 === 0)
                              &&
                          <>
                            {
                              (NuevoCap1 === 0)
                                &&
                              <div style={{borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', position: 'absolute', zIndex: 1045, backgroundColor: 'red', right: 0, boxShadow: '0 4px 0 0 rgba(0,0,0,0.39)'}}>
                                <h4 className='p-2 my-1'>Nuevo capítulo</h4>
                              </div>
                            }
                            <img src={miniSerieStart?.image} style = {{objectFit: 'cover', height: '100%', width: '100%'}} className="image-round img-fluid my-2" alt="..." />
                          </>
                        }
                        
                        {
                          (activeSerie)
                            ?
                          parse(activeSerie?.descripcion[first])
                            :
                          parse(miniSerieStart?.descripcion[first2] || '')
                        }

                        <div className="row">
                          {
                            (activeSerie)
                              ?
                              <>
                                <div className="col-6 justify-content-start">
                                  <button className='btn btn-outline-secondary' style={{borderRadius: '10px', color: 'white'}} hidden = {(first <= 0)} onClick = {prev}><i className="fa-solid fa-angle-left"></i> Anterior</button>
                                </div>

                                <div className="col-6 justify-content-end text-end">
                                  <button className='btn btn-outline-secondary' style={{borderRadius: '10px', color: 'white'}} hidden = {(countArray - 1 === first)} onClick = {next}>Siguiente <i className="fa-solid fa-angle-right"></i></button>
                                </div>
                              </>

                              :
                              <>
                                <div className="col-6 justify-content-start">
                                  <button className='btn btn-outline-secondary' style={{borderRadius: '10px', color: 'white'}} hidden = {(first2 <= 0)} onClick = {prevStart}><i className="fa-solid fa-angle-left"></i> Anterior</button>
                                </div>

                                <div className="col-6 justify-content-end text-end">
                                  <button className='btn btn-outline-secondary' style={{borderRadius: '10px', color: 'white'}} hidden = {(countArrayStart - 1 === first2)} onClick = {nextStart}>Siguiente <i className="fa-solid fa-angle-right"></i></button>
                                </div>
                              </>
                          }
                        </div>
                    </div>
                  </div>
                </div>
            </div>

            <div className = 'row my-5'>
              <Slider {...settings}>
                {
                  (miniSeries)
                    &&
                  miniSeries?.map(Serie => {
                    const fechainicio1 = moment(Serie?.updatedAt, 'YYYY-MM-DD')
                    const fechafin2 = moment()

                    const NuevoCap = fechafin2.diff(fechainicio1, 'day')
                    return (
                      <div key={Serie._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <div className='imgag'>
                          {
                            (NuevoCap === 0)
                              &&
                            <div style={{borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', position: 'absolute', zIndex: 1045, backgroundColor: 'red', right: 0, boxShadow: '0 4px 0 0 rgba(0,0,0,0.39)'}}>
                              <span className='p-2'>Nuevo capítulo</span>
                            </div>
                          }
                          <img src={Serie.image} onClick={() => handledSet(Serie)} className="shadowImage image-round img-fluid" alt="..." style={{objectFit: 'cover', height: '355px', width: '100%'}} />
                        </div>
                          <h5 className='text-center'>{Serie.title}</h5>
                      </div>
                    )
                  })
                }
              </Slider>
            </div>
            </div>

    )
}
