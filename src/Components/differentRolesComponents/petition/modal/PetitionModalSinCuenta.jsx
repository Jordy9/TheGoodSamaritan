import moment from 'moment'
import React from 'react'
import { useSelector } from 'react-redux'

export const PetitionModalSinCuenta = () => {

    const {activePetitionSinCuenta} = useSelector(state => state.pt)
    return (
        <>
            <div className="modal fade" id="exampleModal11" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        <div className = 'row'>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Título</label>
                                                    <input readOnly className = 'form-control bg-transparent text-white' value={activePetitionSinCuenta?.title} />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Fecha</label>
                                                    <input readOnly className = 'form-control bg-transparent text-white' value={moment(activePetitionSinCuenta?.createdAt).format('MMMM Do YYYY, h:mm a')} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className = 'row'>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Nombre</label>
                                                    <input readOnly className = 'form-control bg-transparent text-white' value={activePetitionSinCuenta?.name} />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Número de teléfono</label>
                                                    <input readOnly className = 'form-control bg-transparent text-white' value={activePetitionSinCuenta?.number} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className = 'row'>
                                            <div className="col-12">
                                                <div>
                                                    <textarea style = {{resize: 'none'}} readOnly rows = '5' className = 'form-control bg-transparent text-white' value={activePetitionSinCuenta?.descripcion} />
                                                </div>
                                            </div>
                                        </div>
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
