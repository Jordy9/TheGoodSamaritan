import React, { useEffect, useState } from 'react'
import './MiniSerie.css'
import Slider from "react-slick";
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser'
import { scrollToTopAnimatedPost } from '../../../helper/ScrollToBottom';
import { MiniSerieStart, setSeries, startGetPaginateMiniSeries } from '../../../action/miniSerie';
import { Spinner } from '../../spinner/Spinner';
import moment from 'moment';
import { useResponsive } from '../../../hooks/useResponsive';
import { MiniserieNormal } from '../../dashboard/componentsModal/MiniserieNormal';
import { MiniserieResponsive } from '../../dashboard/componentsModal/MiniserieResponsive';
import { MiniNormal } from './MiniNormal';
import { MiniResponsive } from './MiniResponsive';

export const MiniSerie = () => {
  const dispatch = useDispatch()

  const {miniSeries, activeSerie, miniSerieStart, Paginate} = useSelector(state => state.mi)

  useEffect(() => {
    dispatch(MiniSerieStart(miniSeries[0]))
  }, [miniSeries])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSerie]);

  const [first, setfirst] = useState(0)

  const [first2, setfirst2] = useState(miniSerieStart?.count)

  const countArray = activeSerie?.descripcion?.length

  const countArrayStart = miniSerieStart?.descripcion?.length

  const handledSet = (Serie) => {
    setfirst(0)
    dispatch(setSeries(Serie))
  }

  useEffect(() => {
    scrollToTopAnimatedPost()
  }, [first, first2])

  useEffect(() => {
    setfirst2(miniSerieStart?.count)
  }, [miniSerieStart?.count])
  

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

  const [activeIndex, setActiveIndex] = useState(0)

  var settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    lazyLoad: true,
    afterChange: (index) => setActiveIndex(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: (miniSeries?.length > 1) ? 2 : 1,
          slidesToScroll: 2,
          lazyLoad: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: (miniSeries?.length > 1) ? 2 : 1,
          slidesToScroll: 2,
          initialSlide: 2,
          lazyLoad: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: (miniSeries?.length >= 4) ? true : false,
          slidesToShow: (miniSeries?.length <= 4 && miniSeries?.length > 1) ? 1.2 : 1,
          slidesToScroll: 1,
          lazyLoad: true,
        }
      }
    ]
  };
    
      const fechainicio1 = moment(activeSerie?.updateCount, 'YYYY-MM-DD')
      const fechainicio2 = moment(miniSerieStart?.updateCount, 'YYYY-MM-DD')
      const fechafin2 = moment()

      const NuevoCap = fechafin2.diff(fechainicio1, 'day')

      const NuevoCap1 = fechafin2.diff(fechainicio2, 'day')

      useEffect(() => {
        if (activeIndex >= (miniSeries?.length - 5) && Number(Paginate?.page) < Paginate?.total) {
          dispatch(startGetPaginateMiniSeries(Number(Paginate?.page) + 1))
        }
      }, [activeIndex])

      const [ respWidth ] = useResponsive()
      
      if (miniSerieStart === null) {
        return (
          <Spinner />
        )
      }

    return (
        <div className="container my-5"> 
            <div className = 'shadow d-flex p-2 my-2 bg-dark image-round flex-column'>
            <span className='text-right mr-4 mb-2'>{moment(activeSerie?.createdAt || miniSerieStart?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
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
                        (respWidth > 991)
                          ?
                        <div className="modal-body">
                          <MiniNormal
                            activeSerie={activeSerie} 
                            first = {first} 
                            parse = {parse}
                            first2 = {first2}
                            NuevoCap = {NuevoCap}
                            NuevoCap1 = {NuevoCap1}
                            miniSerieStart = {miniSerieStart}
                          />

                          <div className='mt-3'>
                            {
                              (activeSerie)
                                ?
                              parse(activeSerie?.descripcion[first])
                                :
                              parse(miniSerieStart?.descripcion[first2] || '')
                            }
                          </div>
                        </div>
                          :
                        <>
                          <MiniResponsive
                            activeSerie={activeSerie} 
                            first = {first} 
                            parse = {parse}
                            first2 = {first2}
                            NuevoCap = {NuevoCap}
                            NuevoCap1 = {NuevoCap1}
                            miniSerieStart = {miniSerieStart}
                          />
                          <div className='mt-3'>
                            {
                              (activeSerie)
                                ?
                              parse(activeSerie?.descripcion[first])
                                :
                              parse(miniSerieStart?.descripcion[first2] || '')
                            }
                          </div>
                        </>
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
                    const fechainicio1 = moment(Serie?.updateCount, 'YYYY-MM-DD')
                    const fechafin2 = moment()

                    const NuevoCap = fechafin2.diff(fechainicio1, 'day')
                    return (
                      <div key={Serie._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-3'>
                        <div className='borderCards'>
                          {
                            (NuevoCap === 0)
                              &&
                            <div style={{borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', position: 'absolute', zIndex: 1045, backgroundColor: 'red', right: 0, boxShadow: '0 4px 0 0 rgba(0,0,0,0.39)'}}>
                              <span className='p-2'>Nuevo capítulo</span>
                            </div>
                          }
                          <img src={Serie.image} onClick={() => handledSet(Serie)} className="cardRound img-fluid" alt="..." style={{objectFit: 'cover', height: '355px', width: '100%'}} />

                          <h5 className='p-2 textCard'>{Serie.title}</h5>
                        </div>
                      </div>
                    )
                  })
                }
              </Slider>
            </div>
            </div>

    )
}
