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
        <>
            <div className = 'row my-5'>
                <h1>Bosquejos</h1>
                <Slider {...settings}>
                  {
                    Bosquejos?.map(bosquejo => {
                      return (
                        <div key={bosquejo._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                            <img src={bosquejo.image} onClick={() => handledSet(bosquejo)} data-bs-toggle="modal" data-bs-target="#exampleModal2" className="d-block w-100 rounded imgag" alt="..." style={{height: '355px'}} />
                        </div>
                      )
                    })
                  }
                </Slider>
            </div>   
        </>
    )
}
