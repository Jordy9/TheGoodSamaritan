import React, { useEffect } from 'react'
import './Sketch.css'
import Slider from "react-slick";
import {useSelector} from 'react-redux'
import { useDispatch } from 'react-redux';
import {startSetSketch} from '../../../action/sketch'
import parse from 'html-react-parser'

export const Sketch = () => {
  const dispatch = useDispatch()

  const {Bosquejos} = useSelector(state => state.skt)
  const {activeBosquejo} = useSelector(state => state.skt)
  const {Bosquejostart} = useSelector(state => state.skt)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeBosquejo]);

  const handledSet = (bosquejo) => {
    dispatch(startSetSketch(bosquejo))
  }

    var settings = {
        dots: false,
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
        <div className="container my-5"> 
            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        {
                          (activeBosquejo)
                            ?
                          parse(activeBosquejo?.descripcion)
                            :
                          parse(Bosquejostart?.descripcion || '')

                        }
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    {
                                      (activeBosquejo)
                                        ?
                                      <img src={activeBosquejo?.image} className="d-block w-100 rounded" alt="..." />
                                        :
                                      <img src={Bosquejostart?.image} className="d-block w-100 rounded" alt="..." />  
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
                  (Bosquejos)
                    &&
                  Bosquejos?.map(bosquejo => {
                    return (
                      <div key={bosquejo._id} className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
                          <img src={bosquejo.image} onClick={() => handledSet(bosquejo)} className="d-block w-100 rounded imgag" alt="..." style={{height: '355px'}} />
                      </div>
                    )
                  })
                }
              </Slider>
            </div>
            </div>

    )
}
