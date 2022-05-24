import React from 'react'

export const ModalImage = ({image, perfil, user}) => {
  return (
    <div className="modal fade" id="exampleModalImageChatUser" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content shadow bg-dark">
                <div className="modal-header" style = {{border: 'none'}}>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            <div className="modal-body" style={{overflow: 'hidden'}}>
                <div className="row">
                    <div className="col-12">
                        <h1 style = {{cursor: 'pointer'}} data-bs-toggle="modal" data-bs-target="#exampleModalImageChatUser" className='mx-2 text-center'><strong>{user[0].name} {user[0].lastName}</strong></h1>
                        <img src = {image || perfil} style = {{width: '100%', height: '544px', objectFit: 'cover'}} className = 'img-fluid image-round' alt="" />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
