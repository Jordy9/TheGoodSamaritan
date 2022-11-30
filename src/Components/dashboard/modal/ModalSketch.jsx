import React from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import moment from 'moment'
import perfil1 from '../../../heroes/User.png'
import { SketchResponsive } from '../componentsModal/SketchResponsive'
import { SketchNormal } from '../componentsModal/SketchNormal'
import { useResponsive } from '../../../hooks/useResponsive'
import { useState } from 'react'

export const ModalSketch = () => {
    const {activeBosquejo} = useSelector(state => state.skt)

    const {users} = useSelector(state => state.auth)

    const bosquejoCount = users?.filter(user => user.id === activeBosquejo?.user)

    const [ respWidth ] = useResponsive()
    
    const [heightScroll, setHeightScroll] = useState(0)
    
    return (
        <div className="modal fade" id="exampleModal2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
            <div className="modal-dialog modal-fullscreen modal-dialog-centered">
                <div className="modal-content bg-dark">
                    <div className="modal-header" style={{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6 d-flex justify-content-start align-items-center">
                                    <img src={(bosquejoCount[0]?.urlImage) ? bosquejoCount[0]?.urlImage : perfil1} style = {{objectFit: 'cover', width: '50px', height: '50px', borderRadius: '50%'}} className='img-fluid image-round imgag shadowImage mx-2' alt=''/>
                                    <span className='text-center'>Pr. {bosquejoCount[0]?.name} {bosquejoCount[0]?.lastName}</span>
                                </div>
                        
                                <div className="col-6 d-flex justify-content-end align-items-center">
                                    <span id='dateMobile' className='text-right mr-4'>{moment(activeBosquejo?.createdAt).format('MMMM Do YYYY')}</span>
                                    <span id='dateDeskLap' className='text-right mr-4'>{moment(activeBosquejo?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                                </div>
                            </div>

                            {
                                (respWidth > 991)
                                    ?
                                <h1 className='text-center'>{activeBosquejo?.title}</h1>
                                    :
                                (heightScroll > 190)
                                    &&
                                <h1 className='text-center'>{activeBosquejo?.title}</h1>
                            }
                            
                        </div>
                    </div>
                    <div onScroll={({target}) => setHeightScroll(target?.scrollTop)} className="modal-body">
                        {
                            (respWidth > 991)
                                ?
                            <SketchNormal activeBosquejo={activeBosquejo} parse = {parse} />
                                :
                            <>
                                <SketchResponsive activeBosquejo={activeBosquejo} heightScroll = {heightScroll} />
                                <div className='mt-3'>
                                    {
                                        parse(activeBosquejo.descripcion || '')
                                    }
                                </div>
                            </>
                        }
                    </div>
                    <div className="modal-footer" style={{border: 'none'}}>
                        <button className="btn btn-secondary" data-bs-target="#exampleModal2" data-bs-toggle="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
