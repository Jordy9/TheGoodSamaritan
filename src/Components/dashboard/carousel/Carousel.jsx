import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import Slider from 'react-slick'
import { setSeries, setShow } from '../../../action/miniSerie';

export const Carousel = () => {

  const dispatch = useDispatch()

  const {miniSeries} = useSelector(state => state.mi)
  

  const handledSet = (miniSeries) => {
    dispatch(setSeries(miniSeries))
    dispatch(setShow())
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
              infinite: (miniSeries?.length > 4) ? true : false,
              centerMode: (miniSeries?.length > 4) ? true : false,
              slidesToShow: (miniSeries?.length < 4 && miniSeries?.length > 1) ? 1.2 : 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <>
            <div className = 'row my-5'>
              {
                (miniSeries?.length > 0)
                  &&
                <h1>Mini Series Devocionales</h1>
              }
                <Slider {...settings}>
                  {
                    miniSeries?.map(Serie => {
                      return (
                        <div key={Serie._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                          <img src={Serie.image} onClick={() => handledSet(Serie)} className="image-round imgag img-fluid shadowImage" style={{objectFit: 'cover', width: '100%', height: '355px'}} alt="..." />
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