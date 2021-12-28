import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './Gallery.css'
import Gallery from "react-photo-gallery";
import { Modal } from 'react-bootstrap';
import Slider from 'react-slick';

export const Galleryy = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
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

    const {Gallery: img} = useSelector(state => state.ga)

    const [Show, setShow] = useState(false)

    const click = (e) => {
        console.log(e)
        setShow(true)
    }


    return (
        <>
            <div className="container my-5">
              {
                (img)
                  &&
                <>
                  <Gallery onClick={click} margin={2} photos={img?.map(imgage => {
                    return (
                      {
                        src: imgage?.image,
                        width: imgage?.width,
                        height: imgage?.height
                      }
                    )
                  })} />

                  <Modal
                      contentClassName='bg-dark'
                      centered
                      size="xl"
                      show={Show}
                      onHide={() => setShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                  >
                  <Modal.Header closeButton>
                  </Modal.Header>
                  <Modal.Body> 
                    <div className="row">
                      <Slider {...settings}>
                        {img?.map(image => {
                          return(
                            <div className='col-12'>
                              <img src = {image.image} className="d-block w-100 rounded" style={{width: '500px', height: '800px'}} alt="" />
                            </div>
                          )
                        })}
                      </Slider>
                    </div>
                  </Modal.Body>
                  </Modal>
                </>
              }
            </div>
        </>
    )
}
