import React from 'react'
import { useSelector } from 'react-redux'

export const ModalImageShow = () => {

    const {activeImage} = useSelector(state => state.iv)
  return (
    <>
        <div className="modal fade" id="exampleModalImageShow" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog p-4 modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div className="modal-body">
                    <div className="col-12">
                        <div className="mb-3" style = {{border: 'none'}}>
                            <div className="card-body">
                                <img src = {activeImage} alt="" className='img-fluid image-round' style={{width: '100%', height: '100%'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
