import React, { useEffect } from 'react'
import './Capsule.css'
import Slider from "react-slick";
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser'
import { startSetCapsule } from '../../../action/capsule';

export const Capsule = () => {
  const dispatch = useDispatch()

  const {Capsules} = useSelector(state => state.ca)
  const {activeCapsule} = useSelector(state => state.ca)
  const {Capsulestart} = useSelector(state => state.ca)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCapsule]);

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
              slidesToShow: (Capsules?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              infinite: false,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: (Capsules?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              infinite: (Capsules?.length > 4) ? true : false,
              centerMode: (Capsules?.length > 4) ? true : false,
              slidesToShow: (Capsules?.length < 4 && Capsules?.length > 1) ? 1.2 : 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      
    return (
        <div className="container my-5"> 
            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark image-round flex-column'>
                <h1 className='text-center'>{
                        (activeCapsule)
                            ?
                        activeCapsule?.title
                            :
                        Capsulestart?.title || ''

                    }
                </h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    {
                                      (activeCapsule)
                                        ?
                                      <div className="carousel-item active">
                                        <img src={activeCapsule?.image} style = {{objectFit: 'cover', height: '100%', width: '100%'}} className="image-round" alt="..." />
                                      </div>
                                        :
                                      <div className="carousel-item active">
                                        <img src={Capsulestart?.image} style = {{objectFit: 'cover', height: '100%', width: '100%'}} className="image-round" alt="..." />  
                                      </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        {
                          (activeCapsule)
                            ?
                          parse(activeCapsule?.descripcion)
                            :
                          parse(Capsulestart?.descripcion || '')

                        }
                    </div>
                </div>
            </div>

            <div className = 'row my-5'>
              <Slider {...settings}>
                {
                  (Capsules)
                    &&
                  Capsules?.map(Capsule => {
                    return (
                      <div key={Capsule._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                          <img src={Capsule.image} onClick={() => handledSet(Capsule)} className="shadowImage image-round imgag img-fluid" alt="..." style={{objectFit: 'cover', height: '355px', width: '100%'}} />
                          <h5 className='text-center'>{Capsule.title}</h5>
                      </div>
                    )
                  })
                }
              </Slider>
            </div>
            </div>

    )
}
