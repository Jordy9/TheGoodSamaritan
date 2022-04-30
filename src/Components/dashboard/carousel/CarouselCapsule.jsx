import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'
import { startSetCapsule } from '../../../action/capsule'

export const CarouselCapsule = () => {

    const dispatch = useDispatch()

  const {Capsules} = useSelector(state => state.ca)
  

  const handledSet = (Capsule) => {
    dispatch(startSetCapsule(Capsule))
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
              slidesToShow: 3,
              slidesToScroll: 3,
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
              {
                (Capsules?.length > 0)
                  &&
                <h1>Cápsulas Devocionales</h1>
              }
                <Slider {...settings}>
                  {
                    Capsules?.map(Capsule => {
                      return (
                        <div key={Capsule._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                          <img src={Capsule.image} onClick={() => handledSet(Capsule)} data-bs-toggle="modal" data-bs-target="#exampleModal9" className="image-round imgag img-fluid shadowImage" style={{objectFit: 'cover', height: '355px', width: '100%'}} alt="..." />
                          <h5 className='text-center'>{Capsule.title}</h5>
                        </div>
                      )
                    })
                  }
                </Slider>
            </div>   
        </>
    )
}
