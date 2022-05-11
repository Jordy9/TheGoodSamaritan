import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { ModalOpenVideo, setVideoWordOfTheDay } from '../../../action/VideoWordOfTheDay';
import './VideoWordOfTheDay.css'

export const VideoWordOfTheDay = () => {

  const {videos} = useSelector(state => state.vwd)

  const dispatch = useDispatch()

  const handledSet = (video) => {
    dispatch(setVideoWordOfTheDay(video))
    dispatch(ModalOpenVideo(true))
  }

    var settings = {
        infinite: (videos?.length >= 4) ? true : false,
        autoplay: (videos?.length >= 4) ? true : false,
        autoplaySpeed: 5000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: (videos?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              autoplay: true,
              autoplaySpeed: 5000,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: (videos?.length > 1) ? 2 : 1,
              slidesToScroll: 2,
              initialSlide: 2,
              autoplay: true,
              autoplaySpeed: 5000,
            }
          },
          {
            breakpoint: 480,
            settings: {
              infinite: (videos?.length >= 4) ? true : false,
              centerMode: (videos?.length >= 4) ? true : false,
              slidesToShow: (videos?.length <= 4 && videos?.length > 1) ? 1.2 : 1,
              slidesToScroll: 1,
              autoplay: (videos?.length >= 4) ? true : false,
              autoplaySpeed: 5000,
            }
          }
        ]
      };

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
                      <div key={videos._id} className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className='imgag'>
                          <video onClick={() => handledSet(videos)} src={videos?.image} className = 'image-round shadowImage' style={{width: '100%', height: '355px', objectFit: 'cover'}}></video>
                        </div>
                        <h5 className='text-center'>{videos.title}</h5>
                      </div>
                    )
                  })
                }
            </Slider>
        </div>
    </div>
  )
}
