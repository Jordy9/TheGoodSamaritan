import React from 'react'
import ReactPlayer from 'react-player';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { setVideoWordOfTheDay } from '../../../action/VideoWordOfTheDay';

export const VideoWordOfTheDay = () => {

  const {videos} = useSelector(state => state.vwd)

  const dispatch = useDispatch()

  const handledSet = (video) => {
    dispatch(setVideoWordOfTheDay(video))
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
    <div className='my-5'>
        <h1>Palabra Del Día</h1>
        <div className="row">
            <Slider {...settings}>  
                {
                  videos?.map( videos => {
                    return (
                      <div key={videos._id} className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 imgag">
                        <ReactPlayer onClick={() => handledSet(videos)} style={{cursor: 'pointer'}} width = '100%' height = '100%' url={videos.image} data-bs-toggle="modal" data-bs-target="#exampleModalVideoWordOfTheDay" />
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
