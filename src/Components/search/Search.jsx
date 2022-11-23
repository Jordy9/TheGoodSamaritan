import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { activeSearch, setShow, startGetAll } from '../../action/search'
import { ModalSearch } from './modal/ModalSearch'
import moment from 'moment'
import { useRef } from 'react'

export const Search = () => {

    const dispatch = useDispatch()

    const [filtroDeBusqueda, setFiltroDeBusqueda] = useState([])
    
    const handledSet = (filtro) => {
        dispatch(activeSearch(filtro))
        dispatch(setShow())
    }

    const debounceRef = useRef()

    const onQueryChange = (target) => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            dispatch(startGetAll(target.value, setFiltroDeBusqueda))
        }, 350);
    }

  return (
      <>
      <h1>Buscador</h1>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="input-group">
                    <input placeholder='Buscar por título' type="search" onChange={({target}) => onQueryChange(target)} className="form-control bg-transparent text-white" />
                </div>
            </div>
        </div>

        <div className='row d-flex justify-content-center my-3'>
            {
                (filtroDeBusqueda?.length !== 0)
                    ?
                filtroDeBusqueda?.map(filtro => {
                    const fechainicio1 = moment(filtro?.updatedAt, 'YYYY-MM-DD')
                    const fechafin2 = moment()

                    const NuevoCap = fechafin2.diff(fechainicio1, 'day')
                    return (
                        <div key={filtro._id} onClick={() => handledSet(filtro)} className = 'col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 my-3 mx-3 text-white'>
                            <div className='borderCards'>
                                {
                                    (NuevoCap === 0)
                                        &&
                                    <div style={{borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', position: 'absolute', zIndex: 1045, backgroundColor: 'red', right: 0, boxShadow: '0 4px 0 0 rgba(0,0,0,0.39)'}}>
                                        <span className='p-2'>Nuevo capítulo</span>
                                    </div>
                                }

                                {
                                    (filtro?.image?.includes('.mp4'))
                                        ?
                                    <video src={filtro?.image} style={{width: '100%', height: '355px', objectFit: 'cover', borderTopLeftRadius: '40px', borderTopRightRadius: '40px'}}></video>
                                        :
                                    <img style={{objectFit: 'cover', cursor: 'pointer', width: '100%', height: '355px'}} src={filtro.image} alt="" className='img-fluid cardRound' />
                                }

                                <h5 className='p-2 textCard'>{filtro.title}</h5>
                            </div>
                        </div>
                    )
                })
                    :
                <h1 className="text-center image-round bg-dark p-4">
                    Por favor Escriba el título de lo que desea buscar
                </h1>
            }
        </div>
        <ModalSearch />
      </>
  )
}
