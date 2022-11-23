import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { ModalOpenVideo, setVideoWordOfTheDay, startGetPaginateVideos } from '../../../action/VideoWordOfTheDay';
import './VideoWordOfTheDay.css'

export const VideoWordOfTheDay = () => {

  const {videos, Paginate} = useSelector(state => state.vwd)

  const dispatch = useDispatch()

  const handledSet = (video) => {
    dispatch(setVideoWordOfTheDay(video))
    dispatch(ModalOpenVideo(true))
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
              slidesToShow: (videos?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              lazyLoad: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: (videos?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              initialSlide: 2,
              lazyLoad: true,
            }
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: (videos?.length >= 4) ? true : false,
              slidesToShow: (videos?.length <= 4 && videos?.length > 1) ? 1.2 : 1,
              slidesToScroll: 1,
              lazyLoad: true,
            }
          }
        ]
      };

  useEffect(() => {
    if (activeIndex === (videos?.length - 4) && Number(Paginate?.page) < Paginate?.total) {
      dispatch(startGetPaginateVideos(Number(Paginate?.page) + 1))
    }
  }, [activeIndex])
  
  return (
    <div className='my-5'>
      {
        (videos?.length > 0)
          &&
        <h1>Palabra Del Día</h1>
      }
        <div className="row">
            <Slider {...settings}>  
                {
                  videos?.map( videos => {
                    return (
                      <div key={videos._id} className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-2">
                        <div className='borderCards'>
                          <video onClick={() => handledSet(videos)} src={videos?.image} style={{width: '100%', height: '355px', objectFit: 'cover', borderTopLeftRadius: '40px', borderTopRightRadius: '40px'}}></video>

                          <h5 className='p-2 textCard'>{videos.title}</h5>
                        </div>
                      </div>
                    )
                  })
                }
            </Slider>
        </div>
    </div>
  )
}
