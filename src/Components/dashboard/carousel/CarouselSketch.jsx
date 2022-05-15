import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Slider from 'react-slick'
import { startSetSketch } from '../../../action/sketch';

export const CarouselSketch = () => {

  const dispatch = useDispatch()

  const {Bosquejos} = useSelector(state => state.skt)

  const handledSet = (bosquejo) => {
    dispatch(startSetSketch(bosquejo))
  }

    var settings = {
        infinite: (Bosquejos?.length >= 4) ? true : false,
        autoplay: (Bosquejos?.length >= 4) ? true : false,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        lazyLoad: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: (Bosquejos?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              autoplay: true,
              autoplaySpeed: 5000,
              lazyLoad: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: (Bosquejos?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              initialSlide: 2,
              autoplay: true,
              autoplaySpeed: 5000,
              lazyLoad: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              infinite: (Bosquejos?.length >= 4) ? true : false,
              centerMode: (Bosquejos?.length >= 4) ? true : false,
              slidesToShow: (Bosquejos?.length <= 4 && Bosquejos?.length > 1) ? 1.2 : 1,
              slidesToScroll: 1,
              autoplay: (Bosquejos?.length >= 4) ? true : false,
              autoplaySpeed: 5000,
              lazyLoad: true,
            }
          }
        ]
      };

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
                    <div key={bosquejo._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                        <img src={bosquejo.image} onClick={() => handledSet(bosquejo)} data-bs-toggle="modal" data-bs-target="#exampleModal2" className="image-round imgag img-fluid shadowImage" alt="..." style={{objectFit: 'cover', height: '355px', width: '100%'}} />
                        <h5 className='text-center'>{bosquejo.title}</h5>
                    </div>
                  )
                })
              }
            </Slider>
        </div>   
    )
}
