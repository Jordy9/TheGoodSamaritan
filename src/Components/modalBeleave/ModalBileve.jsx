import React, { useEffect } from 'react'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'

export const ModalBileve = () => {

  const {Beleaver} = useSelector(state => state.bl)

    var settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
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

    const ShowNow = localStorage.getItem('Show')

    const [Show, setShow] = useState()

    const onHideModal = () => {
      if (!ShowNow) {
        setShow(false)
        localStorage.setItem('Show', true)
      }
    }

    const ShowModal = () => {
      setShow(true)
    }

    useEffect(() => {
      const timer = setTimeout(() => {
        if (!ShowNow) {
          ShowModal()
        }
      }, 3000);

      return () => {
        clearTimeout(timer);
      }
    }, [])
    

    return (
        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <Modal
                contentClassName='bg-dark'
                centered
                size="xl"
                show={Show}
                onHide={() => onHideModal()}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header id='modal-header-video' closeButton>
                </Modal.Header>
                <Modal.Body> 
                  <div className="row">
                    <Slider {...settings}>
                      {
                        Beleaver?.map(beleaver => {
                          return (
                            <div key={beleaver._id}>
                              <h1 className='text-center'>{beleaver.title}</h1>
                              <img src = {beleaver.image} alt="" className='img-fluid rounded' />
                            </div>
                          )
                        })
                      }
                    </Slider>
                  </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
