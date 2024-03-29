import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick/lib/slider'
import { updateNoModalReset } from '../../action/user'

export const ModalBilieveReset = () => {

  const dispatch = useDispatch()

    const [first, setfirst] = useState(false)

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

    const ShowNow = localStorage.getItem('resetBeleaver')

    useEffect(() => {
      let isMounted = true;
        const timer = setTimeout(() => {
          if (isMounted && !!ShowNow === false) {
            setfirst(true)
          }
        }, 3000);

        return () => {
          clearTimeout(timer);
          isMounted = false;
        }
    }, [ShowNow])

    console.log(!!ShowNow)

    const onHideModal = () => {
      setfirst(false)
    }

    const onClickNo = () => {
      dispatch(updateNoModalReset('NO'))
      setfirst(false)
      localStorage.setItem('resetBeleaver', true)
    }

    const onClickYes = () => {
      dispatch(updateNoModalReset('YES'))
      setfirst(false)
      localStorage.setItem('resetBeleaver', true)
    }

    useEffect(() => {
      if (first === false) {
        setfirst(false)
      }
    }, [first])
    
    
  return (
    <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
        <Modal
            contentClassName='bg-dark'
            centered
            size="lg"
            show={first}
            onHide={() => onHideModal()}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header id='modal-header-video' closeButton>
            </Modal.Header>
            <Modal.Body> 
                <div className="row">
                <Slider {...settings}>
                <div>
                    <h1 className='text-center'>¿Te gustaria tener seguimiento para poder ver cada dia informacion como esta, que aporte a tu crecimiento espiritual?</h1>
                    <div className='d-flex justify-content-center'>
                        <button onClick={onClickYes} className='btn btn-primary form-control mr-2'>Si</button>
                        <button onClick={onClickNo} className='btn btn-danger form-control ml-2'>No</button>
                    </div>
                    <hr />
                    <h4 className='text-center'>{Beleaver[0]?.title}</h4>
                    <img src = {Beleaver[0]?.image} alt="" className='img-fluid rounded' />
                </div>
                    {/* {
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
                    } */}
                </Slider>
                </div>
            </Modal.Body>
        </Modal>
    </div>
  )
}
