import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Slider from 'react-slick';
import { SetActiveYoutube, startGetPaginateYoutube, startGetPaginateYoutubeSearchCarrousel } from '../../action/youtubeImage';
import outube from '../../heroes/Youtube.png'

export const YoutubeVideo = () => {

  const dispatch = useDispatch()

  const [searchParam, setSearchParam] = useState('')

  const {Youtube, Paginate} = useSelector(state => state.yt)
  const {youtubeStart} = useSelector(state => state.yt)
  const {activeYoutube} = useSelector(state => state.yt)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeYoutube]);

  const handledSet = (youtube) => {
    dispatch(SetActiveYoutube(youtube))
  }

  const [activeIndex, setActiveIndex] = useState(0)

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        lazyLoad: true,
        afterChange: (index) => setActiveIndex(index),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: (Youtube?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              lazyLoad: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: (Youtube?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              initialSlide: 2,
              lazyLoad: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: (Youtube?.length >= 4) ? true : false,
              slidesToShow: (Youtube?.length <= 4 && Youtube?.length > 1) ? 1.2 : 1,
              slidesToScroll: 1,
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

  useEffect(() => {
    if (activeIndex >= (Youtube?.length - 5) && Number(Paginate?.page) < Paginate?.total) {

      if (searchParam === '') {
        dispatch(startGetPaginateYoutube(Number(Paginate?.page) + 1))
      } else {
        dispatch(startGetPaginateYoutubeSearchCarrousel(Number(Paginate?.page) + 1, searchParam, 'search'))
      }
    }
  }, [activeIndex])

  const debounceRef = useRef()

  const onQueryChange = (target) => {
      if (debounceRef.current) {
          clearTimeout(debounceRef.current)
      }

      setSearchParam(target.value)

      debounceRef.current = setTimeout(() => {
        dispatch(startGetPaginateYoutubeSearchCarrousel(1, target.value))
      }, 350);
  }

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

          <h1 style={{marginTop: '70px'}}>Buscador</h1>
          <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                  <div className="input-group">
                      <input placeholder='Buscar por título' type="search" onChange={({target}) => onQueryChange(target)} className="form-control bg-transparent text-white" />
                  </div>
              </div>
          </div>
          
          <Slider {...settings}>
              {
                Youtube?.map(youtube => {
                      return (
                          <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-5'>
                            <div className='borderCards'>
                              <img src={youtube.image || outube} onClick={() => handledSet(youtube)} style = {{objectFit: 'cover', maxHeight: '355px', maxWidth: 'auto', height: 'auto', width: 'auto'}} className='img-fluid cardRound' alt='' />
                              <h5 className='p-2 textCard'>{youtube.title}</h5>
                            </div>
                          </div>
                      )
                  })
              }
          </Slider>
        </div>
    )
}
