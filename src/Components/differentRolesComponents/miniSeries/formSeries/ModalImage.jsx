import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { getImageApi } from '../../../../action/miniSerie'
import { ImageGallery } from './ImageGallery'
import { Pagination } from './pagination/Pagination'

export const ModalImage = ({setFieldValue, setimag, modalOpen, setModalOpen, setSelectedImage}) => {

    const dispatch = useDispatch();

    const [newImage, setNewImage] = useState({
        hits: [],
        total: 0,
        totalHits: 0, 
    })

    const first = useRef()

    const [changeSwitch, setChangeSwitch] = useState(false)

    const [searchParam, setsearchParam] = useState('')

    const hanldeClose = () => {
        setModalOpen(false)
        setChangeSwitch(false)
        setNewImage({
            hits: [],
            total: 0,
            totalHits: 0, 
        })
        setsearchParam('')
    }
    
    const debounceRef = useRef()

    const onQueryChange = (target) => {

        setsearchParam(target.value)

        if (target.value === '') return

        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            dispatch(getImageApi(target.value, setNewImage, null, changeSwitch))
        }, 350);
    }

    const handledSelected = (webformatURL, id) => {
        setSelectedImage(webformatURL)
        setModalOpen(false)

        const toDataURL = (url) => fetch(url)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result)
                reader.onerror = reject
                reader.readAsDataURL(blob)
            }))

        // ***Here is code for converting "Base64" to javascript "File Object".***

        const dataURLtoFile = (dataurl, filename) => {
            let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type:mime});
        }

        // *** Calling both function ***

        toDataURL(webformatURL)
        .then(dataUrl => {
            let fileData = dataURLtoFile(dataUrl, `${id}.jpg`);
            if (fileData) {
                setFieldValue('image', fileData)
            }
        })
    }

    const handledSelectedUpload = (e) => {
        setSelectedImage('')
        setFieldValue('image', e.currentTarget.files[0], (e.currentTarget.files[0]) ? setimag(URL.createObjectURL(e.currentTarget.files[0]) || '') : setimag())
        setModalOpen(false)
    }

    const handledImage = () => {
        document.querySelector('#fileSelector').click()
    }

    useEffect(() => {
        if (searchParam?.length > 0) {
            dispatch(getImageApi(searchParam, setNewImage, null, changeSwitch))
        }
    }, [changeSwitch])
    
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
                <div className = 'row'>
                   <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12' style={{display: 'flex', justifyContent: 'space-between'}}>
                        <label className="form-check-label">Buscar imagenes en pixabay</label>
                        <div onChange={({target}) => setChangeSwitch(target.checked)} className="form-check form-switch">
                            <input defaultChecked = {changeSwitch} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                        <label className="form-check-label">Buscar imagenes en unsplash</label>
                   </div>
                </div>
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
        <Modal.Body id='modalImage' style={{height: '500px'}}> 
            <div className="row">
                <ImageGallery changeSwitch={changeSwitch} handledSelected = {handledSelected} newImage = {newImage} />
            </div>

        </Modal.Body>
        
        <Modal.Footer className='d-flex justify-content-center'>
            {
                (newImage?.totalHits !== 0)
                    &&
                <Pagination searchParam={searchParam} newImage = {newImage} setNewImage = {setNewImage} changeSwitch = {changeSwitch} number = {(changeSwitch) ? 5 : 20} />
            }
        </Modal.Footer>
    </Modal>
  )
}
