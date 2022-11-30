import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import moment from 'moment'
import { useState } from 'react'
import { scrollToTopAnimated } from '../../../helper/ScrollToBottom'
import { Modal } from 'react-bootstrap'
import { setHide } from '../../../action/miniSerie'
import perfil1 from '../../../heroes/User.png'
import { MiniserieNormal } from '../componentsModal/MiniserieNormal'
import { useResponsive } from '../../../hooks/useResponsive'
import { MiniserieResponsive } from '../componentsModal/MiniserieResponsive'

export const ModalMiniSerie = () => {

  const dispatch = useDispatch()

    const {activeSerie, Show} = useSelector(state => state.mi)

    const {uid, users} = useSelector(state => state.auth)

    const {socket} = useSelector(state => state.sk)

    const readCountFilter = activeSerie?.readCount?.filter(rc => rc === uid)

    const [first, setfirst] = useState((readCountFilter?.length === 0) ? activeSerie?.count : 0)

    const countArray = activeSerie?.descripcion?.length

    useEffect(() => {
      if (Show === true) {
        scrollToTopAnimated('descripcion-serie')
      }
    }, [first, Show])

    const next = () => {
      if (countArray - 1 !== first) {
        setfirst(first + 1)
      }
    }

    const prev = () => {
      if (first > 0) {
        setfirst(first - 1)
      }
    }

    const onHideModal = () => {
      dispatch(setHide())
      setfirst(0)
    }

    useEffect(() => {
        socket?.emit('read-count', activeSerie?._id, uid)
    }, [socket, uid, activeSerie?._id])
    
    const miniSerieCount = users?.filter(user => user.id === activeSerie?.user)

    const [ respWidth ] = useResponsive()

    const [heightScroll, setHeightScroll] = useState(0)

    return (

      <>
          <Modal
            contentClassName='bg-dark'
            centered
            fullscreen
            show={Show}
            onHide={() => onHideModal()}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header id='modal-header-video' closeButton>
            </Modal.Header>
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6 d-flex justify-content-start align-items-center">
                      <img src={(miniSerieCount[0]?.urlImage) ? miniSerieCount[0]?.urlImage : perfil1} style = {{objectFit: 'cover', width: '50px', height: '50px', borderRadius: '50%'}} className='img-fluid image-round imgag shadowImage mx-2' alt=''/>
                      <span className='text-center'>Pr. {miniSerieCount[0]?.name} {miniSerieCount[0]?.lastName}</span>
                    </div>
              
                    <div className="col-6 d-flex justify-content-end align-items-center">
                      <span id='dateMobile' className='text-right mr-4'>{moment(activeSerie?.createdAt).format('MMMM Do YYYY')}</span>
                      <span id='dateDeskLap' className='text-right mr-4'>{moment(activeSerie?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                    </div>
                  </div>
                    {
                      (respWidth > 991)
                          ?
                      <h1 className='text-center'>{activeSerie?.title}</h1>
                          :
                      (heightScroll > 200 || first > 0)
                          &&
                      <h1 className='text-center'>{activeSerie?.title}</h1>
                    }
                </div>
              </div>
              
            <Modal.Body onScroll={({target}) => setHeightScroll(target?.scrollTop)} id='descripcion-serie'>    

              {
                (respWidth > 991)
                  ?
                <div className="modal-body">
                    <MiniserieNormal 
                      activeSerie={activeSerie} 
                      first = {first} 
                      parse = {parse} 
                    />
                </div>
                  :
                <>
                  <MiniserieResponsive
                    activeSerie={activeSerie} 
                    first = {first} 
                    parse = {parse} 
                  />
                  <div className='mt-3'>
                    {
                      (activeSerie)
                        &&
                      parse(activeSerie?.descripcion[first])
                    }
                  </div>
                </>
              }                     
            </Modal.Body>

            <Modal.Footer style={{display: 'flex', justifyContent: 'space-between', border: 'none'}}>
              <button className='btn btn-outline-secondary' style={{borderRadius: '10px', color: 'white'}} hidden = {(first <= 0)} onClick = {prev}><i className="fa-solid fa-angle-left"></i> Anterior</button>

              <button className='btn btn-outline-secondary ml-auto' style={{borderRadius: '10px', color: 'white'}} hidden = {(countArray - 1 === first)} onClick = {next}>Siguiente <i className="fa-solid fa-angle-right"></i></button>
            </Modal.Footer>
          </Modal>
      </> 
    )
}
