import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Slider from 'react-slick'
import { startGetPaginateBosquejos, startSetSketch } from '../../../action/sketch';

export const CarouselSketch = () => {

  const dispatch = useDispatch()

  const {Bosquejos, Paginate} = useSelector(state => state.skt)

  const handledSet = (bosquejo) => {
    dispatch(startSetSketch(bosquejo))
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
              slidesToShow: (Bosquejos?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              lazyLoad: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: (Bosquejos?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              initialSlide: 2,
              lazyLoad: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: (Bosquejos?.length >= 4) ? true : false,
              slidesToShow: (Bosquejos?.length <= 4 && Bosquejos?.length > 1) ? 1.2 : 1,
              slidesToScroll: 1,
              lazyLoad: true,
            }
          }
        ]
      };

      useEffect(() => {
        if (activeIndex === (Bosquejos?.length - 4) && Number(Paginate?.page) < Paginate?.total) {
          dispatch(startGetPaginateBosquejos(Number(Paginate?.page) + 1))
        }
      }, [activeIndex])

    return (
        <div className = 'row my-5'>
          {
            (Bosquejos?.length > 0)
              &&
            <h1>Bosquejos Devocionales</h1>
          }
            <Slider {...settings}>
              {
                Bosquejos?.map(bosquejo => {
                  return (
                    <div key={bosquejo._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-2'>
                      <div className='borderCards'>
                        <img src={bosquejo.image} onClick={() => handledSet(bosquejo)} data-bs-toggle="modal" data-bs-target="#exampleModal2" className="cardRound img-fluid" alt="..." style={{objectFit: 'cover', height: '355px', width: '100%'}} />
                        <h5 className='p-2 textCard'>{bosquejo.title}</h5>
                      </div>
                    </div>
                  )
                })
              }
            </Slider>
        </div>   
    )
}
