import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getImageApi } from '../../../../action/miniSerie'
import { Pagination } from './pagination/Pagination'

export const ModalImage = ({setFieldValue, setimag, modalOpen, setModalOpen, setSelectedImage}) => {

    const dispatch = useDispatch();

    const hanldeClose = () => {
        setModalOpen(false)
    }

    const [newImage, setNewImage] = useState({
        hits: [],
        total: 0,
        totalHits: 0, 
        
    })

    const [searchParam, setsearchParam] = useState('')
    
    const debounceRef = useRef()

    const onQueryChange = (target) => {

        setsearchParam(target.value)

        if (target.value === '') return

        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            dispatch(getImageApi(target.value, setNewImage))
        }, 350);
    }

    const handledSelected = (webformatURL) => {
        setSelectedImage(webformatURL)
        setFieldValue('image', webformatURL)
        setModalOpen(false)
    }

    const handledSelectedUpload = (e) => {
        setSelectedImage('')
        setFieldValue('image', e.currentTarget.files[0], (e.currentTarget.files[0]) ? setimag(URL.createObjectURL(e.currentTarget.files[0]) || '') : setimag())
        setModalOpen(false)
    }

    const handledImage = () => {
        document.querySelector('#fileSelector').click()
    }

  return (
    <Modal
        contentClassName='bg-dark'
        centered
        size="lg"
        show={modalOpen}
        scrollable
        onHide={hanldeClose}
        aria-labelledby="example-modal-sizes-title-lg"
    >
        <Modal.Header id='modal-header-video' closeButton>
        </Modal.Header>
            <Modal.Title className='mx-3'>
                <div className="row">
                    <div className="col-12">
                        <div className = 'row' style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5'>
                                <div className="form-group">
                                    <button type='button' className='btn btn-outline-primary form-control' onClick={handledImage}>Subir imagen</button>
                                    <input accept="image/*" id='fileSelector' hidden = {true} type="file" className='form-control bg-transparent text-white' name='image' onChange={(e) => handledSelectedUpload(e)}/>
                                </div>
                            </div>

                            <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5'>
                                <div className="form-outline">
                                    <input placeholder='Buscador' type="search" onChange={({target}) => onQueryChange(target)} className="form-control bg-transparent text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Modal.Title>
        <Modal.Body style={{height: '500px'}}> 
            <div className="row">
                {
                    (newImage?.hits?.length !== 0)
                        ?
                    newImage?.hits?.map(({webformatURL}) => {
                        return (
                            <div onClick={() => handledSelected(webformatURL)} key={webformatURL} className = 'col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-2'>
                                <img src={webformatURL} className = 'rounded' style = {{width: '100%', height: '100%', cursor: 'pointer'}} alt="" />
                            </div>
                        )
                    })
                        :
                    <>
                        <h1 className="text-center image-round bg-dark p-4">
                            Por favor escriba una referencia de la imagen que necesita o suba alguna que tenga.
                        </h1>
                    </>
                }
            </div>

        </Modal.Body>
        
        <Modal.Footer className='d-flex justify-content-center'>
            {
                (newImage?.totalHits !== 0)
                    &&
                <Pagination searchParam={searchParam} newImage = {newImage} setNewImage = {setNewImage} />
            }
        </Modal.Footer>
    </Modal>
  )
}
