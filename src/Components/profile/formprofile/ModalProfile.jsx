import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { updatTracking } from '../../../action/user'

export const ModalProfile = () => {

    const {activeUser} = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const {handleSubmit, getFieldProps} = useFormik({
        initialValues: {
            biliever: activeUser?.biliever,
            discipleship: activeUser?.discipleship,
            tracking: activeUser?.tracking,
            reset: false
        },
        enableReinitialize: true,
        onSubmit: ({biliever, discipleship, reset, tracking}) => {

            dispatch(updatTracking(biliever, discipleship, reset, tracking))
        },
        validationSchema: Yup.object({
        })
    })

  return (
    <div className="modal fade" id="exampleModalProfileSettings" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content shadow bg-dark">
                <div className="modal-header" style = {{border: 'none'}}>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <h1 className='text-center'>Configuración de seguimiento</h1>
                
                <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                        <div className = 'd-flex justify-content-center align-items-center p-4 my-2 flex-column'>
                            <div className="row">
                                <div className="col form-check">
                                    <input {...getFieldProps('biliever')} type="checkbox" defaultChecked = {((getFieldProps('biliever').value) === true) ? true : false} className="form-check-input" id="exampleCheck1" />
                                    {
                                        ((getFieldProps('biliever').value) === true)
                                            ?
                                        <label className="form-check-label">¿Quieres dejar de recibir seguimiento de nuevo creyente?</label>
                                            :
                                        <label className="form-check-label">¿Eres nuevo creyente?</label>
                                    }
                                </div>

                                <div className="col form-check">
                                    <input {...getFieldProps('discipleship')} type="checkbox" defaultChecked = {((getFieldProps('discipleship').value) === true) ? true : false} className="form-check-input" id="exampleCheck2" />
                                    {
                                        ((getFieldProps('discipleship').value) === true)
                                            ?
                                        <label className="form-check-label">¿Quieres dejar de recibir recordatorios para los discipulados?</label>
                                            :
                                        <label className="form-check-label">¡Tenemos Discipulado para ti!</label>
                                    }
                                </div>

                                <div className="col form-check">
                                    <input {...getFieldProps('tracking')} type="checkbox" defaultChecked = {((getFieldProps('tracking').value) === true) ? true : false} className="form-check-input" id="exampleCheck3" />
                                    {
                                        ((getFieldProps('tracking').value) === true)
                                            ?
                                        <label className="form-check-label">¿Quieres dejar de recibir seguimiento?</label>
                                            :
                                        <label className="form-check-label">¿Deseas seguimiento para crecer en el Señor?</label>
                                    }
                                </div>
                            </div>

                            <div className="row my-5">
                                <div className="col form-check">
                                    <input {...getFieldProps('reset')} type="checkbox" className="form-check-input" id="exampleCheck4" />
                                    <label className="form-check-label">¿Deseas reiniciar tu seguimiento?</label>
                                </div>
                            </div>
                        </div>
                        <button type='submit' className = 'btn btn-outline-primary form-control' data-bs-dismiss="modal" aria-label="Close">Guardar</button>
                    </form>
                </div>
            </div>
        </div>
    </div> 
  )
}
