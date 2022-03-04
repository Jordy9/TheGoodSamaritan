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
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
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
        <div className="container my-5"> 
            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                <h1>{
                        (activeCapsule)
                            ?
                        activeCapsule?.title
                            :
                        Capsulestart?.title || ''

                    }
                </h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        {
                          (activeCapsule)
                            ?
                          parse(activeCapsule?.descripcion)
                            :
                          parse(Capsulestart?.descripcion || '')

                        }
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    {
                                      (activeCapsule)
                                        ?
                                      <img src={activeCapsule?.image} className="d-block w-100 rounded" alt="..." />
                                        :
                                      <img src={Capsulestart?.image} className="d-block w-100 rounded" alt="..." />  
                                    }
                                </div>
                            </div>
                        </div>
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
                          <img src={Capsule.image} onClick={() => handledSet(Capsule)} className="d-block w-100 rounded imgag img-fluid" alt="..." style={{height: '355px'}} />
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
