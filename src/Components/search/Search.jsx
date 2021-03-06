import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { activeSearch, setShow } from '../../action/search'
import { ModalSearch } from './modal/ModalSearch'
import moment from 'moment'

export const Search = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')

    const {miniSeries} = useSelector(state => state.mi)
    // const {Capsules} = useSelector(state => state.ca)
    const {Bosquejos} = useSelector(state => state.skt)

    let filtroDeBusqueda

    if (miniSeries && Bosquejos) {
        filtroDeBusqueda = [...miniSeries, ...Bosquejos]
    }
    
    const handledSet = (filtro) => {
        dispatch(activeSearch(filtro))
        dispatch(setShow())
      }

  return (
      <>
      <h1>Buscador</h1>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="input-group">
                    <input placeholder='Buscar por título' type="search" value={title} onChange={({target}) => setTitle(target.value)} className="form-control bg-transparent text-white" />
                </div>
            </div>
        </div>

        <div className='row d-flex justify-content-center my-3'>
            {
                (title !== '')
                    ?
                filtroDeBusqueda?.filter(filtroDeBusqueda => (title !== '') && (filtroDeBusqueda.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && filtroDeBusqueda).map(filtro => {
                    const fechainicio1 = moment(filtro?.updatedAt, 'YYYY-MM-DD')
                    const fechafin2 = moment()

                    const NuevoCap = fechafin2.diff(fechainicio1, 'day')
                    return (
                        <div key={filtro._id} onClick={() => handledSet(filtro)} className = 'col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 imgag my-3 mx-3 shadow p-4 bg-dark image-round flex-column text-white d-flex justify-content-center align-items-center'>
                            <div>
                                {
                                    (NuevoCap === 0)
                                        &&
                                    <div style={{borderBottomLeftRadius: '40px', borderTopLeftRadius: '40px', position: 'absolute', zIndex: 1045, backgroundColor: 'red', right: 0, boxShadow: '0 4px 0 0 rgba(0,0,0,0.39)'}}>
                                        <span className='p-2'>Nuevo capítulo</span>
                                    </div>
                                }
                                <img style={{objectFit: 'cover', cursor: 'pointer', width: '100%', height: '300px'}} src={filtro.image} alt="" className='img-fluid image-round shadowImage' />
                            </div>
                            <h5 className='text-center'>{filtro.title}</h5>
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
