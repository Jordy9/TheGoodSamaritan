import React from 'react'
import { useForm } from '../../../../hooks/useForm'

export const ModalPray = () => {

    const [HandledInputChange, {nombre, apellido, descripcion}] = useForm({
        nombre: '', 
        apellido: '', 
        descripcion: '',
    })

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content shadow bg-dark">
                        <div className="modal-header" style = {{border: 'none'}}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <div className="col-12">
                            <div className="mb-3" style = {{border: 'none'}}>
                                <h5 className="text-white text-center mt-2">Petición de oración</h5>
                                <div className="card-body">
                                    <form className = 'needs-validation'>
                                        <div className="row">
                                            <div className="col-6 form-group">
                                                <label>Nombre</label>
                                                <input name = 'nombre' type="text" onChange = {HandledInputChange} value = {nombre} placeholder = 'Juan' className = 'form-control bg-transparent text-white' />
                                            </div>

                                            <div className="col-6 form-group">
                                                <label>Nombre de la persona</label>
                                                <input name = 'apellido' type="text" onChange = {HandledInputChange} value = {apellido} placeholder = 'Taveras' className = 'form-control bg-transparent text-white' />
                                            </div>
                                        </div>
                                            
                                        <div className="row">
                                            <div className="col form-group">
                                                <label>Descripción</label>
                                                <textarea style = {{resize: 'none'}} name = 'descripcion' type="text" rows = '5' onChange = {HandledInputChange} value = {descripcion} placeholder = 'Tu descripción aqui' className = 'form-control bg-transparent text-white' />
                                            </div>
                                        </div>
                
                                    </form>
                                    <button className = 'btn btn-outline-primary form-control'>Enviar</button>
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
