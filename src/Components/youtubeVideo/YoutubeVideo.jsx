import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { SetActiveYoutube } from '../../action/youtubeImage';
import outube from '../../heroes/Youtube.png'


export const YoutubeVideo = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')

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
        infinite: false,
        lazyLoad: true,
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
              infinite: false
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

                          <h1 style={{marginTop: '70px'}}>Buscador</h1>
                          <div className="row">
                              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                  <div className="input-group">
                                      <input placeholder='Buscar por título' type="search" value={title} onChange={({target}) => setTitle(target.value)} className="form-control bg-transparent text-white" />
                                  </div>
                              </div>
                          </div>

                          <Slider {...settings}>
                              {
                                Youtube?.filter(Youtube => (title === '') ? Youtube : (Youtube?.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && Youtube
                                ).map(youtube => {
                                      return (
                                          <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-5'>
                                              <div style={{cursor: 'pointer'}} onClick={() => handledSet(youtube)}><img src={outube} className='img-fluid rounded imgag' alt=''/></div>
                                              <h5 className='text-center'>{youtube.title}</h5>
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
