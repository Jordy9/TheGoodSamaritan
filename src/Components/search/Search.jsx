import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { activeSearch } from '../../action/search'
import { ModalSearch } from './modal/ModalSearch'

export const Search = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState('')

    const {miniSeries} = useSelector(state => state.mi)
    const {Capsules} = useSelector(state => state.ca)
    const {Bosquejos} = useSelector(state => state.skt)

    let filtroDeBusqueda

    if (miniSeries && Capsules && Bosquejos) {
        filtroDeBusqueda = [...miniSeries, ...Capsules, ...Bosquejos]
    }
    
    const handledSet = (filtro) => {
        dispatch(activeSearch(filtro))
      }

  return (
      <>
      <h1 style={{marginTop: '70px'}}>Buscador</h1>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <div className="input-group">
                    <input placeholder='Buscar por título' type="search" value={title} onChange={({target}) => setTitle(target.value)} className="form-control bg-transparent text-white" />
                </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                {
                    (title !== '')
                        ?
                    filtroDeBusqueda?.filter(filtroDeBusqueda => (title !== '') && (filtroDeBusqueda.title.toLowerCase().includes(title.toLowerCase())) && filtroDeBusqueda).map(filtro => {
                        return (
                            <div key={filtro._id} className = 'shadow p-4 mt-2 bg-dark rounded-lg flex-column text-white'>
                                <img style={{cursor: 'pointer'}} src={filtro.image} alt="" className='img-fluid' onClick={() => handledSet(filtro)} data-bs-toggle="modal" data-bs-target="#exampleModalSearch" />
                                <h5 className='text-center'>{filtro.title}</h5>
                            </div>
                        )
                    })
                        :
                    <h3 className="text-center alert alert-info">Por favor Escriba el título de lo que desea buscar</h3>
                }
            </div>
        </div>
        <ModalSearch />
      </>
  )
}
