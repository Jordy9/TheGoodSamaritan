import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'
import parse from 'html-react-parser'

export const ModalBileve = ({activeUser}) => {

  const {Beleaver} = useSelector(state => state.bl)
  const {socket} = useSelector(state => state.sk)

  const [day, setDay] = useState(activeUser)

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

    const [Show, setShow] = useState(false)

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
      let isMounted = true;
      const timer = setTimeout(() => {
        if (isMounted) {
          if (!ShowNow) {
            ShowModal()
          }
        }
      }, 3000);

      return () => {
        clearTimeout(timer);
        isMounted = false;
      }
    }, [ShowNow])

    useEffect(() => {
      let isMounted = true;
      const timer = setTimeout(() => {
        if (isMounted) {
          socket?.on('day-changed', (user) => {
            setDay(user?.dayNumber)
          })
        }   
      }, 100);

      return () => {
        clearTimeout(timer);
        isMounted = false;
      } 
    }, [socket])

    console.log(day)

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
                    {
                      (day > 0)
                      ?
                      <>
                      <h1 className='text-center'>{Beleaver[day - 1]?.title}</h1>
                      <div className='text-center'>
                        {
                          parse(Beleaver[day - 1]?.descripcion)
                        }
                      </div>
                      <img src = {Beleaver[day - 1]?.image} alt="" className='img-fluid rounded' />
                    </>
                    :
                      <>
                      <h1 className='text-center'>{Beleaver[day]?.title}</h1>
                      <div className='text-center'>
                        {
                          parse(Beleaver[day]?.descripcion)
                        }
                      </div>
                      <img src = {Beleaver[day]?.image} alt="" className='img-fluid rounded' />
                    </>
                    }
                    {/* <Slider {...settings}>
                      {
                        (Beleaver)
                          &&
                        Beleaver?.map(beleaver => {
                          return (
                            <div key={beleaver._id}>
                              <h1 className='text-center'>{beleaver.title}</h1>
                              <div className='text-center'>
                                {
                                  parse(beleaver.descripcion)
                                }
                              </div>
                              <img src = {beleaver.image} alt="" className='img-fluid rounded' />
                            </div>
                          )
                        })
                      }
                    </Slider> */}
                  </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}
