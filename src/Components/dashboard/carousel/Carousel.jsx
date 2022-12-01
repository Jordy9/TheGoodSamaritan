import moment from 'moment';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import Slider from 'react-slick'
import { setSeries, setShow, startGetPaginateMiniSeries } from '../../../action/miniSerie';
import { ModalMiniSerie } from '../modal/ModalMiniSerie';

export const Carousel = () => {

  const dispatch = useDispatch()

  const {miniSeries, activeSerie, Paginate} = useSelector(state => state.mi)
  
  const handledSet = (miniSeries) => {
    dispatch(setSeries(miniSeries))
    dispatch(setShow())
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

      useEffect(() => {
        if (activeIndex >= (miniSeries?.length - 5) && Number(Paginate?.page) < Paginate?.total) {
          dispatch(startGetPaginateMiniSeries(Number(Paginate?.page) + 1))
        }
      }, [activeIndex])

    return (
        <div className = 'row my-5'>
          {
            (miniSeries?.length > 0)
              &&
            <h1>Miniseries Devocionales</h1>
          }
            <Slider {...settings}>
              {
                miniSeries?.map(Serie => {
                  const fechainicio1 = moment(Serie?.updateCount, 'YYYY-MM-DD')
                  const fechafin2 = moment()

                  const NuevoCap = fechafin2.diff(fechainicio1, 'day')
                  return (
                    <div key={Serie._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-2'>
                      <div className='borderCards'>
                        {
                          (NuevoCap === 0)
                            &&
                          <div style={{borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', position: 'absolute', zIndex: 1045, backgroundColor: 'red', right: 0, boxShadow: '0 4px 0 0 rgba(0,0,0,0.39)'}}>
                            <span className='p-2'>Nuevo capítulo</span>
                          </div>
                        }
                        <img src={Serie.image} onClick={() => handledSet(Serie)} className="cardRound img-fluid" style={{objectFit: 'cover', width: '100%', height: '355px'}} alt="..." />

                        <h5 className='p-2 textCard'>{Serie.title}</h5>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>

            {
              (activeSerie)
                  &&
              <ModalMiniSerie />
            }
        </div>   
    )
}