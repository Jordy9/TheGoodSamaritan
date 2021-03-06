import React, { useEffect, useState } from 'react'
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
        infinite: (Youtube?.length >= 4) ? true : false,
        autoplay: (Youtube?.length >= 4) ? true : false,
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
              slidesToShow: (Youtube?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              autoplay: true,
              autoplaySpeed: 5000,
              lazyLoad: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: (Youtube?.length > 1) ? 2 : 1,
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
              infinite: (Youtube?.length >= 4) ? true : false,
              centerMode: (Youtube?.length >= 4) ? true : false,
              slidesToShow: (Youtube?.length <= 4 && Youtube?.length > 1) ? 1.2 : 1,
              slidesToScroll: 1,
              autoplay: (Youtube?.length >= 4) ? true : false,
              autoplaySpeed: 5000,
              lazyLoad: true,
            }
          }
        ]
      };

      const [width, setWidth] = useState(window.innerWidth);
      
      const changeWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener('resize', changeWidth)

      return () => window.removeEventListener('resize', changeWidth)
      
  }, [width]);

    return (
        <div className="container">
          <h1>Videos de youtube</h1>
          <div className="row">
              <div className="shadow image-round bg-dark p-4 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center">
                {
                  (activeYoutube)
                  ?
                  <iframe src = {activeYoutube?.urlImage} title="YouTube video player" style={{borderRadius: '40px', height: (width <= 767) ? 'auto' :'100vh', width: '100%'}} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; full-screen" allowfullscreen="allowfullscreen"></iframe>
                  :
                  <iframe src = {youtubeStart?.urlImage} title="YouTube video player" style={{borderRadius: '40px', height: (width <= 767) ? 'auto' :'100vh', width: '100%'}} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; full-screen" allowfullscreen="allowfullscreen"></iframe>
                }
              </div>
          </div>

          {
            (Youtube?.length > 0)
              &&
            <>
              <h1 style={{marginTop: '70px'}}>Buscador</h1>
              <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                      <div className="input-group">
                          <input placeholder='Buscar por t??tulo' type="search" value={title} onChange={({target}) => setTitle(target.value)} className="form-control bg-transparent text-white" />
                      </div>
                  </div>
              </div>
            </>
          }

          <Slider {...settings}>
              {
                Youtube?.filter(Youtube => (title === '') ? Youtube : (Youtube?.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && Youtube
                ).map(youtube => {
                      return (
                          <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-5'>
                              <img src={outube} onClick={() => handledSet(youtube)} style = {{objectFit: 'cover', width: '100%', height: '180px'}} className='img-fluid image-round imgag shadowImage' alt='' />
                              <h5 className='text-center'>{youtube.title}</h5>
                          </div>
                      )
                  })
              }
          </Slider>
        </div>
    )
}
