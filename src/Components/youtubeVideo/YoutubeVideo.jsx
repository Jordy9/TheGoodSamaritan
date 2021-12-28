import React, { useEffect } from 'react'
import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import Slider from 'react-slick';
import { SetActiveYoutube } from '../../action/youtubeImage';
import outube from '../../heroes/Youtube.png'


export const YoutubeVideo = () => {

  const dispatch = useDispatch()

  const {Youtube} = useSelector(state => state.yt)
  const {activeYoutube} = useSelector(state => state.yt)
  const {youtubeStart} = useSelector(state => state.yt)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeYoutube]);

  const handledSet = (youtube) => {
    dispatch(SetActiveYoutube(youtube))
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
          <div className="container">
              <div className="row">
                  <div className="col">
                      <div className = 'my-5'>
                          <div className="row my-5">
                              <div className="shadow bg-dark p-4 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center">
                                {
                                  (activeYoutube)
                                  ?
                                  <ReactPlayer width = '86.7vw' height = '100vh' url={activeYoutube?.urlImage} controls />
                                  :
                                  <ReactPlayer width = '86.7vw' height = '100vh' url={youtubeStart?.urlImage} controls />
                                }
                              </div>
                          </div>
                          <Slider {...settings}>
                              {
                                  Youtube?.map(youtube => {
                                      return (
                                          <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-5'>
                                              <div style={{cursor: 'pointer'}} onClick={() => handledSet(youtube)}><h3 className='text-center'><img src={outube} className='img-fluid' alt=''/>{youtube?.title}</h3></div>
                                          </div>
                                      )
                                  })
                              }
                          </Slider>
                      </div>
                  </div>
              </div>
          </div>
        </>
    )
}
