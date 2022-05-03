import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

export const ImageMain = () => {

    const {ImageVideo} = useSelector(state => state.iv)

    const imageVideo = ImageVideo[0]

    return (
        <div className='row'>
          <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>

            {
              (imageVideo)
                &&
              (imageVideo?.image?.includes('.mp4') || (imageVideo?.url?.includes('.youtube')))
                ?
                (imageVideo?.image)
                  ?
                <ReactPlayer style={{objectFit: 'cover'}} width = '100%' height = '67.4vh' url={imageVideo?.image} controls />
                  :
                  <iframe src = {imageVideo?.url} title="YouTube video player" style={{borderRadius: '40px', height: '67.4vh', width: '100%'}} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; full-screen" allowfullscreen="allowfullscreen"></iframe>
                // <ReactPlayer style={{objectFit: 'cover'}} width = '100%' height = '67.4vh' url={imageVideo?.url} controls />
                  
                :
              <img src={imageVideo?.image} alt="" style={{objectFit: 'cover', height: '67.4vh', width: '100%'}} className="img-fluid image-round" />
            }
          </div>
        </div>
    )
}
