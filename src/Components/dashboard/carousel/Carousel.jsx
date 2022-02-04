import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import Slider from 'react-slick'
import { setSeries } from '../../../action/miniSerie';

export const Carousel = () => {

  const dispatch = useDispatch()

  const {miniSeries} = useSelector(state => state.mi)
  

  const handledSet = (miniSeries) => {
    dispatch(setSeries(miniSeries))
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
                <h1>Mini Series</h1>
                <Slider {...settings}>
                  {
                    miniSeries?.map(Serie => {
                      return (
                        <div key={Serie._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                          <img src={Serie.image} onClick={() => handledSet(Serie)} data-bs-toggle="modal" data-bs-target="#exampleModal3" className="d-block w-100 rounded imgag" style={{height: '355px'}} alt="..." />
                          <h5 className='text-center'>{Serie.title}</h5>
                        </div>
                      )
                    })
                  }
                </Slider>
            </div>   
        </>
    )
}