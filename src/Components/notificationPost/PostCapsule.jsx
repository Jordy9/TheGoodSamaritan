import React from 'react'
import parse from 'html-react-parser'

export const PostCapsule = ({notificationPost}) => {
  return (
    <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group">
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img src={notificationPost.image} style = {{objectFit: 'cover', height: '100%', width: '100%'}} className="image-round img-fluid" alt="..." />
                  </div>
              </div>
          </div>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
          {
              (notificationPost)
                  &&
              parse(notificationPost?.descripcion)
          }
      </div>
    </div>
  )
}
