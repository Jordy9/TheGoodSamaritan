import React from 'react'
import { useSelector } from 'react-redux'
import h2p from 'html2plaintext'

export const PetitionModal = () => {

    const {activePetitions} = useSelector(state => state.pt)

    const {activeUser} = useSelector(state => state.auth)

    return (
        <>
            <div className="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content shadow bg-dark">
                        <div className="modal-header" style = {{border: 'none'}}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <div className="col-12">
                            <div className="mb-3" style = {{border: 'none'}}>
                                <h5 className="text-white text-center mt-2">Petición de oración</h5>
                                <div className="card-body">
                                    <form>
                                        <div className = 'row'>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Título</label>
                                                    <input type="text" className = 'form-control bg-transparent text-white' value={activeUser?.title} />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Nombre</label>
                                                    <input type="text" className = 'form-control bg-transparent text-white' value={activeUser.name} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className = 'row'>
                                            <div className="col-12">    
                                                <div>
                                                    <textarea style = {{resize: 'none'}} readOnly rows = '5' className = 'form-control bg-transparent text-white' value={h2p(activePetitions?.descripcion)} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
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
